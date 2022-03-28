import { Request, Response } from "express";
import { hash } from "bcryptjs";

import prismaClient from "../prisma";

interface IUserRequest {
  email: string;
  password: string;
}

export default class LoginHandler {
  async execute({ email, password }: IUserRequest) {
    const userCheck = await prismaClient.user.findFirst({
      where: { email },
    });

    if (userCheck) {
      throw new Error("User alredy exists");
    }

    const passHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        email,
        password: passHash,
      },
    });

    return user;
  }
}
