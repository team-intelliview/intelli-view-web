'use client';

import Button from '@/components/Button';

export default function TitleSection() {
  return (
    <div className="flex flex-col gap-[4px] pt-[40px]">
      <p className="text-title3 font-semibold">내 이력서 수정</p>
      <p className="text-heading2 text-gray-80">
        면접 준비와 자기소개서 첨삭에 사용되는 이력서를 수정해요. 이력서를
        반영하여 피드백을 진행해요.
      </p>
      <div className="flex items-center gap-[8px] pt-[36px]">
        <Button className="w-fit" sort="chip" text="직접 입력" selected />
        <Button className="w-fit" sort="chip" text="파일 첨부" />
      </div>
    </div>
  );
}
