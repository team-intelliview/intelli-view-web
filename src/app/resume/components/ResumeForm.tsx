'use client';

import Textfield from '@/components/Textfield';
import { DOCS_MAX_LENGTH } from '@/constants';
import { useState } from 'react';

export default function ResumeForm() {
  const [education, setEducation] = useState('');
  const [primer, setPrimer] = useState('');
  const [history, setHistory] = useState('');

  return (
    <div className="flex flex-col gap-[32px]">
      <Textfield
        label="학력"
        className="h-full pt-[36px] pb-[10px]"
        textareaClassName="h-[30%]"
        placeholder="학력을 작성해주세요"
        maxLength={DOCS_MAX_LENGTH.EDUCATION}
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        errorMessage="최대 입력 가능 수를 초과하였습니다."
      />
      <Textfield
        label="학력"
        className="h-full pt-[36px] pb-[10px]"
        textareaClassName="h-[30%]"
        placeholder="경력 및 대외활동에 대해 작성해주세요"
        maxLength={DOCS_MAX_LENGTH.HISTORY}
        value={history}
        onChange={(e) => setHistory(e.target.value)}
        errorMessage="최대 입력 가능 수를 초과하였습니다."
      />
      <Textfield
        label="학력"
        className="h-full pt-[36px] pb-[10px]"
        textareaClassName="h-[30%]"
        placeholder="자격증 및 수상 이력을 작성해주세요"
        maxLength={DOCS_MAX_LENGTH.PREMIER}
        value={primer}
        onChange={(e) => setPrimer(e.target.value)}
        errorMessage="최대 입력 가능 수를 초과하였습니다."
      />
    </div>
  );
}
