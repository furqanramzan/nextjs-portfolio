import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAdmin } from './app/admin/token';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin/guest')) {
    const admin = await getAdmin();

    if (admin) {
      return NextResponse.redirect(
        new URL('/admin/auth/dashboard', request.url),
      );
    }
  }

  if (request.nextUrl.pathname.startsWith('/admin/auth')) {
    const admin = await getAdmin();

    if (!admin) {
      return NextResponse.redirect(new URL('/admin/guest/login', request.url));
    }
  }
}
