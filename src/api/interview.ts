import { createURL, END_POINTS } from '@/constants/api';
import type { CoverLetterItem, QuestionRequestStatus } from '@/types';
import { QuestionItem } from '@/types/question';
import { addSearchParams, fetchRequest } from '@/utils';

interface GetInterviewQuestionResponse {
  contents: Array<QuestionItem>;
}

interface PostInterviewQuestionProps {
  contents: Array<CoverLetterItem>;
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
  const interviewId = sessionStorage.getItem('interviewId');
  const { data } = await fetchRequest<GetInterviewQuestionResponse>({
    url: createURL(END_POINTS.INTERVIEW_QUESTION(interviewId)),
  });

  return { contents: data.contents };
};

export const postInterviewQuestion = async ({
  contents,
}: PostInterviewQuestionProps) => {
  const jobId = sessionStorage.getItem('jobId');
  const type = 'FACE_TO_FACE';
  const url = createURL(END_POINTS.INTERVIEW_QUESTION_LIST);

  const response = await fetchRequest<PostInterviewQuestionResponse>({
    url: addSearchParams(url, { jobId, type }),
    options: { method: 'POST', body: JSON.stringify({ contents }) },
  });

  return response;
};

export const getInterviewsStatus = async () => {
  const interviewId = sessionStorage.getItem('interviewId');
  const { data } = await fetchRequest<QuestionRequestStatus>({
    url: createURL(END_POINTS.INTERVIEW_STATUS(interviewId)),
  });

  return data;
};

export const patchInterviewsQuestion = async ({
  contents,
}: PatchInterviewsQuestionProps) => {
  const interviewId = sessionStorage.getItem('interviewId');
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
  const interviewId = sessionStorage.getItem('interviewId');
  const url = createURL(END_POINTS.INTERVIEW_VIDEO(interviewId));

  const response = await fetchRequest<never>({
    url: addSearchParams(url, { index }),
    options: { method: 'POST', body: file },
    contentType: false,
  });

  return response;
};

export const postRecreateInterviewQuestion = async () => {};
