import { Request, Response } from "express";

import TakeOneProductService from "../services/TakeOneProductService";
import { IBrazilianProducts, IEuropeanProducts } from "../types/ProductsTypes";

export default class TakeOneProductController {
  async handle(req: Request, res: Response) {
    const service = new TakeOneProductService();

    const product = req.params.product;

    const result = await service.execute(product);

    return res.json(result);
  }
}
