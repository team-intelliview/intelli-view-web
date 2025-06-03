import Content from '@/components/Content';
import PageLayout from '../PageLayout';
import Image from 'next/image';
import VoiceSection from './sections/VoiceSection';

export default function CheckVoice() {
  return (
    <PageLayout
      homeNav
      breadCrumb
      className="flex max-w-screen overflow-hidden"
    >
      <Content className="flex-col place-items-center items-center gap-[20px] pt-[64px]">
        <div className="flex w-[50%] flex-col items-center pt-[100px]">
          <Image
            src="/icons/volume.svg"
            width={52}
            height={52}
            alt="volume"
            className="bg-gray-0 border-gray-20 mb-[32px] size-[78px] rounded-[14px] border-[3px] p-3"
          />
          <p className="text-title3 pb-[8px] font-semibold">
            면접을 시작하기 전 음성을 체크할게요
          </p>
          <p className="text-heading2 text-gray-80">
            '안녕하세요'라고 말해보세요
          </p>
        </div>
        <VoiceSection />
      </Content>
    </PageLayout>
  );
}
