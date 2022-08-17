import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiGetAllAddressResponse } from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiGetAllAddressResponse>
) {
  const { method } = req;
  const session = await getSession({ req });

  if (!session || !session.user)
    return res.status(403).json({ message: "접근 권한이 없습니다." });

  try {
    // 로그인한 유저의 등록된 모든 주소 가져오기
    if (method === "GET") {
      const addresses = await prisma.address.findMany({
        where: { userIdx: session.user.idx },
      });

      return res.status(200).json({
        message: `${session.user.name}님의 모든 주소를 가져왔습니다.`,
        addresses,
      });
    }
  } catch (error) {
    console.error(error);

    return res
      .status(400)
      .json({ message: "서버의 오류입니다. 잠시후에 다시 시도해주세요!" });
  }
}
