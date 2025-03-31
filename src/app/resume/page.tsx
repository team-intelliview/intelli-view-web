import Content from '@/components/Content';
import PageLayout from '../PageLayout';
import RenderingSection from './sections/RenderingSection';

export default function Resume() {
  return (
    <PageLayout
      homeNav
      breadCrumb
      className="flex h-screen max-w-screen justify-center"
    >
      <Content className="h-full flex-col items-center px-[40px] pt-[64px]">
        <div className="flex w-[50%] flex-col gap-[4px] pt-[40px]">
          <p className="text-title3 font-semibold">이력서를 작성해주세요.</p>
          <p className="text-heading2 text-gray-80">
            직접 입력, 파일 첨부 방식으로 이력서를 제출할 수 있어요
          </p>
        </div>
        <RenderingSection />
      </Content>
    </PageLayout>
  );
}
