import { patchInterviewsQuestion } from '@/api/interview';
import { STATUS } from '@/constants/api';
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
