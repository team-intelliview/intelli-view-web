import { STATUS } from '@/constants/api';
import { postInterviewQuestion } from '@/lib/api/interview';
import { useMutation } from '@tanstack/react-query';

export const useInterviewQuestionMutation = () => {
  const mutation = useMutation({
    mutationFn: postInterviewQuestion,
    onSuccess: ({ status, message, data }) => {
      if (status === STATUS.OK) {
        sessionStorage.setItem('interviewId', data.id);
      } else {
        throw new Error(message);
      }
    },
  });

  return {
    interviewQuestionMutate: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
};
