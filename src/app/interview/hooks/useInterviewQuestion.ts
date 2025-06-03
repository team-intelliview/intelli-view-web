'use client';

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/api';
import { getStorageItem } from '@/utils/storage';
import { getInterviewsQuestion } from '@/lib/api/interview';

export function useInterviewQuestions() {
  const interviewId = getStorageItem('interviewId');

  return useQuery({
    queryKey: [QUERY_KEYS.INTERVIEW_QUESTION],
    queryFn: () => getInterviewsQuestion(),
    select: (data) => data.contents,
    enabled: !!interviewId && typeof window !== 'undefined',
  });
}
