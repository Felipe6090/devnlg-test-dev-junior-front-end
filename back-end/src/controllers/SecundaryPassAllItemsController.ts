import { Request, Response } from "express";

import GetAllItems from "../utils/GetAllItems";

export default class SecundaryPassAllItemsController {
  async handle(req: Request, res: Response) {
    const helper = true;

    const items = await GetAllItems(helper);

    return res.json(items);
  }
}
