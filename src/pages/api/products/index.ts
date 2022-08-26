import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiGetProductsResponse } from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiGetProductsResponse>
) {
  const { method } = req;

  try {
    // lastIdx 기준으로 상품들 요청
    if (method === "GET") {
      let where = {};

      const limit = Number(req.query.limit);
      const lastIdx = Number(req.query.lastIdx);
      const keyword = req.query.keyword;
      const selectedCategory = req.query.selectedCategory;
      const selectedFilters = req.query.selectedFilters;

      // 특정 키워드를 가진 상품들을 검색하는 경우
      if (typeof keyword === "string") {
        where = {
          keywords: {
            some: {
              keywordIdx: keyword,
            },
          },
        };
      }

      // 특정 카테고리를 가진 상품들을 찾는 경우
      if (typeof selectedCategory === "string" && selectedCategory.length > 0) {
        where = {
          ...where,
          categories: {
            some: {
              categoryIdx: selectedCategory,
            },
          },
        };
      }

      // 특정 필터링을 적용한 경우
      if (typeof selectedFilters === "string" && selectedFilters.length > 0) {
        where = {
          ...where,
          filters: {
            some: {
              OR: selectedFilters.split(",").map((filter) => ({
                filterIdx: { equals: filter },
              })),
            },
          },
        };
      }

      const products = await prisma.product.findMany({
        where,
        take: limit,
        skip: lastIdx === -1 ? 0 : 1,
        ...(lastIdx !== -1 && { cursor: { idx: lastIdx } }),
        orderBy: { updatedAt: "desc" },
      });

      res.status(200).json({ products, message: "상품들을 가져왔습니다." });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      products: [],
      message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!",
    });
  }
}
