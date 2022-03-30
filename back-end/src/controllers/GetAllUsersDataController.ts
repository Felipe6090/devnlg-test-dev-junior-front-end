import { Request, Response } from "express";
import GetAllUsersDataService from "../services/GetAllUsersDataService";

export default class GetAllUsersDataController {
  async handle(req: Request, res: Response) {
    const service = new GetAllUsersDataService();

    const result = await service.execute();

    return res.json(result);
  }
}
