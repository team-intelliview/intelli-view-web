import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { MODAL, PATH } from '@/constants';
import { useRouter } from 'next/navigation';

export default function QuitInterviewModal() {
  const router = useRouter();

  const handleConfirmButtonClick = () => {
    router.push(PATH.HOME);
  };

  return (
    <Modal
      isBackgroundDark
      modalKey={MODAL.QUIT_INTERVIEW}
      className="flex h-fit w-[720px] flex-col justify-center gap-[32px] py-[48px]"
    >
      <p className="text-title3 font-semibold">면접을 그만두시겠어요?</p>
      <p className="text-heading2">
        임시저장을 누르면 진행된 면접이 저장되어 홈에서 확인할 수 있어요.
      </p>
      <Button
        className="mt-[16px]"
        variant="primary"
        text="리포트 확인"
        onClick={handleConfirmButtonClick}
      />
    </Modal>
  );
}
