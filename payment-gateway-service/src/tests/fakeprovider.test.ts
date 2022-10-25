import { CardPayment } from '../types/cardpayment.type';
import { FakeCardProvider } from '../providers/FakeCardPayment.provider';

test('can process payment successfully', () => {
  const fakeCardProcessor = new FakeCardProvider();
    const result = fakeCardProcessor.pay({ cvv: '000' } as CardPayment);
    expect(result.isSuccess).toBeTruthy();
});
