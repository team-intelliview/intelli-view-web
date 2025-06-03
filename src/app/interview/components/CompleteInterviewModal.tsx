'use client';

import Button from '@/components/Button';
import { PATH } from '@/constants';
import { useRouter } from 'next/navigation';
import PartyPopper from '@assets/icons/party_popper.svg';
import Modal from '@/components/Modal';

export default function CompleteInterviewModal() {
  const router = useRouter();

  const handleConfirmButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    router.push(PATH.REPORT);
  };

  return (
    <Modal>
      <div className="flex w-[720px] flex-col items-center justify-center gap-[20px] rounded-[28px] bg-white p-[48px]">
        <PartyPopper
          width={52}
          height={52}
          className="bg-gray-0 border-gray-20 size-[78px] rounded-[14.44px] border-[2.89px] p-3"
        />
        <p className="text-title3 font-semibold">면접을 완료했어요</p>
        <p className="text-heading2">면접 분석 리포트를 전달해 드릴게요.</p>
        <Button
          className="mt-[16px]"
          variant="primary"
          text="리포트 확인"
          onClick={(e) => handleConfirmButtonClick(e)}
        />
      </div>
    </Modal>
  );
}
