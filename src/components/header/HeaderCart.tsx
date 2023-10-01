"use client";
import { useState } from "react";
import { CartType, useCart } from "../../app/CartProvider";
import CartItems from "../CartItems";

export default function HeaderCart() {
  const [shown, setShown] = useState<boolean>(false);
  const { cart } = useCart();

  return (
    <>
        <button className="relative w-full items-center flex md:py-0 py-2 pl-3 md:mr-3 md:pl-0
      dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white 
        h-full md:dark:hover:bg-transparent" onClick={() => setShown(true)}>
        <div className="relative">
          {cart && cart.length > 0 && (
              <div
                                className="absolute inline-flex items-center justify-center w-5 h-5 text-xs
                            font-bold text-white bg-red-500 rounded-full -top-3 -right-3"
                            >
                                {cart.length}
                            </div>
          )}
        <svg className="w-7 h-7 dark:text-white/90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Cart</title>
            <path fill="currentColor"
            d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"/>
    </svg>
</div>
    </button>
      {shown && (
        <div
          className="absolute top-0 right-0 w-screen h-screen z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-10">
                <div className="pointer-events-auto w-full sm:max-w-full max-w-md">
                  <div
                    className="flex h-full flex-col overflow-y-scroll dark:text-white
                    dark:bg-gray-900 bg-white p-2 shadow-xl"
                  >
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          className="text-lg font-medium dark:text-gray-100 text-gray-900"
                          id="slide-over-title"
                        >
                          Shopping cart
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            onClick={() => setShown(false)}
                            type="button"
                            className="relative -m-2 p-2
                          dark:text-gray-800 text-gray-400 hover:text-gray-500"
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <svg
                              className="h-6 w-6 dark:text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cart.map((item: CartType) => (
                              <CartItems key={item.id} item={item} />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium dark:text-gray-100 text-gray-900">
                        <p>Subtotal</p>
                        <p>
                          $
                          {cart.reduce(
                            (acc: number, item: CartType) =>
                              acc + item.quantity * item.price,
                            0,
                          )}
                        </p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="/payment"
                          onClick={() => setShown(false)}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            onClick={() => setShown(false)}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
