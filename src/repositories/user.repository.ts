import { AppDataSource } from '../config/database';
import { User } from '../entities/user.entity';

export const UserRepository = AppDataSource.getMongoRepository(User).extend({
  async findByEmail(email: string): Promise<User | null> {
    return this.findOne({ where: { email } });
  },

  async findById(id: string): Promise<User | null> {
    return this.findOne({ where: { id } });
  }
});