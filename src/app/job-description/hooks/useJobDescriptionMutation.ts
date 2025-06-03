import { STATUS } from '@/constants/api';
import { useMutation } from '@tanstack/react-query';
import { putJobDescription } from '@/api/job';

export const useJobDescriptionMutation = () => {
  const mutation = useMutation({
    mutationFn: putJobDescription,
    onSuccess: ({ status, message }) => {
      if (status !== STATUS.OK) {
        throw new Error(message);
      }
    },
  });

  return {
    jobDescriptionMutate: mutation.mutate,
  };
};
