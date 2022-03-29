import prismaClient from "../prisma";

import dayjs from "dayjs";

export default class GenerateRefreshToken {
  async execute(userId: string) {
    const tokenCheck = await prismaClient.refreshToken.findFirst({ 
      where: 
    })

    const expiresIn = dayjs().add(15, "seconds").unix();

    const generateRefreshToken = await prismaClient.refreshToken.create({
      data: {
        userId,
        expiresIn,
      },
    });

    return generateRefreshToken;
  }
}
