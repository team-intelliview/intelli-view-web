import type { Metadata } from 'next';

import './globals.css';

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
      <body className="scrollbar-hide flex flex-col">{children}</body>
    </html>
  );
}
