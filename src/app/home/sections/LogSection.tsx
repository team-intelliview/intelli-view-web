'use client';

import { REQUEST_OPTION } from '@/constants';
import { useCoverLetter, useInterview } from '../hooks/useLogList';
import { LogContainer } from '../components';

const LogSection = () => {
  const { data: coverLetterData } = useCoverLetter();
  const { data: interviewData } = useInterview();

  const coverLetterList = coverLetterData?.contents || [];
  const interviewList = interviewData?.contents || [];

  return (
    <div className="flex h-[75%] gap-[24px]">
      <LogContainer type={REQUEST_OPTION.INTERVIEW} log={interviewList} />
      <LogContainer type={REQUEST_OPTION.COVER_LETTER} log={coverLetterList} />
    </div>
  );
};

export default LogSection;
