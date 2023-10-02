import PaymentProvider from "./PaymentContext";
import Stepper from "./Stepper";
import { payment_err } from "./ErrTypesPayment";
import TurnOffError from "./TurnOffError";
import { Suspense, lazy } from "react";

const StepperDecider = lazy(() => import("./StepperDecider"));

export default function Page({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <div className="min-h-screen w-full relative flex flex-col dark:bg-gray-900 dark:text-white/90">
      <PaymentProvider>
        <Stepper />
        <div className="w-full justify-center min-h-full flex flex-col max-w-screen-xl mx-auto p-4">
          <Suspense fallback={<div className="w-full h-24 bg-gray-200 dark:bg-gray-700 rounded-xl my-6 animate-pulse"></div>}>
              <StepperDecider />
          </Suspense>
        </div>
        {searchParams?.error && (
          <div
            className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300
                bg-red-50 dark:text-red-400 dark:bg-gray-800 absolute bottom-23 right-10 dark:border-red-800"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div className="ml-3 text-sm font-medium">
              {payment_err[searchParams.error as keyof typeof payment_err]}
            </div>
            <TurnOffError />
          </div>
        )}
      </PaymentProvider>
    </div>
  );
}
