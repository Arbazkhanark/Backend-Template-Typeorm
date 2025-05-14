import { User } from '../../../entities/user.entity';
import { UserRepository } from '../../../repositories/user.repository';

export const getUserProfile = async (userId: string): Promise<User> => {
  const user = await UserRepository.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};