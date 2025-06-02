import { getUser } from '@/api/auth';
import { QUERY_KEYS } from '@/constants/api';
import { useQuery } from '@tanstack/react-query';

const useLogin = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.LOGIN],
    queryFn: () => getUser(),
  });
};

export default useLogin;
