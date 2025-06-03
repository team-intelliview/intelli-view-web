import { getResume } from '@/lib/api/resume';
import { QUERY_KEYS } from '@/constants/api';
import { useSuspenseQuery } from '@tanstack/react-query';

const useResume = () => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.RESUME],
    queryFn: getResume,
  });
};

export default useResume;
