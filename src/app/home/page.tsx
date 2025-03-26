'use client';

import Content from '@/components/Content';
import PageLayout from '../PageLayout';
import LogSection from './sections/LogSection';
import InfoSection from './sections/InfoSection';
import ProgressModal from './components/ProgressModal';
import { MODAL } from '@/constants';
import { useModalState } from '@/hooks';

export default function Home() {
  const { isOpen } = useModalState({ key: MODAL.INTERVIEW_PROGRESS });
  return (
    <>
      <PageLayout homeNav className="flex max-w-screen overflow-hidden">
        <Content className="flex-col items-center">
          <div className="bg-primary-40 flex h-2/5 w-screen" />
          <div className="bg-gray-10 flex h-full w-full" />
          <div className="absolute mb-[64px] h-full pt-[62px]">
            <InfoSection />
            <LogSection />
          </div>
        </Content>
      </PageLayout>
      {isOpen && <ProgressModal />}
    </>
  );
}
