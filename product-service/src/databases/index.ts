import { MONGODB_DATABASE_NAME, MONGODB_CONNECTION_URL } from '@config';

export const dbConnection = {
  url: `${MONGODB_CONNECTION_URL}/${MONGODB_DATABASE_NAME}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
