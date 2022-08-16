import { getSession } from "next-auth/react";

import prisma from "@src/prisma";

// util
import { getSignedURL, movePhoto } from "@src/libs";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  ApiRemoveUserPhotoResponse,
  ApiUploadPhotoResponse,
} from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiUploadPhotoResponse | ApiRemoveUserPhotoResponse>
) {
  const { query, method } = req;
  const session = await getSession({ req });

  if (!session || !session.user)
    return res.status(403).json({ message: "접근 권한이 없습니다." });

  const userIdx = session.user.idx;

  // 이미지 업로드
  if (method === "GET") {
    if (typeof query.name === "string") {
      const { name } = query;

      const { photoURL, preSignedURL } = getSignedURL(name);

      return res.status(200).json({
        preSignedURL,
        photoURL,
        message: "프로필 이미지를 업로드중입니다. 잠시만 기다려주세요!",
      });
    }
  }
  // 이미지 수정
  else if (method === "PUT") {
    const exPhoto = await prisma.photo.findUnique({ where: { userIdx } });

    // 이미 프로필 이미지가 존재하는 경우 이미지 제거
    if (exPhoto) {
      // AWS-S3에서 제거
      movePhoto(exPhoto.path);

      // DB에서 제거
      await prisma.photo.delete({ where: { userIdx } });
    }

    if (typeof query.name === "string") {
      const { preSignedURL, photoURL } = getSignedURL(query.name);

      return res.status(200).json({
        preSignedURL,
        photoURL,
        message: "프로필 이미지를 업데이트중입니다. 잠시만 기다려주세요!",
      });
    }
  }
  // 이미지 제거
  else if (method === "DELETE") {
    const exPhoto = await prisma.photo.findUnique({ where: { userIdx } });

    // 이미 프로필 이미지가 존재하는 경우 이미지 제거
    if (exPhoto) {
      // AWS-S3에서 제거
      movePhoto(exPhoto.path);

      // DB에서 제거
      await prisma.photo.delete({ where: { userIdx } });

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
