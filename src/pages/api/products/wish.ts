import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiGetWishProductsResponse } from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiGetWishProductsResponse>
) {
  const { method } = req;
  const session = await getSession({ req });

  if (!session || !session.user)
    return res
      .status(403)
      .json({ wishes: [], message: "접근 권한이 없습니다." });

  const userIdx = session.user.idx;

  try {
    // lastIdx 기준으로 상품들 요청
    if (method === "GET") {
      const wishes = await prisma.wish.findMany({
        where: { userIdx },
        include: { product: true },
      });

      return res.status(200).json({
        wishes,
        message: "찜한 상품들을 가져왔습니다.",
      });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      wishes: [],
      message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!",
    });
  }
}
