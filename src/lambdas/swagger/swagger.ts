import { APIGatewayProxyHandler } from "aws-lambda";
import openapi from "./openapi.json";

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const jsonData = openapi;

    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify({ ...jsonData }),
    };
  } catch (error) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 500,
      body: JSON.stringify({
        message: "Error retrieving JSON content",
        error: error.message,
      }),
    };
  }
};
