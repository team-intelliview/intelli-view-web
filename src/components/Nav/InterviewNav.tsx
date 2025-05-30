'use client';

import Navigation from './Navigation';
import Chip from '../Chip';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function InterviewNav() {
  const router = useRouter();

  const handleQuitInterview = () => {
    router.push('/interview/quit-interview');
  };

  return (
    <Navigation className="absolute flex items-center justify-between px-[60px]">
      <div className="flex gap-[16px]">
        <p className="text-heading2 text-gray-90 font-semibold">
          실전 모의 면접
        </p>
        <Chip state="inProgress" />
      </div>
      <Button
        text="면접 나가기"
        size="sm"
        variant="secondary"
        onClick={handleQuitInterview}
      />
    </Navigation>
  );
}
