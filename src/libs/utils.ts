/**
 * 나열된 클래스명을 공백기준으로 합친 문자열로 만들어주는 헬퍼함수
 * @param classname 클래스명을 공백 기준으로 분리해서 입력
 * @returns 합쳐진 클래스를 반환
 */
export const combineClassNames = (...classname: string[]) =>
  classname.join(" ");

/**
 * 현재 웹페이지의 root url을 얻는 헬퍼 함수
 * @returns root url
 */
export const getFrontUrl = () => `${process.env.NEXT_PUBLIC_FRONT_URL}`;

/**
 * 현재 웹페이지의 logo url을 얻는 헬퍼 함수
 * @returns logo url
 */
export const getLogoUrl = () => getFrontUrl() + "/logo.jpg";

/**
 * 현재 웹페이지의 이미지의 경로를 얻는 헬퍼 함수 ( aws-s3 )
 * @param path 후반부 이미지 경로
 * @returns 전체 이미지 경로
 */
export const combinePhotoUrl = (path: string) =>
  `${process.env.NEXT_PUBLIC_PHOTO_URL}/${path}`;

/**
 * 스로틀링 적용 헬퍼 함수
 * @param callback 이후에 실행할 콜백함수
 * @param waitTime 기다릴 시간
 * @returns "waitTime"만큼 스로틀링이 적용된 함수("callback") 반환
 */
export const throttleHelper = (callback: () => void, waitTime: number) => {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  return () => {
    if (timerId) return;

    timerId = setTimeout(() => {
      callback();
      timerId = null;
    }, waitTime);
  };
};
