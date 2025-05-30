'use client';

import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={() => router.back()}
    >
      {children}
    </div>
  );
};

export default Modal;
