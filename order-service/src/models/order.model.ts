import { model, Schema, Document } from 'mongoose';
import { IOrder, IOrderItem } from '@/interfaces/order.interface';

const itemOrderSchema: Schema = new Schema<IOrderItem>({
  price: { type: 'number' },
  productId: { type: 'string' },
  productName: { type: 'string' },
  quanity: { type: 'number' },
});
const orderSchema: Schema = new Schema<IOrder>({
  customerId: { type: 'string' },
  totalAmount: { type: 'number' },
  items: [itemOrderSchema],
  remark: { type: 'string' },
  status: { type: 'string' },
});

const OrderModel = model<IOrder>('orders', orderSchema);

export default OrderModel;
