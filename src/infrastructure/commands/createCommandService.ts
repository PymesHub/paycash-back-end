import { UserModel } from "../../domain/models/user.models";
import { createUser } from "../../domain/useCases/userUseCases";
import {
  ApiResponse,
  createResponse,
  throwError,
} from "../../utils/responseTemplate";
import { connectionWrite } from "../database/mysql";

class CreateCommandService implements createUser {
  async execute(user: UserModel): Promise<ApiResponse<UserModel> | void> {
    try {
      await connectionWrite.query("CALL create_user(?,?,?,?,?,?,?)", [
        user.id,
        user.name,
        user.lastName,
        user.email,
        user.birthday,
        user.genre,
        "waiting",
      ]);
      return createResponse(true, "Usuario creado con éxito");
    } catch (error) {
      throwError(500, "User creation failed", `error`);
    }
  }
}

export { CreateCommandService };
