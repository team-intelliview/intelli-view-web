import { cn } from '../utils/string';

interface PageProps {
  nav?: boolean;
  footer?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Page({ className, children }: PageProps) {
  return (
    <>
      <div className={cn('py-[64px]', className)}>{children}</div>
    </>
  );
}
