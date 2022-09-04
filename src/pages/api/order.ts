import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  ApiCreateOrderResponse,
  ApiGetOrderListResponse,
} from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiGetOrderListResponse | ApiCreateOrderResponse>
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
        include: { Product: { select: { name: true, photo: true } } },
      });

      return res.status(200).json({
        orderList,
        message: "모든 주문 내역을 가져왔습니다.",
      });
    }
    // 주문 내역 등록
    else if (method === "POST") {
      const { productIdx, ...body } = req.body;

      await prisma.order.create({
        data: {
          ...body,
          Product: { connect: { idx: productIdx } },
          User: { connect: { idx: userIdx } },
        },
      });

      return res.status(201).json({ message: "결제를 완료했습니다." });
    }
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .json({ message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!" });
  }
}
