export const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export function createURL(url: string) {
  return API_BASE_URL + url;
}

export const END_POINTS = {
  REISSUE: '/v1/reissue',
  USERS: '/v1/users/me',
} as const;

export const STATUS = {
  OK: 'OK',
  SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  NOT_FOUND: 'NOT_FOUND',
};
