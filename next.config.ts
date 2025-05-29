import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // 외부 이미지 도메인 허용
  images: {
    domains: ['lh3.googleusercontent.com', 'img1.kakaocdn.net'],
  },
};

export default nextConfig;
