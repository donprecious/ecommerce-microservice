import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
export default class CreateOrderDto {
  @IsNumber()
  totalAmount: number;
  @IsNotEmpty()
  customerId: string;

  @ValidateNested()
  @IsNotEmpty()
  items: OrderItemDto[];

  @ValidateNested()
  @IsNotEmpty()
  paymentDetail: PaymentDetail;
}
class OrderItemDto {
  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  productName: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  quanity: number;
}

class PaymentDetail {
  @IsNotEmpty()
  cardNumber: string;
  @IsNotEmpty()
  cardCsv: string;
  @IsNotEmpty()
  cardName: string;
}
