import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  // 로그인 했을 경우에만 존재함 ( "next-auth.session-token" 쿠키가 존재할 때 )
  const session = await getToken({ req, secret, raw: true });
  const { pathname } = req.nextUrl;

  // 2022/08/13 - 로그인 후 접근 제한 ( 로그인/회원가입 ) - by 1-blue
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    if (session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // 2022/08/16 - 로그인 하지 않고 접근 제한 ( 정보 수정 ) - by 1-blue
  if (
    pathname.startsWith("/information/update") ||
    pathname.startsWith("/information/address") ||
    pathname.startsWith("/information/address/update")
  ) {
    if (!session) {
      return NextResponse.redirect(new URL("/information", req.url));
    }
  }

  // 2022/08/16 - 로그인 하지 않고 접근 제한 ( 상품 생성 ) - by 1-blue
  if (pathname.startsWith("/product/upload")) {
    if (!session) {
      return NextResponse.redirect(new URL("/product", req.url));
    }
  }
}

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/information/update",
    "/information/address",
    "/information/address/update",
    "/product/upload",
  ],
};
