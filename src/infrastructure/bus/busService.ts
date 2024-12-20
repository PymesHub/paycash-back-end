import { UserModel } from "../../domain/models/user.models";
import { SQSConnection } from "./sqs/sqsConnection";

class BusService {
  constructor() {}

  async createBusEvent(userData: UserModel) {
    const sqsUrl = process.env.SQS_URL;
    const sqs = new SQSConnection(sqsUrl ?? "");
    const message = await sqs.sendMessage(userData);
    return message;
  }
}

export { BusService };
