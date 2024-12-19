import { deleteUser } from "../.././domain/useCases/userUseCases";
import { createResponse, throwError } from "../../utils/responseTemplate";
import { connectionWrite } from "../database/mysql";

class DeleteCommandService implements deleteUser {
  async execute(user_id: string) {
    try {
      await connectionWrite.query("CALL delete_user(?)", [user_id]);
      return createResponse(true, "Usuario eliminado con éxito", {});
    } catch (error) {
      throwError(500, "Internal Server error", error);
    }
  }
}

export { DeleteCommandService };
