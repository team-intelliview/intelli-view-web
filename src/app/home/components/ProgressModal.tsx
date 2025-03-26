import Modal from '@/components/Modal';
import ModuleButton from '@/components/ModuleButton';
import { MODAL } from '@/constants';

export default function ProgressModal() {
  return (
    <Modal
      modalKey={MODAL.INTERVIEW_PROGRESS}
      className="flex flex-col gap-[44px]"
    >
      <div className="flex flex-col gap-[12px] text-center">
        <p className="text-title3 font-semibold">
          면접 진행 방식을 선택해주세요
        </p>
        <p className="text-heading2">
          진행 방식에 따라 면접 및 리포트 내용이 달라질 수 있어요
        </p>
      </div>
      <div className="flex gap-[10px]">
        <ModuleButton
          text="대면으로 진행해요"
          icon="🏢"
          onClick={() => console.log('대면')}
        />
        <ModuleButton
          text="비대면으로 진행해요"
          icon="💻"
          onClick={() => console.log('비대면')}
        />
      </div>
    </Modal>
  );
}
