import { HttpException } from '@/exceptions/HttpException';
import { IPayment } from '@/interfaces/payment.interface';
import MessageBus from '@/messagebus/messagebus.connection';
import PaymentModel from '@/models/payment.model';
import { FakeCardProvider } from '@/providers/FakeCardPayment.provider';
import { PaymentProcessorProvider } from '@/providers/paymentprocessor.provider';
import { ProcessedOrderPaymentResultMessage, ProcessOrderPaymentMessage, QUEUE_NAMES } from 'youverify-demo-ecommerce-shared-libaray';

export default class PaymentService {

  paymentModel = PaymentModel;
  paymentProcessor = new PaymentProcessorProvider(new FakeCardProvider());


  async makePayment(order: ProcessOrderPaymentMessage) {
    const paymentResult = this.paymentProcessor.makePayment({
      cvv: order.cardCsv,
      name: order.cardName,
      number: order.cardNumber,
    });

    const paymentRecord = {
      isSuccess: paymentResult.isSuccess,
      orderNumber: order.orderid,
      remark: paymentResult.responseMessage,
      referenceNo: paymentResult.referenceNo,
      status: paymentResult.status,
    } as IPayment;
    const payment = this.paymentModel.create(paymentRecord);

    const queueData = {
      isSuccess: paymentResult.isSuccess,
      referenceNo: paymentResult.referenceNo,
      remark: paymentResult.responseMessage,
      orderId: order.orderid,
    } as ProcessedOrderPaymentResultMessage;
    await MessageBus.Send(QUEUE_NAMES.processedOrderPaymentResultQueue, queueData);
  }
}
