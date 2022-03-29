import { Request, Response } from "express";
import RefreshTokenHandler from "../utils/RefreshTokenHandler";

export default class RefreshTokenController {
  async handle(req: Request, res: Response) {
    const { refreshToken } = req.body;

    const handler = new RefreshTokenHandler();

    const token = await handler.execute(refreshToken);

    return res.json(token);
  }
}
