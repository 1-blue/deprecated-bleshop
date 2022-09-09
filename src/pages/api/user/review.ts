import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiGetReviewsOfUserResponse } from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiGetReviewsOfUserResponse>
) {
  const { method } = req;
  const session = await getSession({ req });

  if (!session || !session.user)
    return res
      .status(403)
      .json({ reviews: [], message: "접근 권한이 없습니다." });

  const userIdx = session.user.idx;

  try {
    // 로그인한 유저의 리뷰들 요청
    if (method === "GET") {
      const reviews = await prisma.review.findMany({
        where: { userIdx },
        orderBy: { updatedAt: "desc" },
        include: {
          photos: { select: { path: true } },
          Product: { select: { idx: true, name: true, photo: true } },
        },
      });

      return res.status(200).json({
        reviews,
        message: "작성하신 모든 리뷰들을 가져왔습니다.",
      });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      reviews: [],
      message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!",
    });
  }
}
