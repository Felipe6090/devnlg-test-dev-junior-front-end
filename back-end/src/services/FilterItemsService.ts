import { IEuropeanProducts } from "../types/ProductsTypes";
import GetAllItems from "../utils/GetAllItems";

type IParams = {
  price?: Number;
  departament?: string;
  hasDiscount?: boolean;
};

export default class FilterItemsService {
  async execute({ price, departament, hasDiscount }: IParams) {
    const helper = false;

    const items = await GetAllItems(helper);

    /*function filter(item: IEuropeanProducts) {
      if (hasDiscount !== undefined) {
        return item.hasDiscount === hasDiscount;
      }

      if (price !== undefined) {
        return Number(item.price) <= price || Number(item.preco) <= price;
      }

      if (departament !== undefined) {
        return item.departamento == departament;
      }
    } 

    const filteredItems = items.filter(filter);
    */

    return items;
  }
}
