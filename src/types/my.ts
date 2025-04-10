export type ProviderOption = 'KAKAO' | 'GOOGLE';

export type User = {
  email: string;
  name: string;
  profile: string;
  provider: ProviderOption;
};

export interface LogItem {
  id: number;
  inProgress: boolean;
  title: string;
  process?: number;
  answer?: string;
  image?: string;
  responseDate: Date;
}
