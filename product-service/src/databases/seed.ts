import ProductModel from '@/models/product.model';

export default class Seed {
  /**
   *
   */
  productModel = ProductModel;

  async initialize() {
    await this.seedProducts();
  }
  async seedProducts() {
    const findProduct = await this.productModel.findOne();
    if (findProduct) return;

    await this.productModel.insertMany([
      {
        name: 'Tecno Camon 18i, 4GB/128GB Memory - Blue',
        description: 'Night Portrait Video',
        price: '30000',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/47/3295051/1.jpg?2949',
      },
      {
        name: 'Danami Grace Fortified Hooded Short Gown- Pink',
        description: 'A nice simple dress with beautiful GRACE FORTFIED p',
        price: '7000',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/954079/1.jpg?2269',
      },
      {
        name: 'Multifunctional Springs Chest Muscles Developer',
        description: 'Springs Chest Arm Expander Hand Gripper Arm Pull Bar',
        price: '50100',
        imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/568777/1.jpg?0493',
      },
    ]);
  }
}
