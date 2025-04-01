import PageLayout from '../PageLayout';
import Content from '@/components/Content';
import QuestionSection from './sections/QuestionSection';
import TitleBox from './sections/TitleBox';

export default function Questions() {
  return (
    <PageLayout homeNav className="flex w-screen">
      <Content className="flex-col items-center justify-between pt-[64px]">
        <div className="flex h-full w-[50%] flex-col gap-[36px]">
          <TitleBox />
          <QuestionSection />
        </div>
      </Content>
    </PageLayout>
  );
}
