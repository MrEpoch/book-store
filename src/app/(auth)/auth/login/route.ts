import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const supabase = createRouteHandlerClient<any>({ cookies });

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (!data.user) {
    return NextResponse.redirect(requestUrl.origin + "/login?error=true", {
      status: 301,
    });
  }

  return NextResponse.redirect(requestUrl.origin + "/account", {
    status: 301,
  });
}
