export const REQUEST_OPTION = {
  INTERVIEW: 'interview',
  COVER_LETTER: 'coverLetter',
} as const;

export const INTERVIEW_OPTION = {
  UNTACT: 'UNTACT',
  FACE_TO_FACE: 'FACE_TO_FACE',
} as const;

export const DOCS_MAX_LENGTH = {
  EDUCATION: 1500,
  HISTORY: 1500,
  PREMIER: 1500,
  COMPONY: 100,
  JOB: 100,
  JD: 1500,
} as const;

export const COVER_LETTER_MAX_LENGTH = {
  QUESTION: 100,
  ANSWER: 1500,
} as const;

export const REPORT_OPTION = {
  DASH_BOARD: 'dashBoard',
  DETAIL: 'detail',
} as const;

export const PROGRESSING_STATUS = {
  IN_PROGRESS: '잔행 중',
  COMPLETE: '완료',
};
