import { AppDataSource } from '../config/database';
import { Chat } from '../entities/chat.entity';

export const ChatRepository = AppDataSource.getMongoRepository(Chat).extend({
  async findByUserIds(senderId: string, receiverId: string): Promise<Chat[]> {
    return this.find({ where: { senderId, receiverId } });
  }
});