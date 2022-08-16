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
const getPhotoPath = (name: string) => {
  const [filename, ext] = name.split(".");

  return `photos/${process.env.NODE_ENV}/${filename}_${Date.now()}.${ext}`;
};

/**
 * "preSignedURL"을 생성하는 함수
 * @param name "이미지.확장자" 형태로 전송
 * @returns "preSignedURL"와 "photoURL"을 반환 ( "photoURL"은 정상적으로 완료 시 이미지 url )
 */
export const getSignedURL = (name: string) => {
  const photoURL = getPhotoPath(name);

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
  );

/**
 * 2022/08/14 - S3 이미지 복사 - by 1-blue
 * @param originalSource 이미지 파일 이름
 * @returns
 */
export const copyPhoto = (originalSource: string) =>
  S3.copyObject(
    {
      Bucket: "bleshop",
      CopySource: "bleshop/" + originalSource,
      Key:
        originalSource.slice(0, originalSource.lastIndexOf("/")) +
        "/remove" +
        originalSource.slice(originalSource.lastIndexOf("/")),
    },
    (error, data) => {
      if (error) console.error("S3 이미지 이동 error >> ", error);
    }
  );

/**
 * 2022/08/14 - S3 이미지 이동 ( 복사 후 제거 ) - by 1-blue
 * >>> 복사, 제거 순차적으로 실행하는 방법 찾고 적용하기
 * @param photo 이미지 파일 이름
 * @returns
 */
export const movePhoto = async (photo: string) => {
  copyPhoto(photo);
  setTimeout(() => deletePhoto(photo), 500);
};
