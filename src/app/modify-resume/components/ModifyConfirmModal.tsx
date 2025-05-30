'use client';

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { PATH } from '@/constants';
import { useRouter } from 'next/navigation';

export default function ModifyConfirmModal() {
  const router = useRouter();

  const handleConfirmButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    router.push(PATH.HOME);
  };

  return (
    <Modal>
      <div className="flex w-[720px] flex-col items-center justify-center gap-[44px] rounded-[28px] bg-white px-[40px] pt-[80px] pb-[48px]">
        <div className="flex flex-col gap-[12px] text-center">
          <p className="text-title3 font-semibold">
            이력서 수정이 완료되었어요
          </p>
          <p className="text-heading2">
            면접, 서류 준비에서 수정된 이력서로 불러올 수 있어요.
          </p>
        </div>
        <Button
          className="mt-[16px]"
          variant="primary"
          text="확인"
          onClick={(e) => handleConfirmButtonClick(e)}
        />
      </div>
    </Modal>
  );
}
