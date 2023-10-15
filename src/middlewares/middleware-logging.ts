import { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { MiddlewareFactory } from "./middleware";


export const withLoggingMiddleware: MiddlewareFactory = (next?: NextMiddleware): NextMiddleware => {
  return async (request: NextRequest, _next: NextFetchEvent) => {

    if (next) {
      console.log("mw:log - before");
      const res = await next(request, _next);
      console.log("mw:log - after");

      return res;
    } else {
      console.log("mw:log - rcv'd");
      return NextResponse.next();
    }
  }
}

export const loggingMiddleware = (): NextMiddleware => {
  return (request: NextRequest, _next: NextFetchEvent) => {
    console.log("mw:log - rcv'd");
    return NextResponse.next();
  }
}