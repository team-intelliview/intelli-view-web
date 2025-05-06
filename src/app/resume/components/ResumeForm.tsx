'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getResume } from '@/api/resume';
import Textfield from '@/components/Textfield';
import { DOCS_MAX_LENGTH } from '@/constants';
import { QUERY_KEYS } from '@/constants/api';
import MovingButton from '@/widgets/MovingButton';
import Button from '@/components/Button';
import { useResumeMutation } from '../hooks/useResumeMutation';

interface ResumeFormProps {
  hasMovingButton: boolean;
  handleBackClick?: () => void;
  handleNextClick: () => void;
}

const useResume = async () => {
  const response = await getResume();
  return response;
};

export default function ResumeForm({
  hasMovingButton,
  handleBackClick,
  handleNextClick,
}: ResumeFormProps) {
  const { resumeMutate, isSuccess: isResumeMutationSuccess } =
    useResumeMutation({ handleNext: handleNextClick });
  const { data, isSuccess } = useQuery({
    queryKey: [QUERY_KEYS.RESUME],
    queryFn: useResume,
  });

  const [educationValue, setEducationValue] = useState('');
  const [employmentValue, setEmploymentValue] = useState('');
  const [certificationValue, setCertificationValue] = useState('');
  const [etcValue, setEtcValue] = useState('');

  const handleNextButtonClick = () => {
    resumeMutate({
      education: educationValue,
      employment: employmentValue,
      certification: certificationValue,
      etc: etcValue,
    });
  };

  useEffect(() => {
    if (isSuccess && data) {
      const { education, employment, certification, etc } = data;
      setEducationValue(education);
      setEmploymentValue(employment);
      setCertificationValue(certification);
      setEtcValue(etc);
    }
  }, [data, isSuccess]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[32px]">
        <Textfield
          label="학력"
          className="h-full pt-[36px] pb-[10px]"
          textareaClassName="h-[30%]"
          placeholder="학력을 작성해주세요"
          maxLength={DOCS_MAX_LENGTH.EDUCATION}
          value={educationValue}
          onChange={(e) => setEducationValue(e.target.value)}
          errorMessage="최대 입력 가능 수를 초과하였습니다."
        />
        <Textfield
          label="경력 및 대외활동"
          className="h-full pt-[36px] pb-[10px]"
          textareaClassName="h-[30%]"
          placeholder="경력 및 대외활동에 대해 작성해주세요"
          maxLength={DOCS_MAX_LENGTH.HISTORY}
          value={certificationValue}
          onChange={(e) => setCertificationValue(e.target.value)}
          errorMessage="최대 입력 가능 수를 초과하였습니다."
        />
        <Textfield
          label="자격증 및 수상 이력"
          className="h-full pt-[36px] pb-[10px]"
          textareaClassName="h-[30%]"
          placeholder="자격증 및 수상 이력을 작성해주세요"
          maxLength={DOCS_MAX_LENGTH.PREMIER}
          value={employmentValue}
          onChange={(e) => setEmploymentValue(e.target.value)}
          errorMessage="최대 입력 가능 수를 초과하였습니다."
        />
        <Textfield
          label="기타"
          className="h-full pt-[36px] pb-[10px]"
          textareaClassName="h-[30%]"
          placeholder="이외에 이력서에 넣고 싶으신 내용을 작성해주세요"
          maxLength={DOCS_MAX_LENGTH.PREMIER}
          value={etcValue}
          onChange={(e) => setEtcValue(e.target.value)}
          errorMessage="최대 입력 가능 수를 초과하였습니다."
        />
      </div>
      <div className="flex justify-end pt-[20px] pb-[48px]">
        {hasMovingButton ? (
          <MovingButton
            back={handleBackClick}
            isAbleBack={true}
            isAbleNext={true}
            next={handleNextButtonClick}
          />
        ) : (
          <Button
            text="확인"
            onClick={handleNextButtonClick}
            variant="primary"
          />
        )}
      </div>
    </div>
  );
}
