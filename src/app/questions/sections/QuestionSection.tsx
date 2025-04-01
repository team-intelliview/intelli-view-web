'use client';

import Textbox from '@/components/Textbox';
import { PATH } from '@/constants';
import { questionList } from '@/mocks';
import MovingButton from '@/widgets/MovingButton';
import { useRouter } from 'next/navigation';

export default function QuestionSection() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push(PATH.JOB_DESCRIPTION);
  };
  const handleNextClick = () => {
    router.push(PATH.CHECK_VOICE);
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-[16px]">
        {questionList.map(({ id, question }, index) => (
          <Textbox label={`질문 ${index + 1}`} value={question} key={id} />
        ))}
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
