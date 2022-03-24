import { Request, Response } from "express";

import GetAllItems from "../utils/GetAllItems";

type IParams = {
  price?: Number;
  departament?: string;
  hasDiscount?: boolean;
};

interface IBrazilianProducts {
  nome: string;
  descricao: string;
  categoria: string;
  imagem: string;
  preco: string;
  material: string;
  departamento: string;
  id: string;
}

interface EuropeanProducts extends IBrazilianProducts {
  hasDiscount: boolean;
  name: string;
  gallery: [];
  description: string;
  price: string;
  discountValue: string;
  details: {
    adjective: string;
    material: string;
  };
  id: string;
}

export default class FilterItemsService {
  async execute({ price, departament, hasDiscount }: IParams) {
    const items = await GetAllItems();

    function filter(item: EuropeanProducts) {
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

    return items;
  }
}
