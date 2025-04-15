import { atom } from 'jotai';
import type { InterviewOption, RequestOption } from '@/types';
import { REQUEST_OPTION } from '@/constants';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

type ContentInfo = {
  type: RequestOption;
  compony: string;
  job: string;
  interviewType?: InterviewOption;
};

export const contentAtom = atomWithStorage<ContentInfo>(
  'contentAtom',
  {
    type: REQUEST_OPTION.INTERVIEW,
    compony: '',
    job: '',
    interviewType: undefined,
  },
  createJSONStorage<ContentInfo>(() => sessionStorage),
);

export const updateContent = atom(
  null,
  (
    get,
    set,
    update: {
      key: keyof ContentInfo;
      value: RequestOption | InterviewOption | string | undefined;
    },
  ) => {
    const currentContent = get(contentAtom);

    const updatedContent = {
      ...currentContent,
      [update.key]: update.value,
    };

    set(contentAtom, updatedContent);
  },
);
