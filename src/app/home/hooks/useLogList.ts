import { useSuspenseQuery } from '@tanstack/react-query';
import { getCoverLetters, getInterviews } from '@/api/home';
import { REQUEST_OPTION } from '@/constants';
import { QUERY_KEYS } from '@/constants/api';
import { RequestOption } from '@/types';

interface Props {
  type: RequestOption;
}

export const useLogList = ({ type }: Props) => {
  const queryKey =
    type === REQUEST_OPTION.INTERVIEW
      ? QUERY_KEYS.INTERVIEWS
      : QUERY_KEYS.COVER_LETTERS;

  const queryFn =
    type === REQUEST_OPTION.INTERVIEW
      ? () => getInterviews({ page: 0, size: 99 })
      : () => getCoverLetters({ page: 0, size: 99 });

  return useSuspenseQuery({
    queryKey: [queryKey],
    queryFn,
  });
};
