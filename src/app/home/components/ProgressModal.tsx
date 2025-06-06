'use client';

import Modal from '@/components/Modal';
import ModuleButton from '@/components/ModuleButton';
import { INTERVIEW_OPTION, PATH } from '@/constants';
import { useContent } from '@/hooks';
import { InterviewOption } from '@/types';
import { useRouter } from 'next/navigation';

const ProgressModal = () => {
  const router = useRouter();
  const { changeInterviewType } = useContent();

  const handleInterviewTypeClick = (
    type: InterviewOption,
    event: React.MouseEvent,
  ) => {
    event.stopPropagation();
    changeInterviewType(type);
    router.push(PATH.JOB);
  };

  return (
    <Modal>
      <div className="flex flex-col gap-[44px] rounded-[28px] bg-white p-[40px]">
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
            onClick={(e) =>
              handleInterviewTypeClick(INTERVIEW_OPTION.FACE_TO_FACE, e)
            }
          />
          <ModuleButton
            text="비대면으로 진행해요"
            icon="💻"
            onClick={(e) =>
              handleInterviewTypeClick(INTERVIEW_OPTION.UNTACT, e)
            }
          />
        </div>
      </div>
    </Modal>
  );
};

export default ProgressModal;
