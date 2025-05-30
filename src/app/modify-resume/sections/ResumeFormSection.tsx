'use client';

import { ResumeForm } from '@/app/resume/components';
import { useRouter } from 'next/navigation';

export default function ResumeFormSection() {
  const router = useRouter();

  const handleConfirmClick = () => {
    router.push('/modify-resume/modify-confirm');
  };

  return (
    <ResumeForm hasMovingButton={false} handleNextClick={handleConfirmClick} />
  );
}
