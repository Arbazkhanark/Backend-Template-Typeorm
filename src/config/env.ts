import dotenv from 'dotenv';

dotenv.config();

export const env = {
  PORT: process.env.PORT || '3000',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/slack_plato',
  REDIS_URL: process.env.REDIS_URL || 'https://choice-puma-30260.upstash.io',
  REDIS_TOKEN:process.env.REDIS_TOKEN || 'XY0AAIncDIyZGViOGJhODg3Yjk0ZmNlOTQ5ZTJlZTRjMjlkMDA0OHAyMzAyNj',
  JWT_SECRET: process.env.JWT_SECRET || 'hgjhhjbkjhiuguytftrdtgjkhkj'
};