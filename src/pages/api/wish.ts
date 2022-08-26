import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiGetWishResponse } from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiGetWishResponse>
) {
  const { method } = req;
  const session = await getSession({ req });

  try {
    // 로그인한 유저가 특정 상품에 찜하기 눌렀는지 여부
    if (method === "GET") {
      if (!session || !session.user)
        return res
          .status(403)
          .json({ isWish: false, message: "접근 권한이 없습니다." });

      const userIdx = session.user.idx;
      const productIdx = Number(req.query.productIdx);

      const isWish = await prisma.wish.findUnique({
        where: { userIdx_productIdx: { userIdx, productIdx } },
      });

      return res.status(200).json({
        isWish: !!isWish,
        message: "특정 상품에 찜하기를 눌렀는지 여부입니다.",
      });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      isWish: false,
      message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!",
    });
  }
}
