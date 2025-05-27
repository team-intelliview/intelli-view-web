'use client';

import { useInterviewState } from '@/hooks/useInterview';
import Image from 'next/image';
import { QuestionItem } from '@/types/question';

interface QuestionBoxSectionProps {
  questionList: QuestionItem[];
}

export default function QuestionBoxSection({
  questionList,
}: QuestionBoxSectionProps) {
  const { interviews } = useInterviewState();

  return (
    <div className="border-gray-20 flex h-fit gap-[20px] rounded-[12px] border bg-white px-[40px] py-[20px]">
      <Image
        src="icons/paper.svg"
        width={44}
        height={44}
        alt="question"
        className="bg-gray-0 border-gray-20 m-[12px] rounded-[10.62px] border-[1.77px] p-[9px]"
      />
      <div className="flex flex-col gap-[8px]">
        <p className="text-heading1 text-gray-70 font-medium">
          질문 {questionList[interviews.nowInterviewing]?.index}
        </p>
        <p className="text-gray-90 text-heading2 font-semibold">
          {questionList[interviews.nowInterviewing]?.question}
        </p>
      </div>
    </div>
  );
}