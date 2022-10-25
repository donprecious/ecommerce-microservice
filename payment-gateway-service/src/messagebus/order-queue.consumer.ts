import { logger } from '@/utils/logger';
import { busChannel } from './messagebus.connection';
import PaymentService from '@/services/payment.service';
import { ProcessOrderPaymentMessage } from 'youverify-demo-ecommerce-shared-libaray';

export const orderQueueConsumer = queueData => {
  const message = JSON.parse(queueData?.content.toString());
  console.log(message);
  const data = message as ProcessOrderPaymentMessage;
  logger.info('message deserailized from order queue');
  logger.info(message);
  new PaymentService().makePayment(data);

  busChannel.ack(queueData!);
};
