import { useState } from "react";

import ProductItemContext from "./productItemContext";

type ITypes = {
  children: JSX.Element | JSX.Element[];
  state: any;
};

export default function ProductItemProvider({ children, state }: ITypes) {
  const [productHandler, setProductHandler] = useState(state);

  return (
    <ProductItemContext.Provider value={productHandler}>
      {children}
    </ProductItemContext.Provider>
  );
}
