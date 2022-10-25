import ProductModel from '@/models/product.model';
import { HttpException } from '@/exceptions/HttpException';
import { IProduct } from '@/interfaces/product.interface';

export default class ProductService {
  productModel = ProductModel;

  async getById(id: string): Promise<IProduct> {
    if (id == null) throw new HttpException(400, 'customer id is required');

    const findRecord = await this.productModel.findById(id);
    if (!findRecord) throw new HttpException(404, 'customer not found');

    return findRecord;
  }
}
