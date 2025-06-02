import dynamic from 'next/dynamic';
import Content from '@/components/Content';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import { REQUEST_OPTION } from '@/constants';

const InfoSection = dynamic(() => import('./sections/InfoSection'));
const LogSection = dynamic(() => import('./sections/LogSection'));

export default function Home() {
  return (
    <Content className="flex-col items-center">
      <div className="bg-primary-40 flex h-2/5 w-screen" />
      <div className="bg-gray-10 flex h-full w-full" />
      <div className="absolute mb-[64px] h-full pt-[62px]">
        <Suspense fallback={<Loading />}>
          <InfoSection />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <LogSection />
        </Suspense>
      </div>
    </Content>
  );
}
