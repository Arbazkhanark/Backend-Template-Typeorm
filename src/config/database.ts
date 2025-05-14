// import { DataSource } from 'typeorm';
// import { env } from './env';
// import { User } from '../entities/user.entity';
// import { Chat } from '../entities/chat.entity';
// import { Room } from '../entities/room.entity';
// import { Friend } from '../entities/friend.entity';
// import logger from '../utils/logger';

// export const AppDataSource = new DataSource({
//   type: 'mongodb',
//   url: env.MONGO_URI,
//   entities: [User, Chat, Room, Friend],
//   synchronize: true, // Development ke liye true, production mein false
//   logging: true
// });

// export const initializeDatabase = async () => {
//   try {
//     await AppDataSource.initialize();
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };







import { DataSource } from 'typeorm';
import { env } from './env';
import { User } from '../entities/user.entity';
import { Chat } from '../entities/chat.entity';
import { Room } from '../entities/room.entity';
import { Friend } from '../entities/friend.entity';
import logger from '../utils/logger';

export const AppDataSource = new DataSource({
  type: 'mongodb',
  url: env.MONGO_URI,
  entities: [User, Chat, Room, Friend],
  synchronize: true, // Development ke liye true, production mein false
  logging: true,
});

export const initializeDatabase = async () => {
  const functionName = 'initializeDatabase';

  try {
    await AppDataSource.initialize();
    logger.info('MongoDB connected successfully', functionName);
  } catch (error: any) {
    logger.error(`MongoDB connection failed: ${error.message}`, functionName);
    process.exit(1);
  }
};
