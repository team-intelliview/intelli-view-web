/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    };
    return config;
  },
  // 외부 이미지 도메인 허용
  images: {
    domains: ['lh3.googleusercontent.com', 'img1.kakaocdn.net'],
  },
  // 빌드 시 정적 파일 처리
  output: 'standalone',
};

module.exports = nextConfig;
