import { loggingMiddleware } from '@middlewares/middleware-logging';
import type { NextFetchEvent, NextRequest } from 'next/server'
import * as MW from 'next-auth/middleware'
import { authMiddleware } from '@middlewares/middleware-auth';

// // This function can be marked `async` if using `await` inside
export async function middleware(request: MW.NextRequestWithAuth, _next: NextFetchEvent) {

  const mw = authMiddleware();
  //let res = await MW.default(request, _next);
  let res = mw(request, _next);
  return res;
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about/:path*'],
}

// export { default } from "next-auth/middleware"
// export const config = { matcher: ["/about/:path*", "/profile/:path*", "/dashboard/:path*"] }
