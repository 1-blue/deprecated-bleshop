/**
 * "getServerSideProps"에서 로그인한 유저에 관한 요청을 하는 경우에 "cookie"를 넣어줘야 어떤 유저의 요청인지 알 수 있기 때문에 재정의
 */
import "axios";

declare module "axios" {
  export interface HeadersDefaults {
    Cookie?: string;
  }
}
