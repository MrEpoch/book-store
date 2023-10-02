import { z } from "zod";
import { countries } from "../app/payment/Countries";

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

export function checkPayment(data: FormData) {
  try {
      const standardEmail = z.string().email();
      const standardPhone = z.string().min(7);
      const standardString = z.string().min(1);
      const standardPostcode = z.string().regex(/^\d{5}$/);

      const email = standardEmail.safeParse(data.get("email"));
      const phone = standardPhone.safeParse(data.get("phone"));
      const full_name = standardString.safeParse(data.get("full_name"));
      const address = standardString.safeParse(data.get("address"));
      const country = standardString.safeParse(data.get("country"));
      const city = standardString.safeParse(data.get("city"));
      const postalcode = standardPostcode.safeParse(data.get("postal_code"));
      const cart = JSON.parse(data.get("cart") as string);

      if (!email.success) {
        return {
          error: true,
          type: "email",
        };
      } else if (!country.success) {
        return {
          error: true,
          type: "country",
        };
      } else if (!phone.success) {
        return {
          error: true,
          type: "phone",
        };
      } else if (!full_name.success) {
        return {
          error: true,
          type: "full_name",
        };
      } else if (!address.success) {
        return {
          error: true,
          type: "address",
        };
      } else if (!city.success) {
        return {
          error: true,
          type: "city",
        };
      } else if (!postalcode.success) {
        return {
          error: true,
          type: "postal_code",
        };
      }

      if (!countries.includes(country.data)) {
        return {
          error: true,
          type: "country",
        };
      }

      return {
        email: email.data,
        phone: phone.data,
        full_name: full_name.data,
        address: address.data,
        country: country.data,
        city: city.data,
        postalcode: postalcode.data,
        cart
      };
  } catch (error) {
      return {
          error: true,
          type: "unknown",
      }
  }
}
