import Content from '@/components/Content';
import PageLayout from '../PageLayout';
import TitleBox from './sections/TitleBox';
import AnswerSection from './sections/AnswerSection';

export default function CoverLetter() {
  return (
    <PageLayout homeNav className="flex w-screen">
      <Content className="w-full flex-col items-center justify-between gap-[36px] pt-[64px]">
        <TitleBox />
        <AnswerSection />
      </Content>
    </PageLayout>
  );
}
