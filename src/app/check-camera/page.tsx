'use client';

import Content from '@/components/Content';
import PageLayout from '../PageLayout';
import Image from 'next/image';
import CameraSection from './sections/CameraSection';
import FinishCheckModal from './components/FinishCheckModal';
import { useModalState } from '@/hooks';
import { MODAL } from '@/constants';

export default function checkCamera() {
  const { isOpen } = useModalState({ key: MODAL.FINISH_CHECK });

  return (
    <>
      <PageLayout homeNav breadCrumb className="flex max-w-screen">
        <Content className="flex-col place-items-center items-center gap-[20px] pt-[64px]">
          <div className="flex w-[50%] flex-col items-center pt-[60px]">
            <Image
              src="/icons/camera.svg"
              width={52}
              height={52}
              alt="camera"
              className="bg-gray-0 border-gray-20 mb-[32px] size-[78px] rounded-[14.44px] border-[2.89px] p-3"
            />
            <p className="text-title3 pb-[8px] font-semibold">
              카메라 위치를 체크해 주세요
            </p>
            <p className="text-heading2 text-gray-80">
              화면의 정중앙에 얼굴이 잘 보이는지 확인해주세요
            </p>
          </div>
          <CameraSection />
        </Content>
      </PageLayout>
      {isOpen && <FinishCheckModal />}
    </>
  );
}
