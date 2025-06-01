import Content from '@/components/Content';
import PageLayout from '../PageLayout';
import DescribeSection from './sections/DescribeSection';
import LoginSection from './sections/LoginSection';
import PhotoSection from './sections/PhotoSection';

export default function Login() {
  return (
    <PageLayout className="flex max-w-screen overflow-hidden">
      <Content className="flex gap-[115px]">
        <div className="flex h-full w-[50%] flex-col items-center justify-center gap-[60px]">
          <DescribeSection /> <LoginSection />
        </div>
        <PhotoSection />
      </Content>
    </PageLayout>
  );
}
