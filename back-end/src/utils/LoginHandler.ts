import { hash, compare } from "bcryptjs";

import prismaClient from "../prisma";
import GenerateRefreshToken from "../providers/GenerateRefreshToken";
import GenerateToken from "../providers/GenerateToken";

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

  async createUser({ email, password, passHash }: ICreate) {
    const user = await prismaClient.user.create({
      data: {
        email,
        password: passHash,
      },
    });

    const result = await this.LogUser({ password, passHash, userData: user });

    return result;
  }

  async LogUser({ password, passHash, userData }: ILogin) {
    const passMatch = compare(password, passHash);

    if (!passMatch) {
      throw new Error("Incorrect");
    }

    const userId = userData.id;

    const generateToken = new GenerateToken();

    const token = await generateToken.execute(userId);

    const generateRefreshToken = new GenerateRefreshToken();

    const refreshToken = await generateRefreshToken.execute(userId);

    return { token, refreshToken };
  }
}
