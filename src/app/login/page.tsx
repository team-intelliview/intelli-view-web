import Content from '@/components/Content';
import PageLayout from '../PageLayout';
import DescribeSection from './sections/DescribeSection';
import LoginSection from './sections/LoginSection';
import PhotoSection from './sections/PhotoSection';

export default function Login() {
  return (
    <PageLayout className="flex max-w-screen overflow-hidden">
      <Content className="flex place-content-center items-center gap-[115px] px-[130px]">
        <div className="flex w-[50%] flex-col gap-[60px]">
          <DescribeSection /> <LoginSection />
        </div>
        <PhotoSection />
      </Content>
    </PageLayout>
  );
}
