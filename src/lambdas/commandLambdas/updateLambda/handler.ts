import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { UpdateCommandHandler } from "../../../application/commands/update/updateCommandHandler";
import { UpdateCommandService } from "../../../infrastructure/commands/updateCommandService";
import { createResponse, throwError } from "../../../utils/responseTemplate";
export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const input = event.body;
    if (input === null || input === undefined) {
      throwError(400, "Bad Request", "Request body is required");
    }
    const commandHandler = new UpdateCommandHandler(new UpdateCommandService());
    const data = await commandHandler.execute(input ?? "");
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        data,
      }),
    };
  } catch (err: any) {
    if (err?.statusCode) {
      return {
        statusCode: err.statusCode,
        body: JSON.stringify(
          createResponse(false, err.message, err.message, err.details)
        ),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify("Server Error"),
      };
    }
  }
};
