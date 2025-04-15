import { atom } from 'jotai';
import type { logListItem } from '@/types';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

type InterviewInfo = {
  logList: Array<logListItem>;
  nowInterviewing: number;
};

export const interviewAtom = atomWithStorage<InterviewInfo>(
  'interviewAtom',
  {
    logList: [],
    nowInterviewing: 0,
  },
  createJSONStorage<InterviewInfo>(() => sessionStorage),
);

export const updateInterview = atom(
  null,
  (get, set, update: logListItem | undefined) => {
    const currentInterview = get(interviewAtom);

    const updatedInterview = {
      ...currentInterview,
      logList: update
        ? [...currentInterview.logList, update]
        : currentInterview.logList,
    };

    set(interviewAtom, updatedInterview);
  },
);

export const deleteAllInterview = atom(null, (_get, set) => {
  set(interviewAtom, { logList: [], nowInterviewing: 0 });
});

export const updateNowInterviewing = atom(null, (_get, set, update: number) => {
  set(interviewAtom, (prev) => ({
    ...prev,
    nowInterviewing: update,
  }));
});
