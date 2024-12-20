import AWS from "aws-sdk";
import { UserModel } from "../../../domain/models/user.models";

class SQSConnection {
  private readonly sqs: AWS.SQS;
  constructor(private readonly queueUrl: string) {
    this.sqs = new AWS.SQS();
    this.queueUrl = queueUrl;
  }

  async sendMessage(messageBody: UserModel, event: string) {
    const params: AWS.SQS.SendMessageRequest = {
      QueueUrl: this.queueUrl,
      MessageBody: JSON.stringify({ ...messageBody, event }),
      MessageGroupId: messageBody.id ?? "",
    };

    try {
      const messageNotification = await this.sqs.sendMessage(params).promise();
      return messageNotification.MessageId;
    } catch (error) {
      console.error("Error sending message to SQS:", error);
      throw error;
    }
  }
}

export { SQSConnection };
