import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// utill
import { combinePhotoUrl, getLogoUrl } from "@src/libs";

type Props = {
  title?: string;
  description?: string;
  photo?: string | null;
};

const HeadInfo = ({ title, description, photo }: Props) => {
  const { asPath } = useRouter();

  return (
    <Head>
      {/* 현 페이지 제목 */}
      <title>{title}</title>

      {/* 현 페이지 설명 */}
      <meta name="description" content={description} />

      {/* 카카오톡, 네이버 블로그 미리보기에 제공될 정보 */}
      <meta
        property="og:url"
        content={`https://${process.env.NEXT_PUBLIC_FRONT_URL}${asPath}`}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={photo ? combinePhotoUrl(photo) : getLogoUrl()}
      />

      {/* 트위터 */}
      <meta
        name="twitter:card"
        content={`제목: ${title}
        내용: ${description}`}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={photo ? combinePhotoUrl(photo) : getLogoUrl()}
      />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "bleshop",
  description:
    "Next.js + TypeScript + Recoil + tailwindcss를 이용한 쇼핑몰 프로젝트",
};

export default HeadInfo;
