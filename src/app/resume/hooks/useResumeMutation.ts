import { postResume } from '@/api/resume';
import { STATUS } from '@/constants/api';
import { useMutation } from '@tanstack/react-query';

interface Props {
  handleNext: () => void;
}

export const useResumeMutation = ({ handleNext }: Props) => {
  const mutation = useMutation({
    mutationFn: postResume,
    onSuccess: ({ status, message }) => {
      if (status === STATUS.OK) {
        handleNext();
      } else {
        throw new Error(message);
      }
    },
  });

  return {
    resumeMutate: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
};
