'use client';

import { useState } from 'react';
import Textfield from '@/components/Textfield';
import { DOCS_MAX_LENGTH } from '@/constants';
import MovingButton from '@/widgets/MovingButton';
import Button from '@/components/Button';
import { useResumeMutation } from '../hooks/useResumeMutation';
import useResume from '../hooks/useResume';
import Loading from '@/components/Loading';

interface ResumeFormProps {
  hasMovingButton: boolean;
  handleBackClick?: () => void;
  handleNextClick: () => void;
}

const ResumeForm = ({
  hasMovingButton,
  handleBackClick,
  handleNextClick,
}: ResumeFormProps) => {
  const { resumeMutate } = useResumeMutation({ handleNext: handleNextClick });
  const { data, isLoading } = useResume();

  const [educationValue, setEducationValue] = useState(data.education);
  const [employmentValue, setEmploymentValue] = useState(data.employment);
  const [certificationValue, setCertificationValue] = useState(
    data.certification,
  );
  const [etcValue, setEtcValue] = useState(data.etc);

  const handleNextButtonClick = () => {
    resumeMutate({
      education: educationValue,
      employment: employmentValue,
      certification: certificationValue,
      etc: etcValue,
    });
  };

  if (isLoading) return <Loading />;

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
};

export default ResumeForm;
