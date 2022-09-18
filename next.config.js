const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "bleshop.s3.ap-northeast-2.amazonaws.com",
      "k.kakaocdn.net",
      "lh3.googleusercontent.com",
    ],
  },
  webpack(config, options) {
    return config;
  },
});

module.exports = nextConfig;
