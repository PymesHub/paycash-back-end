import { UserModel } from "../../domain/models/user.models";
import { createUser } from "../../domain/useCases/userUseCases";
import { prismaWrite } from "../database/prismaClient";
import {
  ApiResponse,
  createResponse,
  throwError,
} from "../../utils/responseTemplate";
import { logger } from "../../utils/logger";

class CreateCommandService implements createUser {
  async execute(user: UserModel): Promise<ApiResponse<UserModel> | void> {
    try {
      const dataUser = await prismaWrite.user.create({
        data: {
          name: user.name,
          id: user.id ?? "",
          lastName: user.lastName,
          email: user.email,
          birthday: user.birthday,
          genre: user.genre,
        },
      });
      return createResponse(true, "Usuario creado con éxito", dataUser);
    } catch (error) {
      logger.error(error);
      throwError(500, "User creation failed", `error`);
    }
  }
}

export { CreateCommandService };
