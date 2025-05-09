'use client';

import Input from '@/components/Input';
import { DOCS_MAX_LENGTH, PATH } from '@/constants';
import { useContent } from '@/hooks';
import MovingButton from '@/widgets/MovingButton';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useJobsMutation } from '../hooks/useJobsMutation';

export default function InputSection() {
  const router = useRouter();
  const { changeJob, changeCompony } = useContent();
  const { jobsMutate, isPending } = useJobsMutation();

  const [company, setCompony] = useState('');
  const [position, setPosition] = useState('');

  const handleBackClick = () => {
    router.replace(PATH.HOME);
  };
  const handleNextClick = async () => {
    changeJob(position);
    changeCompony(company);
    jobsMutate(
      { company, position },
      {
        onSuccess: () => {
          router.push(PATH.RESUME);
        },
      },
    );
  };
  const isAbleNextPage = () => {
    const isValidCompany = company && company.length < DOCS_MAX_LENGTH.COMPONY;
    const isValidPosition = position && position.length < DOCS_MAX_LENGTH.JOB;
    return isValidCompany && isValidPosition && !isPending;
  };

  return (
    <div className="flex h-full w-[50%] flex-col justify-between">
      <div className="flex flex-col gap-[38px]">
        <Input
          label="회사 명"
          placeholder="지원하는 기업의 회사 명을 입력해주세요"
          maxLength={DOCS_MAX_LENGTH.COMPONY}
          value={company}
          onChange={(e) => setCompony(e.target.value)}
          errorMessage="최대 입력 가능 수를 초과하였습니다."
        />
        <Input
          label="직무 명"
          placeholder="지원하는 직무 명을 입력해주세요"
          maxLength={DOCS_MAX_LENGTH.JOB}
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          errorMessage="최대 입력 가능 수를 초과하였습니다."
        />
      </div>
      <MovingButton
        className="flex justify-end pt-[20px] pb-[48px]"
        back={handleBackClick}
        isAbleBack={true}
        isAbleNext={isAbleNextPage()}
        next={handleNextClick}
      />
    </div>
  );
}
