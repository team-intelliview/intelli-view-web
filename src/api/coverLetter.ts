import { createURL, END_POINTS } from '@/constants/api';
import type { CoverLetterItem } from '@/types';
import { addSearchParams, fetchRequest } from '@/utils';

interface PostCoverLetterProps {
  contents: Array<CoverLetterItem>;
}

export const postCoverLetter = async ({ contents }: PostCoverLetterProps) => {
  const jobId = sessionStorage.getItem('jobId');
  const url = createURL(END_POINTS.COVER_LETTERS);

  const response = await fetchRequest<string>({
    url: addSearchParams(url, { jobId }),
    options: { method: 'POST', body: JSON.stringify({ contents }) },
  });

  return response;
};
