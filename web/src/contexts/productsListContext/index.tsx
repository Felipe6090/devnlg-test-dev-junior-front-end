import { useState, createContext, useEffect } from "react";
import { api } from "../../../pages/api/api";

import { IProductsList } from "../../types/apiResponseTypes";

type ContextType = {
  productsList: any;
};

type IChildren = {
  children: JSX.Element | JSX.Element[];
  data: any;
};

export const ProductsListContext = createContext({} as ContextType);

export default function ProductsListProvider({ children, data }: IChildren) {
  const [productsList, setProductsList] = useState(data);

  return (
    <ProductsListContext.Provider value={{ productsList }}>
      {children}
    </ProductsListContext.Provider>
  );
}
