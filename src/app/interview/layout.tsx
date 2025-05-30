import PageLayout from '../PageLayout';

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <PageLayout homeNav className="flex max-w-screen overflow-hidden">
      {children}
      {modal}
    </PageLayout>
  );
}
