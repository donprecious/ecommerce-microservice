import { CardPayment } from '@/types/cardpayment.type';
import { PaymentProviderResponse } from '@/types/payment-provider-response.interface';
import { ICardPaymentProvider } from './ICardPayment.provider';
import { v4 as uuidv4 } from 'uuid';

export class FakeCardProvider implements ICardPaymentProvider {
  pay(cardPayment: CardPayment): PaymentProviderResponse {
    const reference = uuidv4();
    if (cardPayment.cvv == '000') {
      //fake success
      return {
        isSuccess: true,
        status: 'success',
        responseMessage: 'payment completed',
        referenceNo: reference,
      } as PaymentProviderResponse;
    }
    return {
      isSuccess: false,
      status: 'failed',
      responseMessage: 'Issue with payment card, try another card',
      referenceNo: reference,
    } as PaymentProviderResponse;
  }
}
