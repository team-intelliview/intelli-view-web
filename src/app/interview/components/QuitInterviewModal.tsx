'use client';

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { PATH } from '@/constants';
import { useRouter } from 'next/navigation';

export default function QuitInterviewModal() {
  const router = useRouter();

  const handleConfirmButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    router.push(PATH.HOME);
  };

  const handleCancelButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    router.back();
  };

  return (
    <Modal>
      <div className="flex w-[720px] flex-col items-center justify-center gap-[44px] rounded-[28px] bg-white px-[40px] pt-[80px] pb-[48px]">
        <p className="text-title3 font-semibold">면접을 그만두시겠어요?</p>
        <p className="text-heading2">
          임시저장을 누르면 진행된 면접이 저장되어 홈에서 확인할 수 있어요.
        </p>
        <div className="flex gap-[12px]">
          <Button
            className="mt-[16px]"
            text="취소"
            onClick={(e) => handleCancelButtonClick(e)}
          />
          <Button
            className="mt-[16px]"
            variant="primary"
            text="임시저장"
            onClick={(e) => handleConfirmButtonClick(e)}
          />{' '}
        </div>{' '}
      </div>
    </Modal>
  );
}
