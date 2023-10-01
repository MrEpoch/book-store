import { z } from "zod";

export const CheckProduct = (data: FormData) => {
  const normal_check = z.string().min(1);

  const name = normal_check.safeParse(data.get("name"));
  const description = normal_check.safeParse(data.get("description"));
  const price = normal_check.safeParse(data.get("price"));
  const image = data.get("image") as File;
  const category = normal_check.safeParse(data.get("category"));
  const stripeId = normal_check.safeParse(data.get("stripeId"));
  const quantity = normal_check.safeParse(data.get("quantity"));

  if (!name.success) {
    return {
      error: true,
      type: "name",
    };
  } else if (!description.success) {
    return {
      error: true,
      type: "description",
    };
  } else if (!price.success) {
    return {
      error: true,
      type: "price",
    };
  } else if (!category.success) {
    return {
      error: true,
      type: "category",
    };
  } else if (!stripeId.success) {
    return {
      error: true,
      type: "stripeId",
    };
  } else if (!image) {
    console.log("Primal");
    return {
      error: true,
      type: "image",
    };
  } else if (!quantity.success) {
    return {
      error: true,
      type: "quantity",
    };
  }

  const img_ext = image?.name.split(".").pop();
  if (!img_ext || !["jpg", "jpeg", "png", "webp"].includes(img_ext)) {
    console.log("no ext");
    return {
      error: true,
      type: "image",
    };
  }

  if (
    category.data !== "fantasy" &&
    category.data !== "scifi" &&
    category.data !== "romance" &&
    category.data !== "history"
  ) {
    return {
      error: true,
      type: "category",
    };
  }

  if (Number.isNaN(Number.parseFloat(price.data))) {
    return {
      error: true,
      type: "price",
    };
  }

  if (Number.isNaN(Number.parseInt(quantity.data))) {
    return {
      error: true,
      type: "quantity",
    };
  }

  const newPrice: number = parseFloat(parseFloat(price.data).toFixed(2));
  const newQuantity: number = parseInt(quantity.data);

  return {
    error: false,
    category: category.data,
    image,
    name: name.data,
    price: newPrice,
    stripeId: stripeId.data,
    description: description.data,
    quantity: newQuantity,
  };
};

export const CheckUpdatedProduct = (data: FormData) => {
  const normal_check = z.string().min(1);

  const name = normal_check.safeParse(data.get("name"));
  const description = normal_check.safeParse(data.get("description"));
  const price = normal_check.safeParse(data.get("price"));
  const category = normal_check.safeParse(data.get("category"));
  const stripeId = normal_check.safeParse(data.get("stripeId"));
  const isimage = normal_check.safeParse(data.get("isimage"));
  const image = data.get("image") as File;
  const formerName = normal_check.safeParse(data.get("formerName"));
  const id = normal_check.safeParse(data.get("id"));

  if (!name.success) {
    return {
      error: true,
      type: "name",
    };
  } else if (!description.success) {
    return {
      error: true,
      type: "description",
    };
  } else if (!price.success) {
    return {
      error: true,
      type: "price",
    };
  } else if (!category.success) {
    return {
      error: true,
      type: "category",
    };
  } else if (!stripeId.success) {
    return {
      error: true,
      type: "stripeId",
    };
  } else if (!isimage.success) {
    return {
      error: true,
      type: "image",
    };
  } else if (!formerName.success) {
    return {
      error: true,
      type: "formerName",
    };
  } else if (!id.success) {
    return {
      error: true,
      type: "id",
    };
  }

  if (isimage.data === "true") {
    const img_ext = image?.name.split(".").pop();
    if (!img_ext || !["jpg", "jpeg", "png", "webp"].includes(img_ext)) {
      return {
        error: true,
        type: "image",
      };
    }
  }

  if (
    category.data !== "fantasy" &&
    category.data !== "scifi" &&
    category.data !== "romance" &&
    category.data !== "history"
  ) {
    return {
      error: true,
      type: "category",
    };
  }

  if (Number.isNaN(Number.parseFloat(price.data))) {
    return {
      error: true,
      type: "price",
    };
  }

  const newPrice: number = parseFloat(parseFloat(price.data).toFixed(2));

  return {
    error: false,
    category: category.data,
    image,
    name: name.data,
    price: newPrice,
    stripeId: stripeId.data,
    description: description.data,
    formerName: formerName.data,
    id: id.data,
  };
};
