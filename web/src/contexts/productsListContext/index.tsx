import { useState } from "react";

import ProductsListContext from "./productsListContext";

type ITypes = {
  children: JSX.Element | JSX.Element[];
  state: any;
};

export default function ProductsListProvider({ children, state }: ITypes) {
  const [productsHandler, setProductsHandler] = useState(state);

  return (
    <ProductsListContext.Provider value={productsHandler}>
      {children}
    </ProductsListContext.Provider>
  );
}
