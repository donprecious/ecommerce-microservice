import { busChannel } from '@messagebus/messagebus.connection';
import { logger } from '@/utils/logger';

import { ProcessedOrderPaymentResultMessage } from 'youverify-demo-ecommerce-shared-libaray';
import OrderService from '@/services/order.service';
import { log } from 'console';

export const processedOrderResult = queueData => {
  try {
    const message = JSON.parse(queueData?.content.toString()) as ProcessedOrderPaymentResultMessage;
    logger.info('message deserailized from order queue');
    logger.info(message);
    //todo call function to handle the result
    new OrderService().handleProcessedOrder(message);
    busChannel.ack(queueData!);
  } catch (err) {
    logger.error(JSON.stringify(err));
  }
};
