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

/**
 * Promise.allSettled()에서 "fulfilled"(성공)만 찾아내서 타입 적용해서 반환하는 함수
 * @param input "PromiseSettledResult" 타입의 변수... 결과를 알 수 없는 변수 ( "status"로 결과를 알아냄 )
 * @returns 성공한 결과(들)만 모아서 반환
 */
export const isFulFilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

type RegExpType = "id" | "password" | "email" | "phone" | "birthday";
/**
 * 2022/08/12 - 정규 표현식 모음 - by 1-blue
 * @param type 정규표현식 종류 입력
 * @returns 입력받은 종류에 따른 정규표현식 반환
 */
export const getRegExp = (type: RegExpType) => {
  switch (type) {
    case "id":
      // 숫자와 영어가 최소 한 글자 이상 포함되고, 최소 6자리여야 합니다.
      return /(?=.*\d)(?=.*[a-zA-ZS]).{6,}/;

    case "password":
      // 숫자와 영어가 최소 한 글자 이상 포함되고, 최소 8자리여야 합니다.
      return /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/;

    case "email":
      // 이메일 형식에 맞게 입력해 주세요.
      return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    case "phone":
      // 숫자만 11자리 입력해 주세요.
      return /[0-9]{11,11}/;

    case "birthday":
      // 숫자만 8자리 입력해 주세요.
      return /[0-9]{8,8}/;
  }
};
