import { Request, Response } from 'express';
import { signupService, loginService } from './auth.service';

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const user = await signupService(username, email, password);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);
    res.status(200).json({ success: true, data: { token } });
  } catch (error) {
    res.status(401).json({ success: false, message: error });
  }
};