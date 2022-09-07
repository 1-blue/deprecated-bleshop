import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  ApiCreateReviewBody,
  ApiCreateReviewResponse,
  ApiDeleteReviewResponse,
  ApiGetReviewsResponse,
} from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    ApiGetReviewsResponse | ApiCreateReviewResponse | ApiDeleteReviewResponse
  >
) {
  const { method } = req;
  const session = await getSession({ req });

  const productIdx =
    Number(req.query.productIdx) || Number(req.body.productIdx);

  try {
    const exProduct = await prisma.product.findUnique({
      where: { idx: productIdx },
    });
    if (!exProduct)
      return res.status(404).json({ message: "상품이 존재하지 않습니다." });

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
    // 리뷰 생성
    else if (method === "POST") {
      if (!session || !session.user)
        return res.status(403).json({ message: "접근 권한이 없습니다." });

      const userIdx = session.user.idx;

      const { contents, score, photos, orderIdx } =
        req.body as ApiCreateReviewBody;

      // 리뷰 생성
      const reviewPromise = prisma.review.create({
        data: {
          contents,
          score: +score,
          productIdx,
          userIdx,
          photos: {
            createMany: {
              data: photos.map((photo) => ({
                path: photo.replace("/temporary", ""),
              })),
            },
          },
        },
      });

      // 해당 주문에 대해 리뷰 작성으로 변경
      const orderPromise = prisma.productsOnOrders.update({
        where: { productIdx_orderIdx: { productIdx, orderIdx: +orderIdx } },
        data: { isReview: true },
      });

      await Promise.allSettled([reviewPromise, orderPromise]);

      return res.status(201).json({
        message:
          "리뷰를 생성했습니다. \n리뷰를 작성한 상품 페이지로 이동됩니다.",
      });
    }
    // 리뷰 제거
    else if (method === "DELETE") {
      if (!session || !session.user)
        return res.status(403).json({ message: "접근 권한이 없습니다." });

      const reviewIdx = Number(req.query.reviewIdx);

      const deletedReview = await prisma.review.delete({
        where: { idx: reviewIdx },
      });

      // >>> 여기서부터 작업
      console.log("deletedReview >> ", deletedReview);

      return res.status(200).json({ message: "리뷰를 제거했습니다." });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!",
    });
  }
}
