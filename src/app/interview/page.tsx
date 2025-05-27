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
import { useEffect, useState } from 'react';
import { QuestionItem } from '@/types/question';
import { getInterviewsQuestion } from '@/api/interview';
import Loading from './loading';
import { useInterview } from '@/hooks/useInterview';

export default function Interview() {
  const [questionList, setQuestionList] = useState<QuestionItem[]>([]);
  const { resetInterview } = useInterview();

  useEffect(() => {
    resetInterview();

    const fetchQuestions = async () => {
      try {
        const { contents } = await getInterviewsQuestion();
        setQuestionList(contents);
      } catch (error) {
        console.error('API 요청 실패:', error);
      }
    };

    fetchQuestions();
  }, []);

  const { isOpen: isCompleteModalOpen } = useModalState({
    key: MODAL.COMPLETE_INTERVIEW,
  });
  const { isOpen: isQuitInterviewModalOpen } = useModalState({
    key: MODAL.QUIT_INTERVIEW,
  });

  if (questionList.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <PageLayout
        interviewNav
        className="flex h-fit w-screen justify-center overflow-hidden px-[10%]"
      >
        <Content className="my-[92px] h-fit w-full justify-center gap-[20px]">
          <div className="flex flex-col gap-[20px]">
            <QuestionBoxSection questionList={questionList} />
            <VideoSection />
          </div>
          <SideSection questionList={questionList} />
        </Content>
      </PageLayout>
      {isQuitInterviewModalOpen && <QuitInterviewModal />}
      {isCompleteModalOpen && <CompleteInterviewModal />}
    </>
  );
}
