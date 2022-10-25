export interface IPayment {
  _id: string;
  orderNumber: string;
  status: string;
  isSuccess: boolean;
  remark: string;
  referenceNo: string;
}
