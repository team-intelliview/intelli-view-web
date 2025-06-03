import { STATUS } from '@/constants/api';
import { putJobDescription } from '@/lib/api/job';
import { useMutation } from '@tanstack/react-query';

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
