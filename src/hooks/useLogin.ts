import { QUERY_KEYS } from '@/constants/api';
import { getUser } from '@/lib/api/auth';
import { useSuspenseQuery } from '@tanstack/react-query';

const useLogin = () => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.LOGIN],
    queryFn: getUser,
  });
};

export default useLogin;
