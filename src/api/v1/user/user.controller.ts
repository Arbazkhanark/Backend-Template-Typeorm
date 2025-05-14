import { Request, Response } from 'express';
import { getUserProfile } from './user.service';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const profile = await getUserProfile(userId);
    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};