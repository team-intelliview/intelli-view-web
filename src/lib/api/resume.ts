import { createURL, END_POINTS, STATUS } from '@/constants/api';
import type { ResumeItem } from '@/types';
import { fetchRequest } from '@/utils';
import { toast } from 'react-toastify';

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

  const { status, data } = await fetchRequest<ResumeItem>({ url });

  try {
    if (status === STATUS.OK) {
      return data;
    } else {
      const resume: ResumeItem = {
        education: '',
        employment: '',
        certification: '',
        etc: '',
      };

      return resume;
    }
  } catch {
    toast('이력서 조회에 실패했어요. 다시 작성해주세요.');

    const resume: ResumeItem = {
      education: '',
      employment: '',
      certification: '',
      etc: '',
    };

    return resume;
  }
};
