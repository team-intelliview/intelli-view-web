'use client';

import { useModal } from '@/hooks';
import { ModalItem } from '@/types/modal';
import { cn } from '@/utils/string';
import { useEffect } from 'react';

interface ModalProps {
  modalKey: ModalItem;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({
  modalKey,
  children,
  className,
  ...rest
}: ModalProps) {
  const { closeModal } = useModal();

  useEffect(() => {
    const escKeyModalClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal(modalKey);
      }
    };
    document.addEventListener('keydown', escKeyModalClose);

    return () => document.removeEventListener('keydown', escKeyModalClose);
  }, [closeModal, modalKey]);

  return (
    <div
      id={modalKey}
      className={cn('fixed inset-0 z-30 flex items-center justify-center')}
    >
      <div
        className={cn(
          'border-gray-20 shadow3 items-center rounded-[28px] border-2 bg-white p-[40px]',
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}
