'use client';

import Button from '@/components/Button';
import { cn } from '@/utils';

interface MovingButtonProps {
  back: () => void;
  isAbleBack: boolean;
  next: () => void;
  isAbleNext: boolean;
  className?: string;
}

export default function MovingButton({
  back,
  isAbleBack,
  next,
  isAbleNext,
  className,
}: MovingButtonProps) {
  return (
    <div className={cn('flex justify-end gap-[10px]', className)}>
      <Button
        text="이전"
        variant="secondary"
        onClick={back}
        disabled={!isAbleBack}
      />
      <Button
        text="다음"
        onClick={next}
        disabled={!isAbleNext}
        variant="primary"
      />
    </div>
  );
}
