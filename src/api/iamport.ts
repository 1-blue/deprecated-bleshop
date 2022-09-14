import axios from "axios";

// type
import type {
  // IamportGetTokenBody,
  IamportGetTokenResponse,
  IamportGetPaymentDataBody,
  IamportGetPaymentDataResponse,
} from "@src/types";

const iamportInstance = axios.create({
  baseURL: "https://api.iamport.kr",
  timeout: 10000,
});

/**
 * 2022/09/14 - iamport 엑세스 토큰 발급 받기 - by 1-blue
 * @returns 엑세스 토큰
 */
const apiGetToken = () =>
  iamportInstance.post<IamportGetTokenResponse>(
    `/users/getToken`,
    {
      imp_key: process.env.IAMPORT_REST_API_KEY,
      imp_secret: process.env.IAMPORT_REST_API_SECRET,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

/**
 * 2022/09/14 - iamport 엑세스 토큰을 이용해 결제 정보 조회 - by 1-blue
 * @returns 결제 정보
 */
const apiGetPaymentData = ({
  imp_uid,
  access_token,
}: IamportGetPaymentDataBody) =>
  iamportInstance.get<IamportGetPaymentDataResponse>(`/payments/${imp_uid}`, {
    headers: { Authorization: access_token },
  });

/**
 * 2022/09/14 - iamport 관련 api 요청 객체 - by 1-blue
 */
const iamportService = {
  apiGetToken,
  apiGetPaymentData,
};

export default iamportService;
