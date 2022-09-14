import type { ApiCreateOrderBody } from "@src/types";

interface RequestPayAdditionalParams {
  digital?: boolean;
  vbank_due?: string;
  m_redirect_url?: string;
  app_scheme?: string;
  biz_num?: string;
}

interface Display {
  card_quota?: number[];
}

export interface CustomData {
  residence: string;
  message: string;
  singleData: ApiCreateOrderBody["singleData"];
}

export interface RequestPayParams extends RequestPayAdditionalParams {
  pg: "kakaopay" | "tosspay";
  pay_method: "kakaopay" | "tosspay" | string;
  escrow?: boolean;
  merchant_uid: string;
  name: string;
  amount: number;
  custom_data: CustomData;
  tax_free?: number;
  currency?: string;
  language?: string;
  buyer_name?: string;
  buyer_tel: string;
  buyer_email: string;
  buyer_addr: string;
  buyer_postcode?: string;
  notice_url?: string | string[];
  display?: Display;
}

interface RequestPayAdditionalResponse {
  apply_num?: string;
  vbank_num?: string;
  vbank_name?: string;
  vbank_holder?: string | null;
  vbank_date?: number;
}

interface RequestPayResponse extends RequestPayAdditionalResponse {
  success: boolean;
  error_code: string;
  error_msg: string;
  imp_uid: string | null;
  merchant_uid: string;
  pay_method?: string;
  paid_amount?: number;
  status?: string;
  name?: string;
  pg_provider?: string;
  pg_tid?: string;
  buyer_name?: string;
  buyer_email?: string;
  buyer_tel?: string;
  buyer_addr?: string;
  buyer_postcode?: string;
  custom_data: CustomData;
  paid_at?: number;
  receipt_url?: string;
}

type RequestPayResponseCallback = (response: RequestPayResponse) => void;

export interface Iamport {
  init: (accountID: string) => void;
  request_pay: (
    params: RequestPayParams,
    callback?: RequestPayResponseCallback
  ) => void;
}

type RequestPaymentData = {
  amount: number;
  apply_num: string;
  bank_code: string | null;
  bank_name: string | null;
  buyer_addr: string;
  buyer_email: string;
  buyer_name: string;
  buyer_postcode: string;
  buyer_tel: string;
  cancel_amount: number;
  cancel_history: [];
  cancel_reason: string | null;
  cancel_receipt_urls: [];
  cancelled_at: number;
  card_code: string | null;
  card_name: string | null;
  card_number: string | null;
  card_quota: number;
  card_type: string | null;
  cash_receipt_issued: false;
  channel: string;
  currency: string;
  custom_data: string;
  customer_uid: string | null;
  customer_uid_usage: string | null;
  emb_pg_provider: string | null;
  escrow: false;
  fail_reason: string | null;
  failed_at: number;
  imp_uid: string;
  merchant_uid: string;
  name: string;
  paid_at: number;
  pay_method: string;
  pg_id: string;
  pg_provider: string;
  pg_tid: string;
  receipt_url: string;
  started_at: number;
  status: string;
  user_agent: string;
  vbank_code: string | null;
  vbank_date: number;
  vbank_holder: string | null;
  vbank_issued_at: number;
  vbank_name: string | null;
  vbank_num: string | null;
};

/**
 * 2022/09/14 - iamport 엑세스 토큰 요청 송신 타입 - by 1-blue
 */
export type IamportGetTokenBody = {};
/**
 * 2022/09/14 - iamport 엑세스 토큰 요청 수신 타입 - by 1-blue
 */
export type IamportGetTokenResponse = { response: { access_token: string } };
/**
 * 2022/09/14 - iamport 결제 정보 요청 송신 타입 - by 1-blue
 */
export type IamportGetPaymentDataBody = {
  imp_uid: string;
  access_token: string;
};
/**
 * 2022/09/14 - iamport 결제 정보 요청 수신 타입 - by 1-blue
 */
export type IamportGetPaymentDataResponse = { response: RequestPaymentData };
