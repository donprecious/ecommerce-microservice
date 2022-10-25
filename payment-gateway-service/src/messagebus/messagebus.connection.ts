import { RABBITMQ_CONNECTION_URL } from '@/config';
import { logger } from '@/utils/logger';
import amqplib, { Channel } from 'amqplib';
import { QUEUE_NAMES } from 'youverify-demo-ecommerce-shared-libaray';
import { orderQueueConsumer } from './order-queue.consumer';

export let busChannel: Channel;
export default class MessageBus {
  static async connect() {
    try {
      const rabbitMqUrl = RABBITMQ_CONNECTION_URL;
      const connection = await amqplib.connect(rabbitMqUrl);
      logger.info('rabbitmq connection establised');
      busChannel = await connection.createChannel();

      await this.registerQueues();
      await this.registerConsumers();
    } catch (e) {
      logger.error(e.message);
      throw new Error(e);
    }
  }
  static async Send(queueName: string, data: object) {
    await busChannel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
  }

  private static async registerConsumers() {
    await busChannel.consume(QUEUE_NAMES.orderQueue, orderQueueConsumer);
  }

  private static async registerQueues() {
    await busChannel.assertQueue(QUEUE_NAMES.processedOrderPaymentResultQueue);
  }
}
