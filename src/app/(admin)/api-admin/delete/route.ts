import { deleteProduct } from "@/utils/product";
import { deleteProductImage } from "@/utils/storage";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();

  const normal_check = z.string().min(1);

  const id = normal_check.safeParse(formData.get("id"));
  const supabase = createClientComponentClient();

  if (!id.success) {
    return NextResponse.redirect(
      requestUrl.origin + "/update-product?error=id",
      {
        status: 301,
      },
    );
  }

  const deleted = await deleteProduct(id.data);
  if (!deleted) {
    return NextResponse.redirect(
      requestUrl.origin + "/update-product?error=deleted",
      {
        status: 301,
      },
    );
  }
  await deleteProductImage(deleted.image, supabase);

  return NextResponse.redirect(requestUrl.origin + "/shop", {
    status: 301,
  });
}
