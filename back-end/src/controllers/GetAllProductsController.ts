import { Request, Response } from "express";

import GetAllItems from "../services/GetAllProductsService";

export default class PassAllItemsController {
  async defaultFormart(req: Request, res: Response) {
    const helper = false;

    const items = await GetAllItems(helper);

    return res.json(items);
  }

  async alternativeFormat(req: Request, res: Response) {
    const helper = true;

    const items = await GetAllItems(helper);

    return res.json(items);
  }
}
