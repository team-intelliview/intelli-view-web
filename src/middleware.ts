import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PATH } from '@/constants';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === PATH.LOGIN) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get('refresh_token');

  if (!cookie) {
    const loginUrl = new URL(PATH.LOGIN, request.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|fonts|images|api|login).*)'],
};
