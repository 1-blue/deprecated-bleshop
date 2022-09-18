import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiGetFiltersResponse } from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiGetFiltersResponse>
) {
  const { method } = req;

  try {
    // 모든 카테고리들 요청
    if (method === "GET") {
      try {
        const filters = await prisma.filter.findMany();

        return res
          .status(200)
          .json({ message: "모든 필터들을 가져왔습니다.", filters });
      } catch (error) {
        console.error(error);

        return res
          .status(400)
          .json({ message: "필터를 가져오는데 실패했습니다.", filters: [] });
      }
    }
  } catch (error) {
    console.error("/api/filter >> ", error);
  }
}
