import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { PagesConfig } from "./config/pages.config";
import { getUser } from "./lib/actions/user";
import { routing } from "./i18n/routing";

const protectedRoutes = ['/orders', '/cart'];
const intlMiddleware = createMiddleware(routing);
export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isProtectedRoute = protectedRoutes.some(
    route => pathname.startsWith(route) || pathname.includes(route)
  )
  if (isProtectedRoute) {
    let user = null
    try {
      user = await getUser();
    }
    catch {
      return NextResponse.redirect(new URL(PagesConfig.HOME, request.url))
    }
    if (!user) {
      return NextResponse.redirect(new URL(PagesConfig.HOME, request.url))
    }
  }
  return intlMiddleware(request)
}

export const config = {
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
}

