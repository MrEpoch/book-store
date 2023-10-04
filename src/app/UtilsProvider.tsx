"use client";
import React, { createContext, useContext, useState } from "react";

export interface UtilsContextItems {
    headerMenuState: boolean,
    setHeaderMenuState: React.Dispatch<React.SetStateAction<boolean>>
}

export const UtilsContext = createContext<UtilsContextItems | Object>({});

export function useUtils() {
  const value = useContext(UtilsContext);
  if (value === null) return {};
  return value;
}

export default function UtilsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerMenuState, setHeaderMenuState] = useState<boolean>(false);
  const context_values = {
      headerMenuState,
      setHeaderMenuState
  };

  return (
    <UtilsContext.Provider value={context_values}>
      {children}
    </UtilsContext.Provider>
  );
}
