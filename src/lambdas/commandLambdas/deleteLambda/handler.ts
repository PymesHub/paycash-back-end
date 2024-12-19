import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { DeleteCommandHandler } from "../../../application/commands/delete/deleteCommandHandler";
import { DeleteCommandService } from "../../../infrastructure/commands/deleteCommandService";
import { createResponse } from "../../../utils/responseTemplate";
import { logger } from "../../../utils/logger";
export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const id = event?.pathParameters?.id;
    const commandHandler = new DeleteCommandHandler(new DeleteCommandService());
    const data = await commandHandler.execute(id ?? "");
    return {
      statusCode: 200,
      body: JSON.stringify({
        data,
      }),
    };
  } catch (err: any) {
    if (err?.statusCode) {
      return {
        statusCode: err.statusCode,
        body: JSON.stringify(
          createResponse(false, err.message, undefined, err.details)
        ),
      };
    } else {
      logger.error(`Unexpected error: ${err?.message}`);
      return {
        statusCode: 500,
        body: JSON.stringify("Server Error"),
      };
    }
  }
};
