export interface IOrder {
  _id: string;
  totalAmount: number;
  customerId: string;
  items: IOrderItem[];
  status: string;
  remark: string;
}

export interface IOrderItem {
  _id: string;
  productId: string;
  productName: string;
  price: number;
  quanity: number;
}
