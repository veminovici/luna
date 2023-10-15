import { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import * as MW from 'next-auth/middleware'

export const authMiddleware = (): NextMiddleware => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    let res = await MW.default(request as MW.NextRequestWithAuth, _next);
    return res;
  }
}