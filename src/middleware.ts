import { defaultMiddleware } from '@middlewares/middleware-default';
import { loggingMiddleware, withLoggingMiddleware } from '@middlewares/middleware-logging';
import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, _next: NextFetchEvent) {

  //const mw = withLoggingMiddleware(defaultMiddleware);
  const mw = loggingMiddleware();
  let res = await mw(request, _next);
  //return NextResponse.redirect(new URL('/', request.url))
  //const res = withConsoleLog(defaultMiddleware);
  return res;
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}