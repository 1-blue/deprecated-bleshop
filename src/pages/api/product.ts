import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  ApiCreateProductResponse,
  ApiGetProductResponse,
} from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiGetProductResponse | ApiCreateProductResponse>
) {
  const { method } = req;
  const session = await getSession({ req });

  try {
    // 특정 상품 상세 정보 요청
    if (method === "GET") {
      const productIdx = Number(req.query.productIdx);

      const product = await prisma.product.findUnique({
        where: { idx: productIdx },
        include: {
          photos: true,
          keywords: true,
        },
      });

      if (!product)
        return res
          .status(404)
          .json({ message: "찾는 상품이 존재하지 않습니다." });

      return res.status(200).json({
        product,
        message: "특정 상품에 대한 데이터입니다.",
      });
    }
    // 상품 생성
    else if (method === "POST") {
      if (!session || !session.user)
        return res.status(403).json({ message: "접근 권한이 없습니다." });

      const userIdx = session.user.idx;

      const {
        name,
        category,
        description,
        information: { brand, company, period, price },
        option: { color, size },
        photo,
        photos,
        keywords,
        filters,
      } = req.body;

      // "string[]"이 아니라면
      if (
        typeof photos !== "object" ||
        typeof keywords !== "object" ||
        typeof filters !== "object"
      )
        return res
          .status(418)
          .json({ message: "잘못된 데이터를 전달받았습니다." });

      // 상품 생성
      const productPromise = prisma.product.create({
        data: {
          name,
          price: +price,
          description,
          brand,
          company,
          period,
          color,
          size,
          photo,
          photos: {
            createMany: {
              data: (photos as string[]).map((photo) => ({ path: photo })),
            },
          },
          User: { connect: { idx: userIdx } },
        },
      });
      // 키워드 생성
      const keywordPromise = prisma.keyword.createMany({
        data: (keywords as string[]).map((keyword) => ({ keyword })),
        skipDuplicates: true,
      });
      // 필터 생성
      const filterPromise = prisma.filter.createMany({
        data: (filters as string[]).map((filter) => ({ filter })),
        skipDuplicates: true,
      });

      // 상품/키워드/필터 생성 병렬 처리
      const [createdProductResult] = await Promise.allSettled([
        productPromise,
        keywordPromise,
        filterPromise,
      ]);

      // 상품 생성 오류
      if (createdProductResult.status === "rejected") {
        console.log(createdProductResult);

        return res.status(418).json({
          message:
            "서버측에서 오류가 발생했습니다. 잠시후에 다시 시도해주세요!",
        });
      }

      // 상품 - 카테고리, 상품 - 키워드들, 상품 - 필터들 연결
      const createdProduct = await prisma.product.update({
        where: { idx: createdProductResult.value.idx },
        data: {
          categories: { create: { categoryIdx: category } },
          keywords: {
            createMany: {
              data: (keywords as string[]).map((keyword) => ({
                keywordIdx: keyword,
              })),
              skipDuplicates: true,
            },
          },
          filters: {
            createMany: {
              data: (filters as string[]).map((filter) => ({
                filterIdx: filter,
              })),
              skipDuplicates: true,
            },
          },
        },
      });

      return res.status(201).json({
        message: "상품을 등록했습니다.",
        productIdx: createdProduct.idx,
      });
    }
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .json({ message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!" });
  }
}
