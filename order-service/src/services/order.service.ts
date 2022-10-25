import { ProcessOrderPaymentMessage } from './../../../youverify-demo-ecommerce-shared-libaray/lib/messages/order.d';
import CreateOrderDto from '@/dtos/createOrder.dto';
import { HttpException } from '@/exceptions/HttpException';
import { IOrder, IOrderItem } from '@/interfaces/order.interface';
import OrderModel from '@/models/order.model';
import MessageBus from '@/messagebus/messagebus.connection';
import { ProcessedOrderPaymentResultMessage, QUEUE_NAMES } from 'youverify-demo-ecommerce-shared-libaray';
import { logger } from '@/utils/logger';

export default class OrderService {
  public orderModel = OrderModel;

  async createOrder(createOrderDto: CreateOrderDto): Promise<IOrder> {
    //todo validate customer  ,
    //todo validate product
    
    const order = {
      customerId: createOrderDto.customerId,
      totalAmount: createOrderDto.totalAmount,
      status: 'pending', //OrderStatus.pending.toString(),
      remark: '',
      items: createOrderDto.items.map(a => {
        return {
          price: a.price,
          productId: a.productId,
          productName: a.productName,
          quanity: a.quanity,
        } as IOrderItem;
      }),
    } as IOrder;
    const result = (await this.orderModel.create(order)) as IOrder;
    result;
    const createOrder = {
      orderid: result._id,
      cardCsv: createOrderDto.paymentDetail.cardCsv,
      cardName: createOrderDto.paymentDetail.cardName,
      cardNumber: createOrderDto.paymentDetail.cardNumber,
    } as ProcessOrderPaymentMessage;
    await MessageBus.Send(QUEUE_NAMES.orderQueue, createOrder);
    return result;
  }

  async handleProcessedOrder(order: ProcessedOrderPaymentResultMessage) {
    const findOrder = await this.orderModel.findById(order.orderId);
    if (!findOrder) {
      logger.error('cannot find order with id ' + order.orderId);
      logger.info(JSON.stringify(order));
      throw new Error('error! cannot find order: ' + JSON.stringify(order));
    }
    findOrder.status = order.isSuccess ? 'success' : 'failed';
    findOrder.remark = order.remark;
    await findOrder.save();
    //todo implement notification to customer on his order status
  }
}
