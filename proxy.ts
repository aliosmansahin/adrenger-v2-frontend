import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ["/", "/room/:path*"];

export default async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const refresh_token = (await cookies()).get("refresh_token")?.value;
  if(isProtectedRoute && !refresh_token)
    return NextResponse.redirect(new URL("/login", request.nextUrl));

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/room/:path*"],
};