import Card from '@/components/Card';

interface Props {
  title: string;
  describe: string | React.ReactNode;
}

export default function HelpCard({ title, describe }: Props) {
  return (
    <Card className="shadow2 text-body2 absolute z-50 w-[360px]">
      <span className="text-gray-90 font-semibold">{title}</span>
      <span className="font-regular whitespace-pre-wrap">{describe}</span>
    </Card>
  );
}
