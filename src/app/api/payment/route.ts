import { makeOrder } from "@/utils/order";
import { checkPayment } from "@/utils/type-check";
import { NextResponse } from "next/server";
import { CartType } from "../../CartProvider";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const supabase = createRouteHandlerClient({ cookies });

  const typeChecked = checkPayment(formData);

  if (typeChecked.error) {
      return NextResponse.redirect(
          requestUrl.origin + "/payment?error=" + typeChecked.type,
          {
              status: 301,
          }
      )
  }

  const user = await supabase.auth.getUser()
  const order = await makeOrder(
      typeChecked.full_name as string,
      typeChecked.email as string,
      typeChecked.phone as string,
      typeChecked.address as string,
      typeChecked.country as string,
      typeChecked.city as string,
      typeChecked.postalcode as string,
      typeChecked.cart as CartType[],
      requestUrl.origin,
      user && user.data && user.data.user && user.data.user.id
  )
  if (order.error) {
      return NextResponse.redirect(
          requestUrl.origin + "/payment?error=" + order.type,
          {
              status: 301,
          }
      )
  }

  return NextResponse.redirect(order?.url as string, {
      status: 301,
  });
}
