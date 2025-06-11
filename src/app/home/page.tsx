export const dynamic = 'force-dynamic';

import Content from '@/components/Content';
import { InfoSection, LogSection } from './sections';
import { REQUEST_OPTION } from '@/constants';

export default async function Home() {
  return (
    <Content className="flex-col items-center">
      <div className="bg-primary-40 flex h-2/5 w-full" />
      <div className="bg-gray-10 flex h-full w-full" />
      <div className="absolute mb-[64px] flex h-full w-3/4 flex-col items-center pt-[62px]">
        <InfoSection />
        <div className="flex h-[75%] w-full gap-[24px]">
          <LogSection type={REQUEST_OPTION.INTERVIEW} />
          <LogSection type={REQUEST_OPTION.COVER_LETTER} />
        </div>
      </div>
    </Content>
  );
}
