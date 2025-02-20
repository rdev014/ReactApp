
import { createContext, FC, ReactNode, useContext, useState } from "react";

// theme context type
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// context created with defalut value null
const ThemeContext = createContext<ThemeContextType | null>(null);

// Provider component
const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => { 

  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme =()=>{
    setTheme((prev) =>(prev === "light" ? "dark": "light"))
  }

  return(
    <ThemeContext.Provider value={{theme, toggleTheme}} >
        {children}
    </ThemeContext.Provider>
  )
};

// custome hook to access themeContext
export const useTheme = ()=> {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error ("Theme must be inside the Provider")
    }
  return context
}

export default ThemeProvider;
