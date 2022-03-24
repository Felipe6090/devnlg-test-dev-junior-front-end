import { Request, Response } from "express";

import GetAllItems from "../utils/GetAllItems";

export default class PassAllItemsController {
  async handle(req: Request, res: Response) {
    const helper = false;

    const items = await GetAllItems(helper);

    return res.json(items);
  }
}
