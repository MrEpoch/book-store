export const getCart = () => {
  return localStorage.getItem("cart");
};

export const insertIntoCart = (product: any) => {
  const cart = getCart();
  if (!cart) {
    localStorage.setItem("cart", JSON.stringify([product]));
  } else {
    const saved = JSON.parse(cart).filter((item: any) => {
      if (item.id === product.id) {
        return item;
      }
    });
    let new_cart_f = JSON.parse(cart);
    if (saved.length > 0) {
      new_cart_f = JSON.parse(cart).map((item: any) => {
        if (item.id === product.id) {
          item.quantity = product.quantity;
        }
        return item;
      });
    }
    localStorage.setItem("cart", JSON.stringify(new_cart_f));
  }
};

export const updateQuantity = (product: any) => {
  const cart = getCart();
  if (!cart) {
    localStorage.setItem("cart", JSON.stringify([product]));
  } else {
    const cart_json = JSON.parse(cart);
    const saved = cart_json.filter((item: any) => {
      if (item.id === product.id) {
        return item;
      }
    });

    let new_quantity;
    if (saved.length > 0) {
      new_quantity = cart_json.map((item: any) => {
        if (item.id === product.id) {
          item.quantity = product.quantity;
        }
        return item;
      });
    } else {
      new_quantity = [...cart_json, product];
    }
    localStorage.setItem("cart", JSON.stringify(new_quantity));
  }
};
