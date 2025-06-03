import { STATUS } from '@/constants/api';
import { postJobInfo } from '@/lib/api/job';
import { useMutation } from '@tanstack/react-query';

export const useJobsMutation = () => {
  const mutation = useMutation({
    mutationFn: postJobInfo,
    onSuccess: ({ status, message, data }) => {
      if (status === STATUS.OK) {
        sessionStorage.setItem('jobId', data.id);
      } else {
        throw new Error(message);
      }
    },
  });

  return {
    jobsMutate: mutation.mutate,
  };
};
