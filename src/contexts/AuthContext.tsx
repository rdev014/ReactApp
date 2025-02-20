import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
  username: { id: number; fullname: string } | null;
  login: (fullname: string) => void;
  logout: () => void;
}
// auth context created
const AuthContext = createContext<AuthContextType>(null);
export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const login = (fullname: string) => setUser({ id: Date.now(), fullname });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

//  auth provider created
export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const login = (fullname: string) => setUser({ id: Date.now(), fullname });
  const logout = () => setUser(null);

  import { createContext, ReactNode, useContext, useState } from "react";

  interface AuthContextType {
    username: { id: number; fullname: string } | null;
    f;
    login: (fullname: string) => void;
    logout: () => void;
  }
  // auth context created

  //  auth provider created
  export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AuthContextType["user"]>(null);
    const login = (fullname: string) => setUser({ id: Date.now(), fullname });
    const logout = () => setUser(null);

    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  }
}
export const context = useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
