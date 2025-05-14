// import { createClient } from 'redis';
// import { env } from './env';

// const redisClient = createClient({
//   url: env.REDIS_URL
// });

// redisClient.on('error', (err) => console.error('Redis error:', err));

// export const initializeRedis = async () => {
//   try {
//     await redisClient.connect();
//     console.log('Redis connected');
//   } catch (error) {
//     console.error('Redis connection error:', error);
//   }
// };

// export { redisClient };










// src/config/redis.ts
import { Redis } from '@upstash/redis';
import logger from '../utils/logger';
import dotenv from 'dotenv';

dotenv.config();

class RedisClient {
  private static instance: RedisClient;
  public client: Redis;

  private constructor() {
    const url = process.env.REDIS_URL;
    const token = process.env.REDIS_TOKEN;

    if (!url || !token) {
      const errorMsg = 'Redis configuration missing: REDIS_URL or REDIS_TOKEN not set';
      logger.error(errorMsg, 'RedisClient.constructor');
      throw new Error(errorMsg);
    }

    this.client = new Redis({ url, token });
  }

  public static getInstance(): RedisClient {
    if (!RedisClient.instance) {
      RedisClient.instance = new RedisClient();
    }
    return RedisClient.instance;
  }

  public async checkConnection(): Promise<void> {
    const functionName = 'RedisClient.checkConnection';
    try {
      await this.client.ping();
      logger.info('Connected to Upstash Redis successfully', functionName);
    } catch (error: any) {
      logger.error('Failed to connect to Upstash Redis', functionName, undefined, {
        error: error.message,
      });
      throw error;
    }
  }
}

// Create singleton instance
const redisClient = RedisClient.getInstance();
export const redis = redisClient.client;
export { redisClient };
