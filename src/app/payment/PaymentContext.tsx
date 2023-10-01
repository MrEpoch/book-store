"use client";
import React, { createContext, useContext, useEffect } from "react";

export interface PaymentContextType {
  raiseStep: () => void;
  currentStep: number;
  lowerStep: () => void;
  startStep: () => void;
  middleStep: () => void;
}

export const PaymentContext = createContext<PaymentContextType | Object>({});

export function usePayment() {
  const value = useContext(PaymentContext);
  if (value === null) return {};
  return value;
}

export default function PaymentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentStep, setCurrentStep] = React.useState(0);

  function raiseStep() {
    if (currentStep >= 2) return;
    setCurrentStep((prev) => prev + 1);
  }

  function lowerStep() {
    if (currentStep <= 0) return;
    setCurrentStep((prev) => prev - 1);
  }

  function startStep() {
    setCurrentStep(0);
  }

  function middleStep() {
    setCurrentStep(1);
  }

  const context_values = {
    currentStep,
    raiseStep,
    lowerStep,
    startStep,
    middleStep,
  };

  return (
    <PaymentContext.Provider value={context_values}>
      {children}
    </PaymentContext.Provider>
  );
}
