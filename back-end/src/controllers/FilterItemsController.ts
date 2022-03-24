import FilterItemsService from "../services/FilterItemsService";

import { Request, Response } from "express";

type IParams = {
  price?: Number;
  departament?: string;
  hasDiscount?: boolean;
};

export default class FilterItemsController {
  async handle(req: Request, res: Response) {
    const services = new FilterItemsService();

    const filterParams = req.body as IParams;

    const filteredItems = await services.execute(filterParams);

    return res.json(filteredItems);
  }
}
