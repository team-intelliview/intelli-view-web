import { Suspense } from 'react';
import PageLayout from '../PageLayout';
import Loading from './loading';

const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <PageLayout homeNav className="flex max-w-screen overflow-hidden">
      <Suspense fallback={<Loading />}>
        {children}
        {modal}
      </Suspense>
    </PageLayout>
  );
};

export default Layout;
