import { UserModel } from '../../domain/models/user.models';
import { SQSConnection } from './sqs/sqsConnection';

class BusService {
  constructor(readonly event: string) {
    this.event = event;
  }

  async createBusEvent(userData: UserModel) {
    const sqsUrl = process.env.SQS_URL;
    const sqs = new SQSConnection(sqsUrl ?? '');
    const message = await sqs.sendMessage(userData, this.event);
    return message;
  }
}

export { BusService };
