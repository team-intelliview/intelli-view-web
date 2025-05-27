import { atom } from 'jotai';
import type { logListItem } from '@/types';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

type InterviewUpdate =
  | { type: 'addLog'; log: logListItem }
  | { type: 'setNowInterviewing'; index: number };

export type InterviewInfo = {
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

export const deleteAllInterview = atom(null, (_get, set) => {
  set(interviewAtom, { logList: [], nowInterviewing: 0 });
});

export const updateInterviewAtom = atom(
  null,
  (get, set, update: InterviewUpdate) => {
    const current = get(interviewAtom);

    switch (update.type) {
      case 'addLog':
        set(interviewAtom, {
          ...current,
          logList: [...current.logList, update.log],
        });
        break;

      case 'setNowInterviewing':
        set(interviewAtom, {
          ...current,
          nowInterviewing: update.index,
        });
        break;

      default:
        throw new Error('Invalid update type for interviewAtom');
    }
  },
);
