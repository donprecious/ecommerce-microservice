import { model, Schema, Document } from 'mongoose';
import { IProduct } from '@/interfaces/product.interface';

const productSchema: Schema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const ProductModel = model<IProduct>('products', productSchema);

export default ProductModel;
