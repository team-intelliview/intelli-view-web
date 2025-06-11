import { createURL, END_POINTS } from '@/constants/api';
import type { CoverLetterItem } from '@/types';
import { addSearchParams, fetchRequest } from '@/utils';
import { getStorageItem } from '@/utils/storage';

interface PostCoverLetterProps {
  contents: Array<CoverLetterItem>;
}

interface PostCoverLetterResponse {
  id: string;
}

export const postCoverLetter = async ({ contents }: PostCoverLetterProps) => {
  const jobId = getStorageItem('jobId');
  const url = createURL(END_POINTS.COVER_LETTERS);

  const response = await fetchRequest<PostCoverLetterResponse>({
    url: addSearchParams(url, { jobId }),
    options: { method: 'POST', body: JSON.stringify({ contents }) },
  });

  return response;
};
