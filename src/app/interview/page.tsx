'use client';

import PageLayout from '../PageLayout';
import QuestionBoxSection from './sections/QuestionBoxSection';
import SideSection from './sections/SideSection';
import Content from '@/components/Content';
import { useModalState } from '@/hooks';
import { MODAL } from '@/constants';
import CompleteInterviewModal from './components/CompleteInterviewModal';
import QuitInterviewModal from './components/QuitInterviewModal';
import VideoSection from './sections/VideoSection';

export default function Interview() {
  const { isOpen: isCompleteModalOpen } = useModalState({
    key: MODAL.COMPLETE_INTERVIEW,
  });
  const { isOpen: isQuitInterviewModalOpen } = useModalState({
    key: MODAL.QUIT_INTERVIEW,
  });

  return (
    <>
      <PageLayout
        interviewNav
        className="flex h-fit w-screen justify-center overflow-hidden px-[10%]"
      >
        <Content className="my-[92px] h-fit w-full justify-center gap-[20px]">
          <div className="flex flex-col gap-[20px]">
            <QuestionBoxSection />
            <VideoSection />
          </div>
          <SideSection />
        </Content>
      </PageLayout>
      {isQuitInterviewModalOpen && <QuitInterviewModal />}
      {isCompleteModalOpen && <CompleteInterviewModal />}
    </>
  );
}
