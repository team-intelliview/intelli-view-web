import { postInterviewVideo } from '@/api/interview';
import { STATUS } from '@/constants/api';
import { useMutation } from '@tanstack/react-query';

export const useInterviewVideoMutation = () => {
  const mutation = useMutation({
    mutationFn: postInterviewVideo,
    onSuccess: ({ status, message, data }) => {
      if (status === STATUS.OK) {
        return data;
      } else {
        throw new Error(message);
      }
    },
  });

  return {
    interviewVideoMutate: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
};
