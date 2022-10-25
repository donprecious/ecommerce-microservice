import { CardPayment } from '@/types/cardpayment.type';
import { PaymentProviderResponse } from '@/types/payment-provider-response.interface';

export interface ICardPaymentProvider {
  pay(cardPayment: CardPayment): PaymentProviderResponse;
}
