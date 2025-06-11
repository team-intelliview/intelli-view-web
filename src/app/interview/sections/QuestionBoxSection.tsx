'use client';

import { useNowInterviewing } from '@/hooks/useInterview';
import { QuestionItem } from '@/types/question';
import Paper from '@assets/icons/paper.svg';

interface QuestionBoxSectionProps {
  questionList: QuestionItem[];
}

export default function QuestionBoxSection({
  questionList,
}: QuestionBoxSectionProps) {
  const { nowInterviewing } = useNowInterviewing();

  const { index, question } = questionList[nowInterviewing - 1];

  return (
    <div className="border-gray-20 flex gap-[20px] rounded-[12px] border bg-white px-[40px] py-[20px]">
      <div className="bg-gray-0 border-gray-20 m-[12px] flex size-[44px] items-center justify-center rounded-[10.62px] border-[1.77px] p-[9px]">
        <Paper />
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="text-heading1 text-gray-70 font-medium">질문 {index}</p>
        <p className="text-gray-90 text-heading2 font-semibold">{question}</p>
      </div>
    </div>
  );
}
