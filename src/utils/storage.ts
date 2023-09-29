import { SupabaseClient } from "@supabase/supabase-js";

export const StoreProductImage = async (
  image: File,
  supabase: SupabaseClient,
): Promise<{ image?: string; error?: boolean; type?: string }> => {
  const img_ext = image?.name.split(".").pop();

  if (img_ext === undefined) {
    return {
      error: true,
      type: "image",
    };
  }

  const new_image_name =
    Math.random().toString(36).substring(2, 15) + "." + img_ext;
  if (!["jpg", "jpeg", "png", "webp"].includes(img_ext)) {
    return {
      error: true,
      type: "image",
    };
  }

  const newImage = await image.arrayBuffer();

  const { error } = await supabase.storage
    .from("book-store")
    .upload(`images/${new_image_name}`, newImage, {
      cacheControl: "3600",
    });

  if (error) {
    return {
      error: true,
      type: "image",
    };
  }

  return {
    image: new_image_name,
  };
};

export const deleteProductImage = async (
  image: string,
  supabase: SupabaseClient,
): Promise<{ image?: string; error?: boolean; type?: string }> => {
  const { error } = await supabase.storage
    .from("book-store")
    .remove([`images/${image}`]);
  if (error) {
    return {
      error: true,
      type: "image",
    };
  }
  return {
    error: false,
  };
};
