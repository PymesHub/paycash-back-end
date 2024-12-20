import { APIGatewayProxyHandler } from "aws-lambda";
import openapi from "./openapi.json";

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const jsonData = openapi;

    return {
      statusCode: 200,
      body: JSON.stringify({ ...jsonData }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error retrieving JSON content",
        error: error.message,
      }),
    };
  }
};
