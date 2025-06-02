'use client';

import Input from '@/components/Input';
import { DOCS_MAX_LENGTH } from '@/constants';

interface JobInfoInputsProps {
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  position: string;
  setPosition: React.Dispatch<React.SetStateAction<string>>;
}

const JobInfoInputs = ({
  company,
  setCompany,
  position,
  setPosition,
}: JobInfoInputsProps) => {
  return (
    <div className="flex flex-col gap-[38px]">
      <Input
        label="회사 명"
        placeholder="지원하는 기업의 회사 명을 입력해주세요"
        maxLength={DOCS_MAX_LENGTH.COMPONY}
        value={company}
        onChange={(e) => setCompany(e.target.value)}
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
  );
};

export default JobInfoInputs;
