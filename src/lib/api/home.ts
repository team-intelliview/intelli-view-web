import { createURL, END_POINTS, STATUS } from '@/constants/api';
import { LogListItem } from '@/types/home';
import { InterviewItem } from '@/types/interview';
import type { Pagination, PaginationParams } from '@/types/server';
import { addSearchParams, fetchRequest } from '@/utils';

export const getCoverLetters = async ({
  page = 0,
  size = 99,
}: PaginationParams = {}) => {
  const params = { page, size };
  const url = createURL(END_POINTS.COVER_LETTERS);

  const { status, message, data } = await fetchRequest<Pagination<LogListItem>>(
    {
      url: addSearchParams(url, params),
    },
  );

  if (status !== STATUS.OK) {
    throw new Error(message);
  }

  return { contents: data.contents };
};

export const getInterviews = async ({
  page = 0,
  size = 99,
}: PaginationParams = {}) => {
  const params = { page, size };
  const url = createURL(END_POINTS.INTERVIEW);

  const { status, message, data } = await fetchRequest<Pagination<LogListItem>>(
    {
      url: addSearchParams(url, params),
    },
  );

  if (status !== STATUS.OK) {
    throw new Error(message);
  }

  return { contents: data.contents };
};

export const getInterviewFeedback = async ({
  page = 0,
  size = 99,
}: PaginationParams = {}) => {
  const params = { page, size };
  const url = createURL(END_POINTS.INTERVIEW_LIST);

  const { status, message, data } = await fetchRequest<
    Pagination<InterviewItem>
  >({
    url: addSearchParams(url, params),
  });

  if (status !== STATUS.OK) {
    throw new Error(message);
  }

  return { contents: data.contents };
};
