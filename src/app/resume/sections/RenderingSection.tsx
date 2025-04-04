'use client';

import Button from '@/components/Button';
import { PATH } from '@/constants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import WriteSection from './WriteSection';
import FileSection from './FileSection';
import MovingButton from '@/widgets/MovingButton';

export default function RenderingSection() {
  const router = useRouter();
  const [resumeType, setResumeType] = useState('write');

  const handleBackClick = () => {
    router.push(PATH.WRITE_SORT);
  };
  const handleNextClick = () => {
    router.push(PATH.JOB_DESCRIPTION);
  };

  const renderWriteSection = {
    write: <WriteSection />,
    file: <FileSection />,
  };

  return (
    <div className="flex h-full w-[50%] flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-[8px] pt-[36px] pb-[40px]">
          <Button
            className="w-fit"
            sort="chip"
            text="직접 입력"
            onClick={() => setResumeType('write')}
            selected={resumeType === 'write'}
          />
          <Button
            className="w-fit"
            sort="chip"
            text="파일 첨부"
            onClick={() => setResumeType('file')}
            selected={resumeType === 'file'}
          />
        </div>
        <div>{renderWriteSection[resumeType]}</div>
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
