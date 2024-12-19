import { deleteUser } from '../../../domain/useCases/userUseCases';
import { DeleteCommand } from './deleteCommand';
class DeleteCommandHandler {
  constructor(readonly deleteService: deleteUser) {
    this.deleteService = deleteService;
  }

  async execute(user: string) {
    const deleteCommand = DeleteCommand.create(user);
    const data = await this.deleteService.execute(deleteCommand.id);
    return data;
  }
}

export { DeleteCommandHandler };
