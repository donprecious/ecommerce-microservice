import ProductService from '@/services/product.service';
import { NextFunction, Request, Response } from 'express';

export default class ProductController {
  productService = new ProductService();
  public byProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId: string = req.params.id;
      const product = await this.productService.getById(productId);
      res.status(200).json({ data: product, message: 'success' });
    } catch (error) {
      next(error);
    }
  };
}
