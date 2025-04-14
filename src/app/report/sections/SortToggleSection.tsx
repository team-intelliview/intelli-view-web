import Button from '@/components/Button';

interface Props {
  onChange: (sort: 'dashBoard' | 'detail') => void;
  selected: 'dashBoard' | 'detail';
}

export default function SortToggleSection({ onChange, selected }: Props) {
  const handleSortButtonClick = (sort: 'dashBoard' | 'detail') => {
    onChange(sort);
  };

  return (
    <div className="flex w-fit gap-[8px] py-[24px]">
      <Button
        sort="chip"
        text="대시보드"
        selected={selected === 'dashBoard'}
        onClick={() => handleSortButtonClick('dashBoard')}
      />
      <Button
        sort="chip"
        text="세부 피드백"
        selected={selected === 'detail'}
        onClick={() => handleSortButtonClick('detail')}
      />
    </div>
  );
}
