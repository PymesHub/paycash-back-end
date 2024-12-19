import { deleteUser } from '../.././domain/useCases/userUseCases';
import { createResponse, throwError } from '../../utils/responseTemplate';

import { prismaWrite } from '../database/prismaClient';

class DeleteCommandService implements deleteUser {
  async execute(user_id: string) {
    try {
      await prismaWrite.user.delete({
        where: {
          id: user_id,
        },
      });
      return createResponse(true, 'Usuario eliminado con éxito', {});
    } catch (error) {
      throwError(500, 'Internal Server error', error);
    }
  }
}

export { DeleteCommandService };
