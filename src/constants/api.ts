export const API_BASE_URL =
  typeof window === 'undefined'
    ? process.env.NEXT_PUBLIC_SERVER_URL
    : process.env.NEXT_PUBLIC_CLIENT_URL;

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
    `/v1/cover-letters/${coverLetterId}/feedback`,
  COVER_LETTER_STATUS: (coverLetterId: string) =>
    `/v1/cover-letters/${coverLetterId}/status`,
  RECENT: '/v1/cover-letters/recent',
  FILE: '/v1/resumes/file',
  INTERVIEW: '/v1/interviews',
  INTERVIEW_QUESTION: (interviewId: string) =>
    `/v1/interviews/${interviewId}/questions`,
  INTERVIEW_QUESTION_LIST: '/v1/interviews/questions',
  INTERVIEW_STATUS: (interviewId: string) =>
    `/v1/interviews/${interviewId}/status`,
  CHECK_VOICE: (interviewId: string) => `/v1/interviews/${interviewId}/voice`,
  RECREATE_INTERVIEW_QUESTION: (interviewId: string) =>
    `/v1/interviews/${interviewId}/questions/recreate`,
  INTERVIEW_FEEDBACK: (interviewId: string) =>
    `/v1/interviews/${interviewId}/feedback`,
  INTERVIEW_LIST: '/v1/interviews',
  INTERVIEW_VIDEO: (interviewId: string) => `/v1/interviews/${interviewId}`,
} as const;

export const STATUS = {
  OK: 'OK',
  SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  NOT_FOUND: 'NOT_FOUND',
};

export const QUERY_KEYS = {
  COVER_LETTERS: 'coverLetters',
  INTERVIEWS: 'interviews',
  INTERVIEW_QUESTION: 'interviewQuestion',
  RESUME: 'resume',
  LOGIN: 'login',
};

export const REQUEST_STATUS = {
  IN_PROGRESS: 'IN_PROGRESS',
  NOT_REQUESTED: 'NOT_REQUESTED',
  COMPLETED: 'COMPLETED',
  REQUEST_FAILED: 'REQUEST_FAILED',
};