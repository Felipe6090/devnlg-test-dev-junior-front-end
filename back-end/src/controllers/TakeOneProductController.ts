import { Request, Response } from "express";

import TakeOneProductService from "../services/TakeOneProductService";

export default class TakeOneProductController {
  async handle(req: Request, res: Response) {
    const service = new TakeOneProductService();

    const product = req.params.product;

    const result = await service.execute(product);

    return res.json(result);
  }
}
