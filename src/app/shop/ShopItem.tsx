'use client';
import { Product } from "@prisma/client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ShopItem({
  item,
}: {
  item: Product;
}) {

  const [imgUrl, setImgUrl] = useState<string | null>(null);
  async function getImgUrl() {
      const supabase = createClientComponentClient();
      const { data } = supabase.storage
        .from("book-store")
        .getPublicUrl(`images/${item.image}`);
        if (data) setImgUrl(data.publicUrl);
  }

  useEffect(() => {
      if (item) getImgUrl();
  }, [item])

  return (
    <Link
      href={`/shop/${item.id}`}
      className="group shadow hover:border-2 hover:border-green-600 border-2 border-transparent
        dark:bg-gray-800 rounded-lg p-5 transition duration-300"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      {imgUrl ? (<Image
          src={imgUrl}
          width={300}
          height={400}
          alt={item.name}
          className="h-full w-full max-h-[20rem] object-cover object-center group-hover:scale-105 group-hover:brightness-75 transition
        duration-300 ease-in-out"
          />) : (
              <div className="h-full aspect-[9/16] w-full max-h-[20rem] animate-pulse bg-gray-200 dark:bg-gray-700"></div>
          )}
      </div>
      <h3 className="mt-4 text-sm dark:text-gray-200 text-gray-700">
        {item.name}
      </h3>
      <p className="mt-1 text-lg font-medium dark:text-gray-100 text-gray-900">
        ${item.price}
      </p>
    </Link>
  );
}
