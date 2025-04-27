export const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export function createURL(url: string) {
  return API_BASE_URL + url;
}

export const END_POINTS = {
  REISSUE: '/v1/reissue',
  USERS: '/v1/users/me',
  JOBS: '/v1/jobs',
  RESUMES: '/v1/resumes',
  JD: (jobId: string) => `/v1/jobs/jd/${jobId}`,
  COVER_LETTERS: '/v1/cover-letters',
  COVER_LETTER_FEEDBACK: (coverLetterId: string) =>
    `/v1/cover-letters/feedback/${coverLetterId}`,
  RECENT: '/v1/cover-letters/recent',
  FILE: '/v1/resumes/file',
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
