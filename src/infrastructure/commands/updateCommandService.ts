import { UserModelUpdate } from "../../domain/models/user.models";
import { updateUser } from "../../domain/useCases/userUseCases";
import { createResponse, throwError } from "../../utils/responseTemplate";
import { connectionWrite } from "../database/mysql";

class UpdateCommandService implements updateUser {
  async execute(user: UserModelUpdate) {
    try {
      const [result]: any = await connectionWrite.query(
        "CALL update_user(?,?,?,?,?,?,?)",
        [
          user.id,
          user.name,
          user.lastName,
          user.email,
          user.birthday,
          user.genre,
          null,
        ]
      );
      if (result?.affectedRows === 0) {
        return throwError(404, "Usuario no encontrado o no actualizado");
      }
      return createResponse(true, "Usuario actualizado con éxito");
    } catch (error) {
      throwError(500, "Internal Server Error", error);
    }
  }
}

export { UpdateCommandService };
