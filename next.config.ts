import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 외부 이미지 도메인 허용
  images: {
    domains: ['lh3.googleusercontent.com', 'img1.kakaocdn.net'],
  },
};

export default nextConfig;
