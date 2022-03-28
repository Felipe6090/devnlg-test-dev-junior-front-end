import { createContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
};

const AuthContext = createContext({} as AuthContextType);

export default AuthContext;
