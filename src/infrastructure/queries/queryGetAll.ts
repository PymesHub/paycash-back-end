import { getAllUsers } from '../../domain/useCases/userUseCases';
import { prismaRead } from '../database/prismaClient';

class QueryGetAllService implements getAllUsers {
  async execute(page: string = '1', page_size: string = '10') {
    const pageNumber = parseInt(page, 10) || 1;
    const pageSize = parseInt(page_size, 10) || 10;
    const skip = (pageNumber - 1) * pageSize;
    try {
      const data = await prismaRead.user.findMany({
        skip,
        take: pageSize,
      });
      return {
        success: true,
        data: data,
        message: "Consulta éxitosa"
      }
    } catch (error) {
      throw error;
    }
  }
}

export { QueryGetAllService };
