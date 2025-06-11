import { createURL, END_POINTS } from '@/constants/api';
import type { FeedbackItem } from '@/types';
import { fetchRequest } from '@/utils';
import { getStorageItem } from '@/utils/storage';

export const getCoverLetterFeedback = async () => {
  const coverLetterId = getStorageItem('coverLetterId');

  const { data } = await fetchRequest<FeedbackItem>({
    url: createURL(END_POINTS.COVER_LETTER_FEEDBACK(coverLetterId)),
  });

  return data;
};

export const getCoverLetterStatus = async () => {
  const coverLetterId = getStorageItem('coverLetterId');

  const { data } = await fetchRequest<string>({
    url: createURL(END_POINTS.COVER_LETTER_STATUS(coverLetterId)),
  });

  return data;
};

export const getInterviewFeedback = async () => {
  const interviewId = getStorageItem('interviewId');

  const { data } = await fetchRequest<FeedbackItem>({
    url: createURL(END_POINTS.INTERVIEW_FEEDBACK(interviewId)),
  });

  return data;
};

export const getInterviewFeedbackStatus = async () => {
  const interviewId = getStorageItem('interviewId');

  const { data } = await fetchRequest<string>({
    url: createURL(END_POINTS.INTERVIEW_STATUS(interviewId)),
  });

  return data;
};
