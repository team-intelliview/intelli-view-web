import { STATUS } from '@/constants/api';
import { patchInterviewsQuestion } from '@/lib/api/interview';
import { useMutation } from '@tanstack/react-query';

export const useQuestionMutation = () => {
  const mutation = useMutation({
    mutationFn: patchInterviewsQuestion,
    onSuccess: ({ status, message }) => {
      if (status !== STATUS.OK) {
        throw new Error(message);
      }
    },
  });

  return {
    questionMutation: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
};
