'use client';

import { getInterviewsQuestion, getInterviewsStatus } from '@/api/interview';
import Textbox from '@/components/Textbox';
import { PATH } from '@/constants';
import { QUESTION_REQUEST_STATUS } from '@/constants/api';
import type { QuestionItem } from '@/types/question';
import MovingButton from '@/widgets/MovingButton';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import Loading from '../loading';
import { useQuestionList } from '../hooks/useQuestionList';

export default function QuestionSection() {
  const router = useRouter();
  const { questionList, isPollingComplete, setQuestionList } =
    useQuestionList();

  const handleBackClick = () => {
    router.push(PATH.COVER_LETTER);
  };
  const handleNextClick = () => {
    router.push(PATH.CHECK_VOICE);
  };
  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number,
  ) => {
    const updatedQuestions = [...questionList];
    updatedQuestions[index - 1].question = e.target.value;
    setQuestionList(updatedQuestions);
  };

  if (!isPollingComplete) {
    return <Loading />;
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-[16px]">
        {questionList.map(({ index, question }) => {
          return (
            <Textbox
              label={`질문 ${index}`}
              value={question || ''}
              key={index}
              onChange={(e) => handleQuestionChange(e, index)}
            />
          );
        })}
      </div>
      <MovingButton
        className="flex justify-end pt-[20px] pb-[48px]"
        back={handleBackClick}
        isAbleBack={true}
        isAbleNext={true}
        next={handleNextClick}
      />
    </div>
  );
}
