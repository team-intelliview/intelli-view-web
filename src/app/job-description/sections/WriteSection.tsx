'use client';

import Textfield from '@/components/Textfield';
import { DOCS_MAX_LENGTH, PATH } from '@/constants';
import MovingButton from '@/widgets/MovingButton';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function WriteSection() {
  const router = useRouter();

  const [jd, setJd] = useState('');
  const handleBackClick = () => {
    router.push(PATH.RESUME);
  };
  const handleNextClick = () => {
    router.push(PATH.QUESTIONS);
  };

  return (
    <div className="flex h-full w-[50%]] flex-col justify-between">
      <Textfield
        className="h-full pt-[36px] pb-[10px]"
        textareaClassName="h-[90%]"
        placeholder="JD를 작성해주세요"
        maxLength={DOCS_MAX_LENGTH.JD}
        value={jd}
        onChange={(e) => setJd(e.target.value)}
        errorMessage="최대 입력 가능 수를 초과하였습니다."
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
