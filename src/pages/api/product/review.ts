import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiGetReviewsOfProductResponse } from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiGetReviewsOfProductResponse>
) {
  const { method } = req;

  const productIdx =
    Number(req.query.productIdx) || Number(req.body.productIdx);

  try {
    const exProduct = await prisma.product.findUnique({
      where: { idx: productIdx },
    });
    if (!exProduct)
      return res
        .status(404)
        .json({ reviews: [], message: "상품이 존재하지 않습니다." });

    // 특정 상품의 리뷰들 요청
    if (method === "GET") {
      const limit = Number(req.query.limit);
      const lastIdx = Number(req.query.lastIdx);

      const reviews = await prisma.review.findMany({
        where: { productIdx },
        take: limit,
        skip: lastIdx === -1 ? 0 : 1,
        ...(lastIdx !== -1 && { cursor: { idx: lastIdx } }),
        orderBy: { updatedAt: "desc" },
        include: {
          photos: { select: { path: true } },
          User: { select: { name: true, photo: true } },
        },
      });

      return res.status(200).json({
        reviews,
        message: "특정 상품의 리뷰들을 가져왔습니다.",
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
