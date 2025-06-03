export const dynamic = 'force-dynamic';

import Content from '@/components/Content';
import PageLayout from '../PageLayout';
import WriteSection from './sections/WriteSection';

export default function JobDescription() {
  return (
    <PageLayout
      homeNav
      breadCrumb
      className="flex h-screen max-w-screen justify-center overflow-hidden"
    >
      <Content className="h-full w-[50%] flex-col justify-between pt-[64px]">
        <div className="flex flex-col pt-[48px]">
          <h1 className="text-title3 font-semibold">
            지원하려는 채용 공고의 JD를 입력해주세요.
          </h1>
          <p className="text-heading2 text-gray-80">
            JD는 기업이 채용할 때 어떤 역할을 수행해야 하는지, 필요한 역량은
            무엇인지 등을 정리한 문서예요
          </p>
        </div>
        <WriteSection />
      </Content>
    </PageLayout>
  );
}
