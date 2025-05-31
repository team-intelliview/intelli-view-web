import { useQuery } from '@tanstack/react-query';
import { getInterviewsQuestion } from '@/api/interview';
import { QUERY_KEYS } from '@/constants/api';

export function useInterviewQuestions() {
  return useQuery({
    queryKey: [QUERY_KEYS.INTERVIEW_QUESTION],
    queryFn: () => getInterviewsQuestion(),
    select: (data) => data.contents,
  });
}
