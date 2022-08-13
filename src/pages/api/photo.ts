import type { NextApiRequest, NextApiResponse } from "next";

// util
import { getSignedURL } from "@src/libs";

// type
import type { ApiUploadPhotoResponse } from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiUploadPhotoResponse>
) {
  const {
    query: { name },
  } = req;

  if (typeof name === "string") {
    const { photoURL, preSignedURL } = getSignedURL(name);

    return res.status(200).json({
      preSignedURL,
      photoURL,
      message: "프로필 이미지를 업로드중입니다. 잠시만 기다려주세요!",
    });
  }

  return res.status(412).json({
    preSignedURL: null,
    photoURL: null,
    message: "잘못된 데이터를 전달받았습니다. 새로고침후에 다시 시도해주세요!",
  });
}
