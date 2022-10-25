import { model, Schema, Document } from 'mongoose';
import { IPayment } from '@/interfaces/payment.interface';

const paymentModelSchema: Schema = new Schema<IPayment>({
  orderNumber: { type: 'string' },
  status: { type: 'string' },
  isSuccess: { type: 'boolean' },
  remark: { type: 'string' },
  referenceNo: { type: 'string' },
});

const PaymentModel = model<IPayment>('payments', paymentModelSchema);

export default PaymentModel;
