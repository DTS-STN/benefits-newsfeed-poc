import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const { pathname } = url;

  if (
    pathname === "/" ||
    pathname.startsWith("/_next/static") ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  if (!/\/(en|fr)$/.test(pathname)) {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  return NextResponse.next();
}
