import prismaClient from "../prisma";

export default class GetAllUsersDataService {
  async execute() {
    const usersDatas = await prismaClient.user.findMany();

    return usersDatas;
  }
}
