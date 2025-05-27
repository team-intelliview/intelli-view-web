'use client';

import { useQuery } from '@tanstack/react-query';
import { getCoverLetters, getInterviews } from '@/api/home';
import LogCard from '../components/LogCard';
import { REQUEST_OPTION } from '@/constants';
import { QUERY_KEYS } from '@/constants/api';

const useCoverLetter = async () => {
  const { contents } = await getCoverLetters();
  return contents;
};

const useInterview = async () => {
  const { contents } = await getInterviews();
  return contents;
};

export default function LogSection() {
  const { data: coverLetterList } = useQuery({
    queryKey: [QUERY_KEYS.COVER_LETTERS],
    queryFn: useCoverLetter,
  });
  const { data: interviewList } = useQuery({
    queryKey: [QUERY_KEYS.INTERVIEW],
    queryFn: useInterview,
  });

  return (
    <div className="flex h-[75%] gap-[24px]">
      <LogCard type={REQUEST_OPTION.INTERVIEW} data={interviewList}/>
      <LogCard type={REQUEST_OPTION.COVER_LETTER} data={coverLetterList} />
    </div>
  );
}
