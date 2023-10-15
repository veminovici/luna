import { NextMiddleware } from "next/server";

// MiddlewareFactory is a function that accepts a middleware
// and returns a new middleware.
export type MiddlewareFactory = (middleware?: NextMiddleware) => NextMiddleware;