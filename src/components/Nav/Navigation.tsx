'use client';

import { cn } from '@/utils/string';
import { useEffect, useRef, useState } from 'react';

interface NavigationProps {
  children: React.ReactNode;
  className?: string;
}

export default function Navigation({ children, className }: NavigationProps) {
  const [scrollingUp, setScrollingUp] = useState(true);
  const beforeScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > beforeScrollY.current) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      beforeScrollY.current = window.scrollY > 0 ? window.scrollY : 0;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'border-gray-20 sticky top-0 z-15 h-[64px] w-full border-b-[2px] bg-white transition-transform',
        { '-translate-y-full': !scrollingUp },
        className,
      )}
    >
      {children}
    </nav>
  );
}
