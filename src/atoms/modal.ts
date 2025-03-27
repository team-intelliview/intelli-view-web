import { atom } from 'jotai';
import { MODAL } from '../constants';
import { ModalItem } from '@/types/modal';

type ModalInfo = {
  [key in ModalItem]: { isOpen: boolean };
};

const modals = Object.keys(MODAL).reduce((acc, key) => {
  acc[key as ModalItem] = { isOpen: false };
  return acc;
}, {} as ModalInfo);

export const modalAtom = atom<ModalInfo>(modals);

export const updateModal = atom(
  null,
  (get, set, update: { key: ModalItem; isOpen: boolean }) => {
    const currentModal = get(modalAtom);
    const updatedModal = {
      ...currentModal,
      [update.key]: { isOpen: update.isOpen },
    };
    set(modalAtom, updatedModal);
  },
);
