import { getAllUsers } from "../../../domain/useCases/userUseCases";
import { QueryGetAllComand } from "./queryGetAllComand";

class QueryGetAllCommandHandler {
  constructor(readonly getAllService: getAllUsers) {
    this.getAllService = getAllService;
  }

  async execute(page?: string, page_size?: string) {
    const queryGetAll = new QueryGetAllComand(page, page_size);
    const data = await this.getAllService.execute();

    return data;
  }
}

export { QueryGetAllCommandHandler };
