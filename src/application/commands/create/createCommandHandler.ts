import { createUser } from "../../../domain/useCases/userUseCases";
import { CreateCommand } from "./createCommand";
class CreateCommandHandler {
  constructor(readonly createService: createUser) {
    this.createService = createService;
  }

  async execute(user: string) {
    const createCommand = CreateCommand.create(user);
    const data = await this.createService.execute(createCommand);
    return data;
  }
}

export { CreateCommandHandler };
