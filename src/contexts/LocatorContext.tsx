import { createContext, ReactNode, useContext, useState } from "react";

interface LocatorContextType {
  country: string;
  state: string;
  setCountry: (newCountry: string) => void;
  setState: (newState: string) => void;
}

const LocatorContext = createContext<LocatorContextType | null>(null);

export default function LocatorPorvider({ children }: { children: ReactNode }) {
  const [country, setCountry] =
    useState<LocatorContextType["country"]>("India");
  const [state, setState] =
    useState<LocatorContextType["state"]>("Himachal Pradesh");

  return (
    <LocatorContext.Provider value={{ country, state, setCountry, setState }}>
      {children}
    </LocatorContext.Provider>
  );
}
export const useLocation = () => {
    const context = useContext(LocatorContext);
    if (!context) {
        throw new Error("useLocation must be used within a LocatorPorvider");
    }
    return context;
};
