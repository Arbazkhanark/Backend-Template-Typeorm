import { Response } from 'express';

export const sendResponse = (
  res: Response,
  status: number,
  success: boolean,
  data: any,
  message?: string
) => {
  res.status(status).json({ success, data, message });
};