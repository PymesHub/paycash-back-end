import { error } from 'console';
import { UserModelUpdate } from '../../domain/models/user.models';
import { updateUser } from '../../domain/useCases/userUseCases';
import { prismaWrite } from '../database/prismaClient';
import { createResponse, throwError } from '../../utils/responseTemplate';

class UpdateCommandService implements updateUser {
  async execute(user: UserModelUpdate) {
    try {
      const userInfo = await prismaWrite.user.findUnique({
        where: {
          id: user?.id ?? '',
        },
      });
      if (!userInfo) {
        throwError(404, 'User Not Found');
      }
      const dataUser = await prismaWrite.user.update({
        where: { id: userInfo?.id },
        data: {
          name: user.name ?? userInfo?.name,
          id: user.id,
          lastName: user.lastName ?? userInfo?.lastName,
          email: user.email ?? userInfo?.email,
          birthday: user.birthday ?? userInfo?.birthday,
          genre: user.genre ?? userInfo?.genre,
        },
      });
      return createResponse(true, 'Usuario actualizado con éxito', dataUser);
    } catch (error) {
      throwError(500, 'Internal Server Error', error);
    }
  }
}

export { UpdateCommandService };
