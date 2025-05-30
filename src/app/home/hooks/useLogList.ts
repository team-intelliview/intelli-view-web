'use client';

import { useQuery } from '@tanstack/react-query';
import { getCoverLetters, getInterviews } from '@/api/home';
import { QUERY_KEYS } from '@/constants/api';

export const useCoverLetter = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.COVER_LETTERS],
    queryFn: () => getCoverLetters({ page: 0, size: 99 }),
  });
};

export const useInterview = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.INTERVIEWS],
    queryFn: () => getInterviews({ page: 0, size: 99 }),
  });
};
