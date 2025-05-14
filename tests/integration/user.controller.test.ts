import request from 'supertest';
import app from '../../src/app';
import { UserRepository } from '../../src/repositories/user.repository';

jest.mock('../../src/repositories/user.repository');

describe('User Controller', () => {
  it('GET /api/v1/user/profile - should return user profile', async () => {
    const mockUser = { id: '1', username: 'test', email: 'test@example.com' };
    (UserRepository.findById as jest.Mock).mockResolvedValue(mockUser);

    const token = 'mocked_jwt_token'; // Mock JWT token
    const response = await request(app)
      .get('/api/v1/user/profile')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual(mockUser);
  });
});