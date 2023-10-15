import { NextResponse } from "next/server";

export function defaultMiddleware() {
  console.log("mw:dft - executed");
  return NextResponse.next();
}