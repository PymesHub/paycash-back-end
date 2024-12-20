import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { CreateCommandHandler } from "../../../application/commands/create/createCommandHandler";
import { CreateCommandService } from "../../../infrastructure/commands/createCommandService";
import { createResponse } from "../../../utils/responseTemplate";
export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const input = event.body;
    const commandHandler = new CreateCommandHandler(new CreateCommandService());
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
          createResponse(false, err.message, undefined, err.details)
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
