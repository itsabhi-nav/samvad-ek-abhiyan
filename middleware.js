import { NextResponse } from "next/server";

const LOCALES = ["hi", "en"];
const DEFAULT = "en";

// "/" and any path without a language prefix -> /hi/...
export function middleware(req) {
  const { pathname } = req.nextUrl;
  if (LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return;
  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|images|issues|favicon|api|.*\\..*).*)"],
};
