"use client";
import { getCart, insertIntoCart, updateQuantity } from "@/utils/cart";
import { Product } from "@prisma/client";
import React, { createContext, useContext, useEffect } from "react";

export interface CartType extends Product {
  quantity: number;
}

export interface CartContextItems {
  getCart_context: () => CartType[];
  insertIntoCart_context: (product: CartType) => void;
  cart: CartType[];
  updateQuantity_context: (product: CartType) => void;
}

export const CartContext = createContext<CartContextItems | Object>({});

export function useCart() {
  const value = useContext(CartContext);
  if (value === null) return {};
  return value;
}

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = React.useState<CartType[]>([]);

  const getCart_context = () => {
    const cart = getCart();
    return cart;
  };

  const insertIntoCart_context = (product: CartType) => {
    setCart([...cart, product]);
    insertIntoCart(product);
  };

  const updateQuantity_context = (product: CartType) => {
    setCart(
      cart.map((item: CartType) => {
        if (item.id === product.id) {
          item.quantity = product.quantity;
        }
        return item;
      }),
    );
    updateQuantity(product);
  };

  useEffect(() => {
    const cart_saved = getCart_context();
    if (
      cart_saved &&
      cart_saved[0] !== null &&
      typeof cart_saved === "string"
    ) {
      setCart(JSON.parse(cart_saved));
    }
  }, [setCart]);

  const context_values = {
    getCart_context,
    insertIntoCart_context,
    cart,
    updateQuantity_context,
  };

  return (
    <CartContext.Provider value={context_values}>
      {children}
    </CartContext.Provider>
  );
}
