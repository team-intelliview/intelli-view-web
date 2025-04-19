'use client';

import { PATH, REQUEST_OPTION } from '@/constants';
import type { coverLetterItem } from '@/types';
import Button from '@/components/Button';
import MovingButton from '@/widgets/MovingButton';
import { useRouter } from 'next/navigation';
import QuestionInput from '../components/QuestionInput';
import { useLayoutEffect, useState } from 'react';
import { useContentState } from '@/hooks';

const defaultValue: coverLetterItem = {
  question: '',
  answer: '',
};

export default function AnswerSection() {
  const router = useRouter();

  const { type } = useContentState();

  const [questionList, setQuestionList] = useState<Array<coverLetterItem>>([
    defaultValue,
  ]);

  const handlePlusButtonClick = () => {
    setQuestionList((questionList) => [...questionList, defaultValue]);
  };
  const handleBackClick = () => {
    router.push(PATH.JOB_DESCRIPTION);
  };
  const handleNextClick = () => {
    type === REQUEST_OPTION.COVER_LETTER
      ? router.push(PATH.REPORT)
      : router.push(PATH.QUESTIONS);
  };

  useLayoutEffect(() => {
    const element = document.getElementById(String(questionList.length)); // 문항추가시 생성된 요소 보이게 이동
    element.scrollIntoView({ behavior: 'smooth' });
  }, [questionList]);

  return (
    <div className="flex w-[50%] flex-col gap-[36px]">
      {questionList.map(({ question, answer }: coverLetterItem, index) => (
        <QuestionInput
          key={index}
          id={index + 1}
          question={question}
          answer={answer}
        />
      ))}
      <Button
        className="mx-auto"
        icon="/icons/plus.svg"
        text="문항 추가"
        size="sm"
        variant="secondary"
        onClick={handlePlusButtonClick}
      />
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
