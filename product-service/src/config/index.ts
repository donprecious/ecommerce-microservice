import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, MONGODB_CONNECTION_URL, MONGODB_DATABASE_NAME, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;
