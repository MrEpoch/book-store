"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import WhiteSpace from "@/assets/WhiteSpace.webp";

export default function ImageComponents({ imgUrl }: { imgUrl: string }) {
  const [image, setImage] = useState<string | StaticImageData>(WhiteSpace);
  const [imgName, setImgName] = useState<File | null>(null);
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    async function getSavedImage(imgUrl: string) {
      const { data } = supabase.storage
        .from("book-store")
        .getPublicUrl(`images/${imgUrl}`);
      if (data) {
        setImage(data.publicUrl);
      } else {
        router.replace("/update-product?error=download");
      }
    }
    getSavedImage(imgUrl);
  });

  return (
    <>
      <Image
        width={1000}
        height={750}
        className="rounded-lg w-full h-full object-cover"
        src={image}
        alt="New Image"
      />{" "}
      <input hidden name="formerName" value={imgUrl} />
      <input
        type="file"
        onChange={(e) => {
          e.target.files && setImage(URL.createObjectURL(e.target.files[0]));
          e.target.files && setImgName(e.target.files[0]);
        }}
        className="absolute w-full h-full z-10 top-0 left-0 opacity-0 cursor-pointer"
        name="image"
        // @ts-ignore
        value={imgName}
      />
    </>
  );
}
