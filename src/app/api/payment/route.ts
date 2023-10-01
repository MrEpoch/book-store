import { checkPayment } from "@/utils/type-check";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();

  const typeChecked = checkPayment(formData);

  if (typeChecked.error) {
      return NextResponse.redirect(
          requestUrl.origin + "/payment?error=" + typeChecked.type,
          {
              status: 301,
          }
      )
  }

  return NextResponse.redirect(requestUrl.origin + "/payment", {
    status: 301,
  });
}
