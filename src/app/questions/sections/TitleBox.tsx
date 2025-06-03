'use client';

import Button from '@/components/Button';
import Image from 'next/image';

export default function TitleBox() {
  const handleRecrateQuestion = () => {};

  return (
    <div className="flex items-center gap-[20px] pt-[48px]">
      <Image
        src="icons/paper.svg"
        width={32}
        height={32}
        alt="question"
        className="bg-gray-0 border-gray-20 size-[54px] rounded-[10.62px] border-[1.77px] p-[8px]"
      />
      <div className="flex w-full flex-col gap-[4px]">
        <div className="flex justify-between">
          <h1 className="text-title3 font-semibold">면접 질문 리스트</h1>
          <Button
            text="질문 재생성"
            size="sm"
            variant="secondary"
            onClick={handleRecrateQuestion}
          />
        </div>
        <p className="text-heading2 text-gray-80">
          작성한 서류를 바탕으로 면접 리스트를 추출했어요.
        </p>
      </div>
    </div>
  );
}
