import { createContext } from "react";
import {
  IBrazilianProducts,
  IEuropeanProducts,
} from "../../types/apiResponseTypes";

const ProductItemContext = createContext<
  IBrazilianProducts & IEuropeanProducts
>({} as IBrazilianProducts & IEuropeanProducts);

export default ProductItemContext;
