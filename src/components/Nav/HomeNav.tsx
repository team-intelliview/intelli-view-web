import Image from 'next/image';
import Navigation from './Navigation';
import { PATH } from '@/constants';
import Link from 'next/link';
import BreadCrumb from '../BreadCrumb';
import UserProfile from './UserProfile';

interface HomeNavProps {
  breadCrumb?: boolean;
}

const HomeNav = ({ breadCrumb = false }: HomeNavProps) => {
  return (
    <Navigation className="absolute flex w-full items-center justify-between px-[60px]">
      <Link href={PATH.HOME}>
        <Image
          src="/logo.svg"
          alt="logo"
          height={24}
          width={24}
          priority
          className="w-auto"
        />
      </Link>
      {breadCrumb && <BreadCrumb />}
      <UserProfile />
    </Navigation>
  );
};

export default HomeNav;
