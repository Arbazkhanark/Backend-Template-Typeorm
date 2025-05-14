import { getUserProfile } from '../../src/api/v1/user/user.service';
import { UserRepository } from '../../src/repositories/user.repository';

jest.mock('../../src/repositories/user.repository');

describe('User Service', () => {
  it('should return user profile if user exists', async () => {
    const mockUser = { id: '1', username: 'test', email: 'test@example.com' };
    (UserRepository.findById as jest.Mock).mockResolvedValue(mockUser);

    const result = await getUserProfile('1');
    expect(result).toEqual(mockUser);
    expect(UserRepository.findById).toHaveBeenCalledWith('1');
  });

  it('should throw error if user not found', async () => {
    (UserRepository.findById as jest.Mock).mockResolvedValue(null);

    await expect(getUserProfile('1')).rejects.toThrow('User not found');
  });
});