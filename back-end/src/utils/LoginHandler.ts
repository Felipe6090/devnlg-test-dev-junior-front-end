import { Request, Response } from "express";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import prismaClient from "../prisma";

interface IExecute {
  email: string;
  password: string;
}

interface ICreate {
  email: string;
  password: string;
  passHash: string;
  userData?: any;
}

interface ILogin {
  password: string;
  passHash: string;
  userData: any;
}
export default class LoginHandler {
  async execute({ email, password }: IExecute) {
    const userData = await prismaClient.user.findFirst({
      where: { email },
    });

    const passHash = await hash(password, 8);

    if (!userData) {
      return this.createUser({ email, password, passHash });
    } else {
      return this.LogUser({ password, passHash, userData });
    }
  }

  async createUser({ email, password, passHash, userData }: ICreate) {
    const user = await prismaClient.user.create({
      data: {
        email,
        password: passHash,
      },
    });

    const result = await this.LogUser({ password, passHash, userData });

    return result;
  }

  async LogUser({ password, passHash, userData }: ILogin) {
    const passMatch = compare(password, passHash);

    if (!passMatch) {
      throw new Error("Incorrect");
    }

    const token = sign({}, "20cc2efa-141c-4802-bc42-af8245d0984a", {
      subject: userData.id,
      expiresIn: "60s",
    });

    return token;
  }
}
