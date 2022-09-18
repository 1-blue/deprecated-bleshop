// util
import { getSignedURL, movePhoto } from "@src/libs";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type {
  ApiDeleteUserPhotoResponse,
  ApiCreatePhotoResponse,
  PhotoKinds,
} from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiCreatePhotoResponse | ApiDeleteUserPhotoResponse>
) {
  const { query, method } = req;

  // 이미지 업로드 url 받기
  if (method === "GET") {
    if (typeof query.name === "string") {
      const { name, kinds } = query;

      const { photoURL, preSignedURL } = getSignedURL(
        name,
        kinds as PhotoKinds
      );

      return res.status(200).json({
        preSignedURL,
        photoURL,
        message: "이미지를 업로드중입니다. 잠시만 기다려주세요!",
      });
    }
  }

  if (method === "DELETE") {
    // 이미지들 제거
    if (typeof query.names === "object") {
      const { names } = query;

      const photosPromise = names.map((name) => movePhoto(name, "remove"));

      await Promise.allSettled(photosPromise);

      return res
        .status(200)
        .json({ message: "임시 저장된 이미지들을 제거합니다." });
    }
    // 이미지 제거
    else if (typeof query.name === "string") {
      const { name } = query;

      await movePhoto(name, "remove");

      return res
        .status(200)
        .json({ message: "임시 저장된 이미지를 제거합니다." });
    }
  }

  return res.status(412).json({
    preSignedURL: null,
    photoURL: null,
    message: "잘못된 데이터를 전달받았습니다. 잠시후에 다시 시도해주세요!",
  });
}
