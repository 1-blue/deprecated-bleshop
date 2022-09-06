import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  ApiCreateOrderBody,
  ApiCreateOrderResponse,
  ApiDeleteOrderResponse,
  ApiGetOrderListResponse,
} from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    ApiGetOrderListResponse | ApiCreateOrderResponse | ApiDeleteOrderResponse
  >
) {
  const { method } = req;
  const session = await getSession({ req });
  if (!session || !session.user)
    return res.status(403).json({ message: "접근 권한이 없습니다." });

  const userIdx = session.user.idx;

  try {
    // 모든 주문 내역 요청
    if (method === "GET") {
      const orderList = await prisma.order.findMany({
        where: { userIdx },
        include: {
          products: {
            include: {
              product: {
                select: { name: true, photo: true, price: true },
              },
            },
          },
        },
        orderBy: {
          updatedAt: "desc",
        },
      });

      return res.status(200).json({
        orderList,
        message: "모든 주문 내역을 가져왔습니다.",
      });
    }
    // 주문 내역 등록
    else if (method === "POST") {
      const { orderData, singleData } = req.body as ApiCreateOrderBody;

      const createdOrder = await prisma.order.create({
        data: { ...orderData, userIdx },
      });

      await prisma.productsOnOrders.createMany({
        data: singleData.map((data) => ({
          ...data,
          orderIdx: createdOrder.idx,
        })),
      });

      // 주문한 상품은 장바구니에서 제거
      prisma.basket.deleteMany({
        where: {
          productIdx: {
            in: singleData.map((v) => v.productIdx),
          },
        },
      });

      return res.status(201).json({ message: "결제를 완료했습니다." });
    }
    // 특정 주문 내역 제거
    else if (method === "DELETE") {
      const orderIdx = Number(req.query.orderIdx);

      await prisma.productsOnOrders.deleteMany({ where: { orderIdx } });
      await prisma.order.delete({ where: { idx: orderIdx } });

      return res
        .status(200)
        .json({ message: "특정 주문내역을 삭제했습니다.\n새로고침해주세요!" });
    }
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .json({ message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!" });
  }
}
