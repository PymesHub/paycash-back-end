import { updateUser } from '../../../domain/useCases/userUseCases';
import { UpdateCommand } from './updateCommand';

class UpdateCommandHandler {
  constructor(readonly updateService: updateUser) {
    this.updateService = updateService;
  }

  async execute(user: string) {
    const updateCommand = UpdateCommand.create(user);
    const data = await this.updateService.execute(updateCommand);
    return data;
  }
}

export { UpdateCommandHandler };
