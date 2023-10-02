"use client";

import { useState } from "react";
import { CartContextItems, useCart } from "../CartProvider";
import { countries } from "./Countries";
import { PaymentContextType, usePayment } from "./PaymentContext";

export default function PaymentForm() {
  const { cart } = useCart() as CartContextItems;
  const { raiseStep, lowerStep } = usePayment() as PaymentContextType;

  const [formState, setFormState] = useState({
    address: "Nowhere 123",
    city: "God Knows",
    country: "Andorra",
    email: "dev@stencukpage.com",
    full_name: "Alex",
    phone: "123-456-789",
    postal_code: "12345",
    terms: false,
    refund: false
  });

  return (
    <form action="/api/payment" method="POST" className="">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div>
          <label
            htmlFor="full_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full Name
          </label>
          <input
            onChange={(e) =>
              setFormState({ ...formState, full_name: e.target.value })
            }
            value={formState.full_name}
            name="full_name"
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Anna Redwood"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            onChange={(e) =>
              setFormState({ ...formState, address: e.target.value })
            }
            value={formState.address}
            name="address"
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Local street 123"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone number
          </label>
          <input
            onChange={(e) =>
              setFormState({ ...formState, phone: e.target.value })
            }
            value={formState.phone}
            name="phone"
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="123-455-678"
            pattern="/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})$/"
            required
          />
        </div>
        <div>
          <label
            htmlFor="City"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <input
            onChange={(e) =>
              setFormState({ ...formState, city: e.target.value })
            }
            value={formState.city}
            type="text"
            id="city"
            name="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="City"
            required
          />
        </div>
        <div>
          <label
            htmlFor="postal_code"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Postal Code
          </label>
          <input
            onChange={(e) =>
              setFormState({ ...formState, postal_code: e.target.value })
            }
            value={formState.postal_code}
            type="text"
            name="postal_code"
            id="postalcode"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Postal Code"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email address
        </label>
        <input
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          value={formState.email}
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="country"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Country
        </label>
        <select
          name="country"
          id="countries"
          value={formState.country}
          onChange={(e) =>
            setFormState({ ...formState, country: e.target.value })
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
        >
          {countries.map((country, i) => (
            <option key={i}>{country}</option>
          ))}
        </select>
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            checked={formState.terms}
            onChange={(e) => setFormState({ ...formState, terms: e.target.checked })}
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="/legal/terms-&-condition"
            className="text-green-600 hover:underline dark:text-green-500"
          >
            terms and conditions
          </a>
          .
        </label>
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            checked={formState.refund}
            onChange={(e) => setFormState({ ...formState, refund: e.target.checked })}
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I understand{" "}
          <a
            href="https://www.termsfeed.com/live/2fb80a47-7a52-4b5e-9665-5e25c1da5240"
            className="text-green-600 hover:underline dark:text-green-500"
          >
            refund policy
          </a>
          .
        </label>
      </div>
      <button
        type="submit"
        className="text-white
                    bg-green-700 hover:bg-green-800 focus:ring-4
                    focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5
                    items-centerring-green-800"
      >
        Process Payment
      </button>
    </form>
  );
}
