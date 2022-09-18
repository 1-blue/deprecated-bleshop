import { axiosInstance } from ".";

// type
import type {
  ApiSignUpBody,
  ApiSignUpResponse,
  ApiLogInBody,
  ApiLogInResponse,
} from "@src/types";

/**
 * 2022/08/17 - 회원가입 요청 - by 1-blue
 * @param body 회원가입에 필요한 데이터들 ( id, password, name, email, phone, photo? )
 * @returns 결과 메시지 ( message )
 */
const apiSignUp = (body: ApiSignUpBody) =>
  axiosInstance.post<ApiSignUpResponse>(`/signup`, body);

/**
 * 2022/08/17 - 로그인 요청 - by 1-blue
 * @param body 로그인에 필요한 데이터들 ( id, password )
 * @returns 결과 메시지 ( message )
 */
const apiLogIn = (body: ApiLogInBody) =>
  axiosInstance.post<ApiLogInResponse>(`/login`, body);

/**
 * 2022/08/17 - 인증 관련 api 요청 객체 - by 1-blue
 */
const authService = {
  apiSignUp,
  apiLogIn,
};

export default authService;
