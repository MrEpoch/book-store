"use client";

import CartForm from "./CartForm";
import { PaymentContextType, usePayment } from "./PaymentContext";
import PaymentForm from "./PaymentForm";
import StripeLoading from "./StripeLoading";

export default function StepperDecider() {
  const { currentStep } = usePayment() as PaymentContextType;

  return (
    <>
      {currentStep === 0 && <CartForm />}
      {currentStep === 1 && <PaymentForm />}
      {currentStep === 2 && <StripeLoading />}
    </>
  );
}
