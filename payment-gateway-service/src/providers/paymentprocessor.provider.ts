import { CardPayment } from '@/types/cardpayment.type';
import { PaymentProviderResponse } from '@/types/payment-provider-response.interface';
import { ICardPaymentProvider } from './ICardPayment.provider';

export class PaymentProcessorProvider {
  _cardPaymentProvider: ICardPaymentProvider;
  constructor(cardPaymentProvider: ICardPaymentProvider) {
    this._cardPaymentProvider = cardPaymentProvider;
  }
  setCardProvider(cardPaymentProvider: ICardPaymentProvider) {
    this._cardPaymentProvider = cardPaymentProvider;
  }

  makePayment(cardPayment: CardPayment): PaymentProviderResponse {
    return this._cardPaymentProvider.pay(cardPayment);
  }
}
