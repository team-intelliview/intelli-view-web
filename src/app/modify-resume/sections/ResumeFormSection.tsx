'use client';

import { ResumeForm } from '@/app/resume/components';
import { MODAL_PATH } from '@/constants';
import { useRouter } from 'next/navigation';

export default function ResumeFormSection() {
  const router = useRouter();

  const handleConfirmClick = () => {
    router.push(MODAL_PATH.MODIFY_CONFIRM);
  };

  return (
    <ResumeForm hasMovingButton={false} handleNextClick={handleConfirmClick} />
  );
}
