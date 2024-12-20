import { SQSHandler, SQSRecord } from "aws-lambda";
import { UpdateCommandHandler } from "../../application/commands/update/updateCommandHandler";
import { UpdatePLDCommandService } from "../../infrastructure/commands/updatePLDCommandService";

export const handler: SQSHandler = async (event) => {
  console.log("Processing SQS event...");

  // Iterar sobre los registros del evento SQS
  for (const record of event.Records) {
    try {
      const commandHandler = new UpdateCommandHandler(
        new UpdatePLDCommandService()
      );
      const messageBody = record.body;
      await commandHandler.execute(messageBody);
      console.log("Message body:", messageBody);
    } catch (error) {
      console.error("Error processing record:", record, error);
    }
  }

  console.log("All messages processed.");
};
