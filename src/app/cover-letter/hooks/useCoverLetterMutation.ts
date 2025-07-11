import { STATUS } from '@/constants/api';
import { postCoverLetter } from '@/lib/api/coverLetter';
import { useMutation } from '@tanstack/react-query';

export const useCoverLetterMutation = () => {
  const mutation = useMutation({
    mutationFn: postCoverLetter,
    onSuccess: ({ status, message, data }) => {
      if (status === STATUS.OK) {
        sessionStorage.setItem('coverLetterId', data.id);
      } else {
        throw new Error(message);
      }
    },
  });

  return {
    coverLetterMutate: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
};
