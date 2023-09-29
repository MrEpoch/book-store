import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { GetUser } from "./utils/user";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const { pathname } = req.nextUrl;

  const supabase = createMiddlewareClient({ req, res });
  const { data } = await supabase.auth.getSession();

  if (pathname.startsWith("/account")) {
    if (!data.session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return res;
  }

  if (
    pathname.startsWith("/forgot-password") ||
    pathname.startsWith("/update-password") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/verify-email") ||
    pathname.startsWith("/auth")
  ) {
    if (data.session) {
      return NextResponse.redirect(new URL("/account", req.url));
    }
    return res;
  }

  if (pathname.startsWith("/update-password")) {
    if (data.session) {
      return res;
    }
    const searchParams = new URLSearchParams(req.nextUrl.search);
    const code = searchParams.get("code");
    if (code) {
      await supabase.auth.exchangeCodeForSession(code);
      return res;
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (
      pathname.startsWith("/admin") ||
      pathname.startsWith("/admin-api")
  ) {
    if (data.session) {
      const userDb = await fetch(`${req.nextUrl.origin}/api/verify?id=${data.session.user.id}`);
      if (!userDb.ok) {
        return NextResponse.redirect(new URL("/login", req.url));          
      } 
        const res_data = await userDb.json();
      if (!res_data.isAdmin) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      return res;
    }
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}
