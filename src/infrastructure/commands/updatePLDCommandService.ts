import { UserModelUpdate } from "../../domain/models/user.models";
import { updateUser } from "../../domain/useCases/userUseCases";
import { getRandomPLDStatus } from "../../utils/mockPLD";
import { createResponse, throwError } from "../../utils/responseTemplate";
import { connectionWrite } from "../database/mysql";

class UpdatePLDCommandService implements updateUser {
  async execute(user: UserModelUpdate) {
    const status = await getRandomPLDStatus();
    console.log("Este es el status", status);
    try {
      const [result]: any = await connectionWrite.query(
        "CALL actualizar_statusPLD(?,?)",
        [user.id, status]
      );
      console.log("Este es el result", result);
      if (result?.affectedRows === 0) {
        return throwError(404, "Usuario no encontrado o no actualizado");
      }
      return createResponse(true, "Usuario actualizado con éxito");
    } catch (error) {
      throwError(500, "Internal Server Error", error);
    }
  }
}

export { UpdatePLDCommandService };
