import { createContext, useState, ReactNode, FC } from "react";

type ContextData = {
  value: string;
  setValue: (newValue: string) => void;
};

const Data = createContext<ContextData | undefined>(undefined);

type ContextProviderProps = {
  children: ReactNode;
};

export const MyContext: FC<ContextProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>(" ");
  const contextValue: ContextData = { value, setValue };
  return <Data.Provider value={contextValue}>{children} </Data.Provider>;
};
export default MyContext;
