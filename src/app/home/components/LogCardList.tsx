import ProcessCard from '@/components/ProcessCard';
import type { LogListItem } from '@/types';

interface LogCardProps {
  log: Array<LogListItem>;
}

export const LogCardList = ({ log = [] }: LogCardProps) => {
  return (
    <>
      {log.map(
        ({
          id,
          progress,
          totalQuestion,
          title,
          status,
          updatedAt,
          completeQuestion,
        }) => (
          <ProcessCard
            key={id}
            id={id}
            status={status}
            totalQuestion={totalQuestion}
            title={title}
            progress={progress}
            completeQuestion={completeQuestion}
            updatedAt={updatedAt}
          />
        ),
      )}
    </>
  );
};
