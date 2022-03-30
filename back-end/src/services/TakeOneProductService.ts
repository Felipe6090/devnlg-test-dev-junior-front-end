import GetAllItems from "./GetAllProductsService";

import {
  ISecundaryProductsList,
  IBrazilianProducts,
  IEuropeanProducts,
} from "../types/ProductsTypes";

export default class TakeOneProductService {
  async execute(productQuery: string) {
    const helper = true;

    const items: ISecundaryProductsList = await GetAllItems(helper);

    function handleFilter(product: IBrazilianProducts & IEuropeanProducts) {
      const treatedQuery = productQuery.replace(/\-/g, " ");

      return product.nome === treatedQuery || product.name === treatedQuery;
    }

    const result = items.filter(handleFilter)[0];

    return result;
  }
}
