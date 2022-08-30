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

type RegExpType =
  | "id"
  | "password"
  | "email"
  | "phone"
  | "birthday"
  | "numberWithComma";
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

    case "numberWithComma":
      // 숫자에 3자리마다 콤마 추가
      return /\B(?=(\d{3})+(?!\d))/g;
  }
};

/**
 * 휴대폰 번호에 구분자 붙여서 반환해주는 함수
 * @param phone 문자열형태 휴대폰 번호 ( "01021038259" )
 * @returns "-"를 구분자로 적용한 휴대폰 번호 반환 ( "010-2103-8259" )
 */
export const addSeparatorToPhone = (phone: string) => {
  const front = phone.slice(0, 3);
  const mid = phone.slice(3, 7);
  const last = phone.slice(7);

  return `${front}-${mid}-${last}`;
};
/**
 * 휴대폰 번호에 구분자를 제거하고 반환해주는 함수
 * @param phone 문자열형태 구분자 포함 휴대폰 번호 ( "010-2103-8259" )
 * @returns 구분자를 제외한 휴대폰 번호 반환 ( "01021038259" )
 */
export const removeSeparatorToPhone = (phone: string) =>
  phone
    .split("")
    .filter((v) => !isNaN(+v))
    .join("");

/**
 * 문자열에서 구분자 기준으로 나누는 함수
 * @param word 문자열
 * @param separator 구분자
 * @returns 구분자와 공백을 제거한 문자 배열
 */
export const deleteSeparator = (word: string, separator: string) =>
  word.split(separator).map((v) => v.trim());

/**
 * 숫자 3자리마다 콤마 추가
 * @param number 콤마를 추가할 숫자
 * @returns 콤마가 추가된 문자열로 반환
 */
export const numberWithComma = (number: number | string) =>
  number.toString().replace(getRegExp("numberWithComma"), ",");

/**
 * 콤마가 추가된 문자열을 콤마를 제거한 숫자로 반환
 * @param price 콤마가 추가된 문자열
 * @returns 콤마를 제거한 숫자 반환
 */
export const numberWithoutComma = (price: string) =>
  price.toString().split(",").join("");

/**
 * 문자열 줄단위로 자르기
 * @param string 자를 문자열
 * @param line 자를 줄
 * @returns 잘린 문자열 + "..."
 */
export const sliceLineOfString = (string: string, line: number) => {
  let sliceIndex = null;

  for (let i = 1; i <= line; i++) {
    if (sliceIndex === -1) continue;
    if (sliceIndex === null) sliceIndex = -1;

    sliceIndex = string.indexOf("\n", sliceIndex + 1);
  }

  if (sliceIndex === -1 || sliceIndex === null) return string;

  return string.slice(0, sliceIndex) + "...";
};
