export interface LogItem {
  id: number;
  inProgress: boolean;
  title: string;
  process?: number;
  answer?: string;
  image?: string;
  responseDate: Date;
}
