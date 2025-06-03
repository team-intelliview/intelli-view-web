import { getUser } from '@/api/auth';
import { QUERY_KEYS } from '@/constants/api';
import { useSuspenseQuery } from '@tanstack/react-query';

const useLogin = () => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.LOGIN],
    queryFn: getUser,
  });
};

export default useLogin;
