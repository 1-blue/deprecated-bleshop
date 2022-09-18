import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// api
import apiService from "@src/api";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiCreateOrderResponse, CustomData } from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiCreateOrderResponse>
) {
  const session = await getSession({ req });

  if (!session || !session.user)
    return res.status(403).json({ message: "접근 권한이 없습니다." });

  const userIdx = session.user.idx;

  try {
    const { imp_uid, merchant_uid } = req.query;

    if (typeof imp_uid !== "string") return;

    // 액세스 토큰(access token) 발급 받기
    const {
      data: {
        response: { access_token },
      },
    } = await apiService.iamportService.apiGetToken();

    // imp_uid로 아임포트 서버에서 결제 정보 조회
    const {
      data: { response: paymentData },
    } = await apiService.iamportService.apiGetPaymentData({
      imp_uid,
      access_token,
    });

    const customData = JSON.parse(paymentData.custom_data) as CustomData;

    const createdOrder = await prisma.order.create({
      data: {
        name: paymentData.name,
        address: paymentData.buyer_addr,
        residence: customData.residence,
        message: customData.message,
        amount: paymentData.amount,
        email: paymentData.buyer_email,
        phone: paymentData.buyer_tel,
        provider: paymentData.pg_provider,
        User: { connect: { idx: userIdx } },
      },
    });

    await prisma.productsOnOrders.createMany({
      data: customData.singleData.map((data) => ({
        ...data,
        orderIdx: createdOrder.idx,
      })),
    });

    // 주문한 상품은 장바구니에서 제거
    prisma.basket.deleteMany({
      where: {
        productIdx: {
          in: customData.singleData.map((v) => v.productIdx),
        },
      },
    });

    return res.redirect("/information/order");
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!",
    });
  }
}
