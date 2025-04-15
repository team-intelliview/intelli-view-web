import Content from '@/components/Content';
import PageLayout from '../PageLayout';
import { ResumeFormSection, TitleSection } from './sections';

export default function ModifyResume() {
  return (
    <PageLayout
      homeNav
      className="flex h-screen max-w-screen justify-center"
    >
      <Content className="h-full flex-col items-center px-[40px] py-[64px]">
        <div className="flex w-[50%] flex-col gap-[20px]">
          <TitleSection />
          <ResumeFormSection />
        </div>
      </Content>
    </PageLayout>
  );
}
