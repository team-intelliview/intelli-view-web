'use client';

import { ResumeForm } from '@/app/resume/components';
import { MODAL } from '@/constants';
import { useModal } from '@/hooks';

export default function ResumeFormSection() {
  const { openModal } = useModal();

  const handleConfirmClick = () => {
    openModal(MODAL.MODIFY_CONFIRM);
  };

  return (
    <ResumeForm hasMovingButton={false} handleNextClick={handleConfirmClick} />
  );
}
