'use client';

import { DOCS_MAX_LENGTH, PATH } from '@/constants';
import { useContent } from '@/hooks';
import MovingButton from '@/widgets/MovingButton';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useJobsMutation } from '../hooks/useJobsMutation';
import JobInfoInputs from '../components/JobInfoInputs';

export default function InputSection() {
  const router = useRouter();
  const { changeJob, changeCompony } = useContent();
  const { jobsMutate } = useJobsMutation();

  const [company, setCompany] = useState('');
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
    return isValidCompany && isValidPosition;
  };

  return (
    <div className="flex h-full w-[50%] flex-col justify-between">
      <JobInfoInputs
        company={company}
        setCompany={setCompany}
        position={position}
        setPosition={setPosition}
      />
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
