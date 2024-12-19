import { throwError } from '../../../utils/responseTemplate';

export class DeleteCommand {
  constructor(readonly id: string) {}

  static create(user_id: string): DeleteCommand {
    if (!user_id) {
      throwError(404, 'Bad request user Id Required');
    }
    return new DeleteCommand(user_id);
  }
}
