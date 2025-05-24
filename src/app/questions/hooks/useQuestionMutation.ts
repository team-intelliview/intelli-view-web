import { patchInterviewsQuestion } from '@/api/interview';
import { STATUS } from '@/constants/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useQuestionMutation = () => {
  const mutation = useMutation({
    mutationFn: patchInterviewsQuestion,
    onSuccess: ({ status, message }) => {
      if (status === STATUS.OK) {
        toast('질문이 저장됐어요.');
      } else {
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
