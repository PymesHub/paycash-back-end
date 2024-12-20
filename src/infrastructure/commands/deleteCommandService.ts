import { deleteUser } from "../.././domain/useCases/userUseCases";
import { createResponse, throwError } from "../../utils/responseTemplate";
import { connectionWrite } from "../database/mysql";

class DeleteCommandService implements deleteUser {
  async execute(user_id: string) {
    const [result]: any = await connectionWrite.query("CALL delete_user(?)", [
      user_id,
    ]);
    if (result?.affectedRows === 0) {
      return throwError(404, "Usuario no encontrado o no eliminado", "");
    }
    return createResponse(true, "Usuario eliminado con éxito", {});
  }
}

export { DeleteCommandService };
