import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../../entities/user.entity';
import { UserRepository } from '../../../repositories/user.repository';
import { env } from '../../../config/env';

export const signupService = async (
  username: string,
  email: string,
  password: string
): Promise<User> => {
  const existingUser = await UserRepository.findByEmail(email);
  if (existingUser) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User();
  user.username = username;
  user.email = email;
  user.password = hashedPassword;

  return UserRepository.save(user);
};

export const loginService = async (
  email: string,
  password: string
): Promise<string> => {
  const user = await UserRepository.findByEmail(email);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  return jwt.sign({ id: user.id, email: user.email }, env.JWT_SECRET, {
    expiresIn: '1h'
  });
};