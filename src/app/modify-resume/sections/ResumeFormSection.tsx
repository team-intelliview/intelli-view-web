'use client';

import { ResumeForm } from '@/app/resume/components';
import Button from '@/components/Button';
import { PATH } from '@/constants';
import { useRouter } from 'next/navigation';

export default function ResumeFormSection() {
  const router = useRouter();

  const handleConfirmClick = () => {
    router.push(PATH.HOME);
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
