export const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export function createURL(url: string) {
  return API_BASE_URL + url;
}

export const END_POINTS = {
  REISSUE: '/v1/reissue',
  USERS: '/v1/users/me',
  JOBS: '/v1/jobs',
  RESUMES: '/v1/resumes',
  JD: (jobId: string) => `/v1/jobs/${jobId}/jd`,
  COVER_LETTERS: '/v1/cover-letters',
  COVER_LETTER_FEEDBACK: (coverLetterId: string) =>
    `/v1/cover-letters/feedback/${coverLetterId}`,
  COVER_LETTER_STATUS: (coverLetterId: string) =>
    `/v1/cover-letters/${coverLetterId}/status`,
  RECENT: '/v1/cover-letters/recent',
  FILE: '/v1/resumes/file',
  INTERVIEW_QUESTION: (interviewId: string) =>
    `/v1/interviews/${interviewId}/questions`,
  INTERVIEW: '/v1/interviews/questions',
  INTERVIEW_STATUS: (interviewId: string) =>
    `/v1/interviews/${interviewId}/status`,
  CHECK_VOICE: (interviewId: string) => `/v1/interviews/${interviewId}/voice`,
  RECREATE_INTERVIEW_QUESTION: (interviewId: string) =>
    `/v1/interviews/${interviewId}/questions/recreate`,
} as const;

export const STATUS = {
  OK: 'OK',
  SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  NOT_FOUND: 'NOT_FOUND',
};

export const QUERY_KEYS = {
  COVER_LETTERS: 'coverLetters',
  RESUME: 'resume',
};

export const QUESTION_REQUEST_STATUS = {
  QUESTION_IN_PROGRESS: 'QUESTION_IN_PROGRESS',
  QUESTION_NOT_REQUESTED: 'QUESTION_NOT_REQUESTED',
  QUESTION_COMPLETE: 'QUESTION_COMPLETE',
  QUESTION_REQUEST_FAILED: 'QUESTION_REQUEST_FAILED',
};
