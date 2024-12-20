import { UserModel } from "../../domain/models/user.models";
import { createUser } from "../../domain/useCases/userUseCases";
import {
  ApiResponse,
  createResponse,
  throwError,
} from "../../utils/responseTemplate";
import { BusService } from "../bus/busService";
import { connectionWrite } from "../database/mysql";

class CreateCommandService implements createUser {
  async execute(user: UserModel): Promise<ApiResponse<UserModel> | void> {
    const busEvent = new BusService();
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
      await busEvent.createBusEvent(user);
      return createResponse(true, "Usuario creado con éxito");
    } catch (error) {
      throwError(500, "User creation failed", `error`);
    }
  }
}

export { CreateCommandService };
