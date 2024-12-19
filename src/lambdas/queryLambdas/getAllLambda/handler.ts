import { APIGatewayProxyEvent } from 'aws-lambda';
import { prismaRead } from '../../../infrastructure/database/prismaClient';
import { QueryGetAllCommandHandler } from '../../../application/queries/getAll/queryGetAllCommandHandler';
import { QueryGetAllService } from '../../../infrastructure/queries/queryGetAll';

export const handler = async (event: APIGatewayProxyEvent) => {
  try {
    const page = event?.queryStringParameters?.page?.toString();
    const page_size = event?.queryStringParameters?.page_size?.toString();
    const queryHandler = new QueryGetAllCommandHandler(
      new QueryGetAllService()
    );
    const data = await queryHandler.execute(page, page_size);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Users retrieved successfully',
        data,
      }),
    };
  } catch (error) {
    console.error('Error retrieving users:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  } finally {
    await prismaRead.$disconnect();
  }
};
