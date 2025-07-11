import Content from '@/components/Content';
import PageLayout from '../PageLayout';
import InputSection from './sections/InputSection';

export default function WriteSort() {
  return (
    <PageLayout homeNav breadCrumb className="w-screen">
      <Content className="flex-col items-center gap-[36px] pt-[64px]">
        <div className="flex w-[50%] flex-col pt-[48px]">
          <h1 className="text-title3 font-semibold">
            지원하고자 하는 기업과 직무를 입력해주세요.
          </h1>
        </div>
        <InputSection />
      </Content>
    </PageLayout>
  );
}
