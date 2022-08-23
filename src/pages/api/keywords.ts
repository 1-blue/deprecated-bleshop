import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiGetKeywordsResponse } from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiGetKeywordsResponse>
) {
  const { method } = req;

  try {
    // lastIdx 기준으로 상품들 요청
    if (method === "GET") {
      const word = req.query.word;

      if (typeof word === "object")
        return res
          .status(418)
          .json({ keywords: [], message: "잘못된 데이터를 전달받았습니다." });

      const keywords = await prisma.keyword.findMany({
        where: { keyword: { contains: word } },
        take: 10,
      });

      res
        .status(200)
        .json({ keywords, message: "추천 검색 키워드들을 가져왔습니다." });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      keywords: [],
      message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!",
    });
  }
}
