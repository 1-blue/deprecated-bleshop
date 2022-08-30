import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  ApiCreateWishResponse,
  ApiDeleteWishResponse,
  ApiGetWishResponse,
} from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    ApiGetWishResponse | ApiCreateWishResponse | ApiDeleteWishResponse
  >
) {
  const { method } = req;
  const session = await getSession({ req });

  if (!session || !session.user)
    return res
      .status(403)
      .json({ isWish: false, message: "접근 권한이 없습니다." });

  const userIdx = session.user.idx;
  const productIdx = Number(req.query.productIdx);

  try {
    const exProduct = await prisma.product.findUnique({
      where: { idx: productIdx },
    });
    if (!exProduct)
      return res.status(404).json({ message: "상품이 존재하지 않습니다." });

    const exWish = await prisma.wish.findUnique({
      where: { userIdx_productIdx: { userIdx, productIdx } },
    });

    // 로그인한 유저가 특정 상품에 찜하기 눌렀는지 여부
    if (method === "GET") {
      return res.status(200).json({
        isWish: !!exWish,
        message: "특정 상품에 찜하기를 눌렀는지 여부입니다.",
      });
    }
    // 찜하기 요청
    else if (method === "POST") {
      if (exWish)
        return res
          .status(409)
          .json({ message: "이미 찜하기를 누른 상품입니다." });

      await prisma.wish.create({ data: { productIdx, userIdx } });

      return res.status(201).json({ message: "찜하기를 성공했습니다." });
    }
    // 찜취소하기 요청
    else if (method === "DELETE") {
      if (!exWish)
        return res
          .status(409)
          .json({ message: "찜하기를 누르지 않은 상품입니다." });

      await prisma.wish.delete({
        where: { userIdx_productIdx: { productIdx, userIdx } },
      });

      return res.status(200).json({ message: "찜취소하기를 성공했습니다." });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      isWish: false,
      message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!",
    });
  }
}
