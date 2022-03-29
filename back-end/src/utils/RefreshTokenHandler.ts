import prismaClient from "../prisma";
import GenerateToken from "../providers/GenerateToken";

export default class RefreshTokenHandler {
  async execute(tokenId: string) {
    const refreshToken = await prismaClient.refreshToken.findFirst({
      where: {
        id: tokenId,
      },
    });

    if (!refreshToken) {
      throw new Error("Invalid refresh token");
    }

    const generateToken = new GenerateToken();

    const token = await generateToken.execute(refreshToken.userId);

    return token;
  }
}
