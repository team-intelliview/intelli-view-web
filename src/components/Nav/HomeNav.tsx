'use client';

import Image from 'next/image';
import Navigation from './Navigation';
import { PATH } from '@/constants';
import Link from 'next/link';
import BreadCrumb from '../BreadCrumb';
import useLogin from '@/hooks/useLogin';
import { User } from '@/types';

interface HomeNavProps {
  breadCrumb?: boolean;
}

export const HomeNav = ({ breadCrumb = false }: HomeNavProps) => {
  const { data } = useLogin();

  if (!data) return null;

  return (
    <Navigation className="absolute flex w-full items-center justify-between px-[60px]">
      <Link href={PATH.HOME}>
        <Image src="/logo.svg" alt="logo" height={24} width={24} priority />
      </Link>
      {breadCrumb && <BreadCrumb />}
      {data.name && <UserProfile profile={data.profile} name={data.name} />}
    </Navigation>
  );
};

const UserProfile = ({ profile, name }: Pick<User, 'profile' | 'name'>) => {
  return (
    <div className="flex items-center gap-[12px]">
      <Image
        width={36}
        height={36}
        className="rounded-[11.37px] object-cover"
        src={profile}
        alt="프로필 이미지"
      />
      <p className="text-heading2 font-medium">{name}</p>
    </div>
  );
};
