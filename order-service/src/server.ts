import App from '@/app';

import IndexRoute from '@routes/index.route';

import validateEnv from '@utils/validateEnv';
import ProductRoute from './routes/order.route';
import CustomerRoute from './routes/order.route';

validateEnv();

const app = new App([new IndexRoute(), new CustomerRoute(), new ProductRoute()]);

app.listen();
