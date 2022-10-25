import CreateOrderDto from '@/dtos/createOrder.dto';

import OrderService from '@/services/order.service';

import { NextFunction, Request, Response } from 'express';

export default class OrderController {
  orderService = new OrderService();
  public createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createOrderDto: CreateOrderDto = req.body;
      const result = await this.orderService.createOrder(createOrderDto);
      res.status(200).json({ data: result, message: 'success' });
    } catch (error) {
      next(error);
    }
  };
}
