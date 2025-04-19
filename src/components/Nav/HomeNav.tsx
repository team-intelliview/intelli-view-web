'use client';

import Image from 'next/image';
import Navigation from './Navigation';
import { PATH } from '@/constants';
import Link from 'next/link';
import BreadCrumb from '../BreadCrumb';
import { getUser } from '@/api/auth';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { userAtom } from '@/atoms/user';
import { useUserState } from '@/hooks/useUser';

interface HomeNavProps {
  breadCrumb?: boolean;
}

export default function HomeNav({ breadCrumb = false }: HomeNavProps) {
  const setUser = useSetAtom(userAtom);
  const user = useUserState();

  useEffect(() => {
    (async () => {
      const data = await getUser();
      setUser(data);
    })();
  }, []);

  if (!user) return null;

  return (
    <Navigation className="absolute flex w-full items-center justify-between px-[60px]">
      <Link href={PATH.HOME}>
        <Image
          src="/logo.svg"
          alt="logo"
          height={24}
          width={24}
          className="h-[24px] w-auto"
          priority
        />
      </Link>
      {breadCrumb && <BreadCrumb />}
      <div className="flex items-center gap-[12px]">
        <Image
          width={36}
          height={36}
          className="rounded-[11.37px] object-cover"
          src={user.profile || '/example.webp'}
          alt="프로필 이미지"
        />
        <p className="text-heading2 font-medium">{user.name || '이름'}</p>
      </div>
    </Navigation>
  );
}
