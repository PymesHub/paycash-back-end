import { UserModel } from "../../domain/models/user.models";
import { getAllUsers } from "../../domain/useCases/userUseCases";
import { createResponse } from "../../utils/responseTemplate";
import { connectionRead } from "../database/mysqlRead";

class QueryGetAllService implements getAllUsers {
  async execute() {
    try {
      const data = await connectionRead.execute("CALL getAllUsers()");
      console.log(data[0]);
      return createResponse(
        true,
        "usuarios encontrados",
        data[0][0] as UserModel[]
      );
    } catch (error) {
      throw error;
    }
  }
}

export { QueryGetAllService };
