"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ShopItemImage({ imageUrl }: { imageUrl: string }) {
  const [imgUrl, setImgUrl] = useState<string>("");
  async function getImgUrl() {
    const supabase = createClientComponentClient();
    const { data } = supabase.storage
      .from("book-store")
      .getPublicUrl(`images/${imageUrl}`);
    if (data) setImgUrl(data.publicUrl);
  }

  useEffect(() => {
    if (imageUrl) getImgUrl();
  }, [imageUrl]);

  return (
    <div className="w-full rounded-lg h-full">
      {imgUrl.length > 0 ? (
        <Image
          src={imgUrl}
          className="w-full rounded-l-lg md:max-h-[unset] max-h-[500px] h-full object-cover object-center"
          width={600}
          height={600}
          alt="Product Image"
        />
      ) : (
        <div className="w-full aspect-[9/16] rounded-l-lg md:max-h-[unset] max-h-[500px] h-full animate-pulse bg-gray-200 dark:bg-gray-700"></div>
      )}
    </div>
  );
}
