import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import ProductController from '@/controllers/order.controller';
import CreateOrderDto from '@/dtos/createOrder.dto';
import OrderController from '@/controllers/order.controller';

class OrderRoute implements Routes {
  public path = '/v1/orders';
  public router = Router();
  public orderController = new OrderController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.post(`${this.path}`, validationMiddleware(CreateOrderDto, 'body'), this.orderController.createOrder);
    this.router.post(`${this.path}`, this.orderController.createOrder);
  }
}

export default OrderRoute;
