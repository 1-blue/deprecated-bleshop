import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// util
import { isFulFilled, movePhoto } from "@src/libs";

// type
import type { ApiUpdateUserResponse } from "@src/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiUpdateUserResponse>
) {
  const { body } = req;
  const session = await getSession({ req });

  if (!session || !session.user)
    return res.status(403).json({ message: "접근 권한이 없습니다." });

  const userIdx = session.user.idx;

  // 2022/08/14 - 유저 일반 정보 수정 - by 1-blue
  if (req.method === "PUT") {
    const { name, email, phone, path } = body;

    // 이미지 수정
    if (path) {
      await movePhoto(path, "user");

      await prisma.user.update({
        where: { idx: userIdx },
        data: { photo: path.replace("/temporary", "") },
      });

      return res.json({ message: "이미지를 수정했습니다. 새로고침해주세요!" });
    }
    // 기본 정보 수정
    else {
      // 이름, 이메일, 휴대폰번호 중복 여부 확인
      const promiseList = [
        prisma.user.findUnique({ where: { name }, select: { idx: true } }),
        prisma.user.findUnique({ where: { email }, select: { idx: true } }),
        prisma.user.findUnique({ where: { phone }, select: { idx: true } }),
      ];
      const promiseResultList = await Promise.allSettled(promiseList);
      const resultList = promiseResultList
        .filter(isFulFilled)
        .map((data) => ({ ...data.value }));
      if (resultList[0].idx && resultList[0].idx !== userIdx)
        return res.status(409).json({ message: "이미 사용중인 이름입니다." });
      if (resultList[1].idx && resultList[1].idx !== userIdx)
        return res.status(409).json({ message: "이미 사용중인 이메일입니다." });
      if (resultList[2].idx && resultList[2].idx !== userIdx)
        return res.status(409).json({ message: "이미 사용중인 폰번호입니다." });

      const user = await prisma.user.update({
        where: { idx: userIdx },
        data: { name, email, phone },
      });

      return res.json({
        message: "기본 정보를 수정했습니다. 다시 로그인해 주세요!",
        user,
      });
    }
  }
}
