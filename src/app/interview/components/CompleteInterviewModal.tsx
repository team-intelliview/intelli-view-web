import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { MODAL, PATH } from '@/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CompleteInterviewModal() {
  const router = useRouter();

  const handleConfirmButtonClick = () => {
    router.push(PATH.REPORT);
  };

  return (
    <Modal
      isBackgroundDark
      modalKey={MODAL.COMPLETE_INTERVIEW}
      className="flex h-fit w-[720px] flex-col justify-center gap-[32px] py-[48px]"
    >
      <Image
        src="/icons/party_popper.svg"
        width={52}
        height={52}
        alt="camera"
        className="bg-gray-0 border-gray-20 size-[78px] rounded-[14.44px] border-[2.89px] p-3"
      />
      <p className="text-title3 font-semibold">면접을 완료했어요</p>
      <p className="text-heading2">면접 분석 리포트를 전달해 드릴게요.</p>
      <Button
        className="mt-[16px]"
        variant="primary"
        text="리포트 확인"
        onClick={handleConfirmButtonClick}
      />
    </Modal>
  );
}
