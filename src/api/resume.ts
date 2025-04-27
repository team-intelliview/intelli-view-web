import { createURL, END_POINTS, STATUS } from '@/constants/api';
import type { ResumeItem } from '@/types';
import { fetchRequest } from '@/utils';

export const postResume = async ({
  education,
  employment,
  certification,
  etc,
}: ResumeItem) => {
  const url = createURL(END_POINTS.RESUMES);
  const body = { education, employment, certification, etc };

  const response = await fetchRequest<string>({
    url,
    options: {
      method: 'POST',
      body: JSON.stringify(body),
    },
  });

  return response;
};

export const getResume = async () => {
  const url = createURL(END_POINTS.RESUMES);

  const { status, message, data } = await fetchRequest<ResumeItem>({ url });

  if (status === STATUS.OK) {
    return data;
  } else if (status === STATUS.NOT_FOUND) {
    const resume: ResumeItem = {
      education: '',
      employment: '',
      certification: '',
      etc: '',
    };
    return resume;
  } else {
    throw new Error(message);
  }
};
