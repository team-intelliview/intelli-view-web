import { createURL, END_POINTS } from '@/constants/api';
import type { CoverLetterItem, InterviewOption, RequestStatus } from '@/types';
import { QuestionItem } from '@/types/question';
import { addSearchParams, fetchRequest } from '@/utils';
import { getStorageItem } from '@/utils/storage';

interface GetInterviewQuestionResponse {
  contents: Array<QuestionItem>;
}

interface PostInterviewQuestionProps {
  contents: Array<CoverLetterItem>;
  interviewType: InterviewOption;
}

interface PostInterviewQuestionResponse {
  id: string;
}

interface PatchInterviewsQuestionProps {
  contents: Array<QuestionItem>;
}

interface PostInterviewVideoProps {
  index: number;
  file: FormData;
}

export const getInterviewsQuestion = async () => {
  const interviewId = getStorageItem('interviewId');
  const { data } = await fetchRequest<GetInterviewQuestionResponse>({
    url: createURL(END_POINTS.INTERVIEW_QUESTION(interviewId)),
  });

  return { contents: data.contents };
};

export const postInterviewQuestion = async ({
  contents,
  interviewType,
}: PostInterviewQuestionProps) => {
  const jobId = getStorageItem('jobId');

  const url = createURL(END_POINTS.INTERVIEW_QUESTION_LIST);

  const response = await fetchRequest<PostInterviewQuestionResponse>({
    url: addSearchParams(url, { jobId, type: interviewType }),
    options: { method: 'POST', body: JSON.stringify({ contents }) },
  });

  return response;
};

export const getInterviewsStatus = async () => {
  const interviewId = getStorageItem('interviewId');

  const { data } = await fetchRequest<RequestStatus>({
    url: createURL(END_POINTS.INTERVIEW_STATUS(interviewId)),
  });

  return data;
};

export const patchInterviewsQuestion = async ({
  contents,
}: PatchInterviewsQuestionProps) => {
  const interviewId = getStorageItem('interviewId');
  const url = createURL(END_POINTS.INTERVIEW_QUESTION(interviewId));

  const response = await fetchRequest<never>({
    url,
    options: { method: 'PATCH', body: JSON.stringify({ contents }) },
  });

  return response;
};

export const postInterviewVideo = async ({
  index,
  file,
}: PostInterviewVideoProps) => {
  const interviewId = getStorageItem('interviewId');
  const url = createURL(END_POINTS.INTERVIEW_VIDEO(interviewId));

  const response = await fetchRequest<never>({
    url: addSearchParams(url, { index }),
    options: { method: 'POST', body: file },
    contentType: false,
  });

  return response;
};
