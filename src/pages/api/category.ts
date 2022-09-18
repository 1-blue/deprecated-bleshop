import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiGetCategoryResponse } from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiGetCategoryResponse>
) {
  const { method } = req;

  try {
    // 모든 카테고리들 요청
    if (method === "GET") {
      const categories = await prisma.category.findMany();

      return res
        .status(200)
        .json({ message: "모든 카테고리를 가져왔습니다.", categories });
    }
  } catch (error) {
    console.error("/api/category >> ", error);
  }
}
