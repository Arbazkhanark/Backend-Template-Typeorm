import app from './app';
import { env } from './config/env';
import { initializeDatabase } from './config/database';
import { initializeRedis } from './config/redis';

const startServer = async () => {
  await initializeDatabase();
  await initializeRedis();

  app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
  });
};

startServer();