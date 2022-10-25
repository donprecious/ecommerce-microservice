export interface ProcessOrderPaymentMessage {
  orderid: string;
  cardNumber: string;
  cardCsv: string;
  cardName: string;
}

export interface ProcessedOrderPaymentResultMessage{
  isSuccess: true, 
  orderId: string, 
  remark: string,
  referenceNo: string;
}