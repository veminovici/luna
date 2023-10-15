// import { loggingMiddleware } from '@middlewares/middleware-logging';
// import type { NextFetchEvent, NextRequest } from 'next/server'

 
// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest, _next: NextFetchEvent) {

//   const mw = loggingMiddleware();
//   let res = await mw(request, _next);
//   return res;
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }

export { default } from "next-auth/middleware"

export const config = { matcher: ["/about/:path*", "/profile/:path*", "/dashboard/:path*"] }
