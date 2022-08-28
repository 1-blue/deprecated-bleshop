import { PhotoKinds } from "@src/types";
import AWS from "aws-sdk";

AWS.config.update({
  region: process.env.BLESHOP_AWS_REGION,
  accessKeyId: process.env.BLESHOP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.BLESHOP_AWS_SECRET_KEY,
});

const S3 = new AWS.S3({ apiVersion: "2012-10-17", signatureVersion: "v4" });

/**
 * "이미지.확장자"를 받아서 "경로/이미지_시간.확장자"으로 변경해주는 함수
 * @param name "이미지.확장자" 형태로 전송
 * @returns "경로/이미지_시간.확장자" 형태로 반환
 */
const getPhotoPath = (name: string, kinds: PhotoKinds) => {
  const [filename, ext] = name.split(".");

  return `photos/${
    process.env.NODE_ENV
  }/temporary/${kinds}/${filename}_${Date.now()}.${ext}`;
};

/**
 * "preSignedURL"을 생성하는 함수
 * @param name "이미지.확장자" 형태로 전송
 * @returns "preSignedURL"와 "photoURL"을 반환 ( "photoURL"은 정상적으로 완료 시 이미지 url )
 */
export const getSignedURL = (name: string, kinds: PhotoKinds) => {
  const photoURL = getPhotoPath(name, kinds);

  const preSignedURL = S3.getSignedUrl("putObject", {
    Bucket: "bleshop",
    Key: photoURL,
    Expires: 20,
  });

  return { preSignedURL, photoURL };
};

/**
 * 2022/08/14 - S3 이미지 제거 - by 1-blue
 * @param photo 이미지 파일 이름
 * @returns
 */
export const deletePhoto = (photo: string) =>
  S3.deleteObject(
    {
      Bucket: "bleshop",
      Key: photo,
    },
    (error, data) => {
      if (error) console.error("S3 이미지 제거 error >> ", error);
    }
  ).promise();

/**
 * 2022/08/14 - S3 이미지 복사 - by 1-blue
 * @param originalSource: 이미지 파일 이름, location: 이미지 복사 위치
 * @returns
 */
export const copyPhoto = (originalSource: string, location: PhotoKinds) => {
  let Key = null;
  const firstSlashIndex = originalSource.indexOf("/");
  const secondSlashIndex = originalSource.indexOf("/", firstSlashIndex + 1);

  switch (location) {
    // 이미지 제거
    case "remove":
      Key =
        originalSource.slice(0, secondSlashIndex) +
        "/" +
        location +
        originalSource.slice(secondSlashIndex);
      break;

    // 이미지 사용 확정으로 인한 이미지 이동
    default:
      Key = originalSource.replace("/temporary", "");
      break;
  }

  return S3.copyObject(
    {
      Bucket: "bleshop",
      CopySource: "bleshop/" + originalSource,
      Key,
    },
    (error, data) => {
      if (error) console.error("S3 이미지 이동 error >> ", error);
    }
  ).promise();
};

/**
 * 2022/08/14 - S3 이미지 이동 ( 복사 후 제거 ) - by 1-blue
 * @param photo: 이미지 파일 이름, location: 이미지 복사 위치
 * @returns
 */
export const movePhoto = async (photo: string, location: PhotoKinds) => {
  await copyPhoto(photo, location);
  await deletePhoto(photo);
};
