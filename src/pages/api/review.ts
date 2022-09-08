import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// util
import { movePhoto } from "@src/libs";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  ApiCreateReviewBody,
  ApiCreateReviewResponse,
  ApiDeleteReviewResponse,
  ApiGetReviewsOfProductResponse,
} from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    | ApiGetReviewsOfProductResponse
    | ApiCreateReviewResponse
    | ApiDeleteReviewResponse
  >
) {
  const { method } = req;
  const session = await getSession({ req });

  if (!session || !session.user)
    return res.status(403).json({ message: "접근 권한이 없습니다." });

  const userIdx = session.user.idx;

  try {
    // 리뷰 생성
    if (method === "POST") {
      const productIdx = Number(req.body.productIdx);
      const exProduct = await prisma.product.findUnique({
        where: { idx: productIdx },
      });

      if (!exProduct)
        return res.status(404).json({ message: "상품이 존재하지 않습니다." });

      const { contents, score, photos, orderIdx } =
        req.body as ApiCreateReviewBody;

      // aws 이미지 사용 확적으로 위치 이동
      const photosPromise = photos.map((photo) => movePhoto(photo, "review"));

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

      await Promise.allSettled([...photosPromise, reviewPromise, orderPromise]);

      return res.status(201).json({
        message:
          "리뷰를 생성했습니다. \n리뷰를 작성한 상품 페이지로 이동됩니다.",
      });
    }
    // 리뷰 제거
    else if (method === "DELETE") {
      const reviewIdx = Number(req.query.reviewIdx);
      const exReview = await prisma.review.findUnique({
        where: { idx: reviewIdx },
        include: { photos: { select: { path: true } } },
      });

      if (!exReview)
        return res.status(404).json({ message: "존재하지 않는 리뷰입니다." });

      // aws 이미지 제거
      const photosPromise = exReview.photos.map(({ path }) =>
        movePhoto(path, "remove")
      );

      await Promise.allSettled(photosPromise);

      await prisma.review.delete({ where: { idx: reviewIdx } });

      return res.status(200).json({ message: "리뷰를 제거했습니다." });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!",
    });
  }
}
