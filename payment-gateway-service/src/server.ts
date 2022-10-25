import App from '@/app';

import IndexRoute from '@routes/index.route';

import validateEnv from '@utils/validateEnv';
import PaymentRoute from './routes/payments.route';

validateEnv();

const app = new App([new IndexRoute(), new PaymentRoute()]);

app.listen();
