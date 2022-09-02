import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  ApiCreateBasketResponse,
  ApiDeleteBasketResponse,
  ApiUpdateBasketResponse,
} from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    ApiUpdateBasketResponse | ApiCreateBasketResponse | ApiDeleteBasketResponse
  >
) {
  const { method } = req;
  const session = await getSession({ req });

  if (!session || !session.user)
    return res.status(403).json({ message: "접근 권한이 없습니다." });

  const userIdx = session.user.idx;

  try {
    // 장바구니에 상품 넣기
    if (method === "POST") {
      const { productIdx, ...body } = req.body;

      const exBasket = await prisma.basket.findUnique({
        where: { userIdx_productIdx: { productIdx: +productIdx, userIdx } },
      });
      if (exBasket)
        return res
          .status(409)
          .json({ message: "이미 장바구니에 존재하는 상품입니다." });

      await prisma.basket.create({ data: { productIdx, userIdx, ...body } });

      return res
        .status(201)
        .json({ message: "해당 상품을 장바구니에 담았습니다." });
    }
    // 장바구니에 담긴 상품 제거하기
    else if (method === "DELETE") {
      const productIdx = Number(req.query.productIdx);

      const exBasket = await prisma.basket.findUnique({
        where: { userIdx_productIdx: { userIdx, productIdx } },
      });

      if (!exBasket)
        return res
          .status(409)
          .json({ message: "장바구니에 해당 상품이 존재하지 않습니다." });

      await prisma.basket.delete({
        where: { userIdx_productIdx: { productIdx, userIdx } },
      });

      return res
        .status(200)
        .json({ message: "해당 상품을 장바구니에서 제거했습니다." });
    }
    // 장바구니 담긴 상품 수정
    else if (method === "PUT") {
      const productIdx = Number(req.body.productIdx);

      const exBasket = await prisma.basket.findUnique({
        where: { userIdx_productIdx: { userIdx, productIdx } },
      });

      if (!exBasket)
        return res
          .status(409)
          .json({ message: "장바구니에 해당 상품이 존재하지 않습니다." });

      await prisma.basket.update({
        where: { userIdx_productIdx: { userIdx, productIdx } },
        data: { ...req.body },
      });

      return res.status(200).json({
        message: "장바구니 상품의 데이터를 수정했습니다.",
      });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!",
    });
  }
}
