import { stat } from "fs";
import { QueryGetAllCommandHandler } from "../../../application/queries/getAll/queryGetAllCommandHandler";
import { QueryGetAllService } from "../../../infrastructure/queries/queryGetAll";

export const handler = async () => {
  try {
    const queryHandler = new QueryGetAllCommandHandler(
      new QueryGetAllService()
    );
    const data = await queryHandler.execute();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error retrieving users:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
