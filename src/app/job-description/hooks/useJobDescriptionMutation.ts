import { STATUS } from '@/constants/api';
import { useMutation } from '@tanstack/react-query';
import { putJobDescription } from '@/api/job';

export const useJobDescriptionMutation = () => {
  const mutation = useMutation({
    mutationFn: putJobDescription,
    onSuccess: ({ status, message, data }) => {
      if (status === STATUS.OK) {
        console.log(data);
      } else {
        throw new Error(message);
      }
    },
  });

  return {
    jobDescriptionMutate: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
};
