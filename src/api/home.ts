import { createURL, END_POINTS, STATUS } from '@/constants/api';
import type { CoverLetterList, Pagination, PaginationParams } from '@/types';
import { addSearchParams, fetchRequest } from '@/utils';

export const getCoverLetters = async ({
  page = 0,
  size = 99,
}: PaginationParams = {}) => {
  const params = { page, size };
  const url = createURL(END_POINTS.COVER_LETTERS);

  const { status, message, data } = await fetchRequest<
    Pagination<CoverLetterList>
  >({
    url: addSearchParams(url, params),
  });

  if (status !== STATUS.OK) {
    throw new Error(message);
  }

  return { contents: data.contents };
};
