namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    DATABASE_URL: string;
    SECRET: string;
    ANALYZE: string;

    NEXTAUTH_URL: string;

    NEXT_PUBLIC_FRONT_URL: string;
    NEXT_PUBLIC_PHOTO_URL: string;

    NEXT_PUBLIC_IAMPORT_CODE: string;

    BLESHOP_AWS_REGION: string;
    BLESHOP_AWS_ACCESS_KEY: string;
    BLESHOP_AWS_SECRET_KEY: string;

    IAMPORT_REST_API_KEY: string;
    IAMPORT_REST_API_SECRET: string;

    KAKAO_ID: string;
    KAKAO_SECRET: string;

    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
  }
}
