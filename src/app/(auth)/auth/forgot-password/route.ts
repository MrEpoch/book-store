import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const supabase = createRouteHandlerClient<any>({ cookies });

  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${requestUrl.origin}/update-password`,
  });

  return NextResponse.redirect(
    requestUrl.origin + "/forgot-password?reset=true",
    {
      status: 301,
    },
  );
}
