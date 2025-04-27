import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { MODAL, PATH } from '@/constants';
import { useRouter } from 'next/navigation';

export default function ModifyConfirmModal() {
  const router = useRouter();

  const handleConfirmButtonClick = () => {
    router.push(PATH.REPORT);
  };

  return (
    <Modal
      isBackgroundDark
      modalKey={MODAL.MODIFY_CONFIRM}
      className="flex h-fit w-[720px] flex-col justify-center gap-[72px] pt-[80px] pb-[68px]"
    >
      <div className="gap-[12px] text-center flex flex-col">
        <p className="text-title3 font-semibold">이력서 수정이 완료되었어요</p>
        <p className="text-heading2">
          면접, 서류 준비에서 수정된 이력서로 불러올 수 있어요.
        </p>
      </div>
      <Button
        className="mt-[16px]"
        variant="primary"
        text="확인"
        onClick={handleConfirmButtonClick}
      />
    </Modal>
  );
}
