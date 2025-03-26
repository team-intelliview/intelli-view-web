import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { ModalItem } from '@/types/modal';
import { modalAtom, updateModal } from '@/atoms/modal';

interface UseModalProps {
  key: ModalItem;
}

export function useModal() {
  const setModal = useSetAtom(updateModal);

  const openModal = useCallback(
    (key: ModalItem) => setModal({ key, isOpen: true }),
    [setModal],
  );
  const closeModal = useCallback(
    (key: ModalItem) => setModal({ key, isOpen: false }),
    [setModal],
  );

  return { openModal, closeModal };
}

export function useModalState({ key }: UseModalProps) {
  const modal = useAtomValue(modalAtom)[key] || { isOpen: false };
  return modal;
}
