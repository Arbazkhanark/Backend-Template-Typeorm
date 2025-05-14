import dotenv from 'dotenv';

dotenv.config();

export const env = {
  PORT: process.env.PORT || '3000',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/connect-sphere',
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_here'
};