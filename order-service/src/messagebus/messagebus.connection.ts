import { RABBITMQ_CONNECTION_URL } from '@/config';
import { logger } from '@/utils/logger';
import amqplib, { Channel } from 'amqplib';
import { QUEUE_NAMES } from 'youverify-demo-ecommerce-shared-libaray';
import { processedOrderResult } from './processed-order-result-queue.consumer';
export let busChannel: Channel;
export default class MessageBus {
  static async connect() {
    try {
      const rabbitMqUrl = RABBITMQ_CONNECTION_URL;
      const connection = await amqplib.connect(rabbitMqUrl);
      logger.info('rabbitmq connection establised');
      busChannel = await connection.createChannel();
      await this.registerQueue();
      await this.registerConsumers();
    } catch (e) {
      logger.error(e.message);
      throw new Error(e);
    }
  }
  static async Send(queueName = '', data: object) {
    await busChannel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
  }

  static async registerQueue() {
    await busChannel.assertQueue(QUEUE_NAMES.orderQueue);
    logger.info('connected to queue ' + QUEUE_NAMES.orderQueue);
  }

  private static async registerConsumers() {
    await busChannel.consume(QUEUE_NAMES.processedOrderPaymentResultQueue, processedOrderResult);
  }
}
