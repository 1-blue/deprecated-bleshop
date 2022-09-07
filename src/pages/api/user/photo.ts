import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// util
import { getSignedURL, movePhoto } from "@src/libs";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  ApiDeleteUserPhotoResponse,
  ApiCreatePhotoResponse,
} from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiCreatePhotoResponse | ApiDeleteUserPhotoResponse>
) {
  const { query, method } = req;
  const session = await getSession({ req });

  if (!session || !session.user)
    return res.status(403).json({ message: "접근 권한이 없습니다." });

  const userIdx = session.user.idx;

  // 프로필 이미지 수정
  if (method === "PUT") {
    const exUser = await prisma.user.findUnique({ where: { idx: userIdx } });

    // 이미 프로필 이미지가 존재하는 경우 이미지 제거
    if (exUser?.photo) {
      // AWS-S3에서 제거
      await movePhoto(exUser.photo, "remove");

      // DB에서 제거
      await prisma.user.update({
        where: { idx: userIdx },
        data: { photo: null },
      });
    }

    if (typeof query.name === "string") {
      const { preSignedURL, photoURL } = getSignedURL(query.name, "user");

      return res.status(200).json({
        preSignedURL,
        photoURL,
        message: "프로필 이미지를 업데이트중입니다. 잠시만 기다려주세요!",
      });
    }
  }
  // 프로필 이미지 제거
  else if (method === "DELETE") {
    const exUser = await prisma.user.findUnique({ where: { idx: userIdx } });

    // 이미 프로필 이미지가 존재하는 경우 이미지 제거
    if (exUser?.photo) {
      // AWS-S3에서 제거
      await movePhoto(exUser.photo, "remove");

      // DB에서 제거
      await prisma.user.update({
        where: { idx: userIdx },
        data: { photo: null },
      });

      return res.status(200).json({
        message: "기본 이미지로 변경 성공! 새로고침하면 적용됩니다.",
      });
    } else {
      return res.status(409).json({ message: "이미지가 존재하지 않습니다." });
    }
  }

  return res.status(412).json({
    preSignedURL: null,
    photoURL: null,
    message: "잘못된 데이터를 전달받았습니다. 잠시후에 다시 시도해주세요!",
  });
}
