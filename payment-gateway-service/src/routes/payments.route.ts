import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class PaymentRoute implements Routes {
  public path = '/v1/payments';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.post(`${this.path}`, validationMiddleware(CreateOrderDto, 'body'), this.orderController.createOrder);
  }
}

export default PaymentRoute;
