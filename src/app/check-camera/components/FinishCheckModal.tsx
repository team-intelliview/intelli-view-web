'use client';

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { PATH } from '@/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const FinishCheckModal = () => {
  const router = useRouter();

  const handleConfirmButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    router.push(PATH.INTERVIEW);
  };

  return (
    <Modal>
      <div className="flex w-[720px] flex-col items-center justify-center gap-[44px] rounded-[28px] bg-white p-[40px]">
        <Image
          src="/icons/party_popper.svg"
          width={52}
          height={52}
          alt="camera"
          className="bg-gray-0 border-gray-20 size-[78px] rounded-[14.44px] border-[2.89px] p-3"
        />
        <p className="text-title3 font-semibold">면접 준비가 완료되었어요</p>
        <p className="text-heading2">면접을 시작해볼까요?</p>
        <Button
          className="mt-[16px]"
          variant="primary"
          text="면접 시작"
          onClick={(e) => handleConfirmButtonClick(e)}
        />
      </div>
    </Modal>
  );
};

export default FinishCheckModal;
