import { deleteProduct } from "@/utils/product";
import { deleteProductImage } from "@/utils/storage";
import { NextResponse } from "next/server";
import { z } from "zod";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";


export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();

  const normal_check = z.string().min(1);

  const id = normal_check.safeParse(formData.get("id"));
  const supabase = createRouteHandlerClient({ cookies });

  if (!id.success) {
    return NextResponse.redirect(
      requestUrl.origin + "/admin/update-product?error=id",
      {
        status: 301,
      },
    );
  }

  const deleted = await deleteProduct(id.data);
  if (!deleted) {
    return NextResponse.redirect(
      requestUrl.origin + "/admin/update-product?error=deleted",
      {
        status: 301,
      },
    );
  }
  await deleteProductImage(deleted.image, supabase);

  return NextResponse.redirect(requestUrl.origin + "/admin", {
    status: 301,
  });
}
