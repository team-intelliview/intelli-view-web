import LogCard from '../components/LogCard';
import { REQUEST_OPTION } from '@/constants';

export default function LogSection() {
  return (
    <div className="flex h-[75%] gap-[24px]">
      <LogCard type={REQUEST_OPTION.INTERVIEW} />
      <LogCard type={REQUEST_OPTION.COVER_LETTER} />
    </div>
  );
}
