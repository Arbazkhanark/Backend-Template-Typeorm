import { createClient } from 'redis';
import { env } from './env';

const redisClient = createClient({
  url: env.REDIS_URL
});

redisClient.on('error', (err) => console.error('Redis error:', err));

export const initializeRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Redis connected');
  } catch (error) {
    console.error('Redis connection error:', error);
  }
};

export { redisClient };