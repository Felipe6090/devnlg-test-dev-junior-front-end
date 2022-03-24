import { Request, Response } from "express";

import GetAllItems from "../utils/GetAllItems";

export default class PassAllItemsController {
  async handle(req: Request, res: Response) {
    const items = await GetAllItems();

    return res.json(items);
  }
}
