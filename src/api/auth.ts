import { createURL, END_POINTS } from '@/constants/api';
import type { User } from '@/types';
import { fetchRequest } from '@/utils';

export const getUser = async (): Promise<User> => {
  const { data } = await fetchRequest<User>({
    url: createURL(END_POINTS.USERS),
  });
  return data;
};
