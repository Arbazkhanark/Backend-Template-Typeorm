import app from './app';
import { env } from './config/env';
import { initializeDatabase } from './config/database';
// import { initializeRedis } from './config/redis';
import { redisClient } from './config/redis';


const startServer = async () => {
  await initializeDatabase();
//   await initializeRedis();
    await redisClient.checkConnection();

  app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
  });
};

startServer();