import type { Metadata } from 'next';

import './globals.css';
import { Providers } from '@/utils';

export const metadata: Metadata = {
  title: 'intelli-view',
  description: '2025 경기대학교 컴퓨터공학전공 심화캡스톤 프로젝트',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          httpEquiv="Content-Security-Policy" // http로 된 요청을 https로 바꿔서 요청
          content="upgrade-insecure-requests"
        />
      </head>
      <body className="scrollbar-hide flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
