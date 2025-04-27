'use client';

import { ResumeForm } from '@/app/resume/components';
import Button from '@/components/Button';
import { MODAL } from '@/constants';
import { useModal } from '@/hooks';

export default function ResumeFormSection() {
  const { openModal } = useModal();

  const handleConfirmClick = () => {
    openModal(MODAL.MODIFY_CONFIRM);
  };

  return (
    <div className="flex flex-col">
      <ResumeForm />
      <div className="flex justify-end">
        <Button
          className="mt-[20px] mb-[48px]"
          text="확인"
          onClick={handleConfirmClick}
          variant="primary"
        />
      </div>
    </div>
  );
}
