import { useState } from "react";
import AuthContext from "./AuthContext";

type ITypes = {
  children: JSX.Element | JSX.Element[];
  state: any;
};

export default function AuthProvider({ children, state }: ITypes) {
  const [productHandler, setProductHandler] = useState(state);

  return (
    <AuthContext.Provider value={productHandler}>
      {children}
    </AuthContext.Provider>
  );
}
