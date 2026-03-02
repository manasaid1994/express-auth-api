import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/env';

export const generateToken = (userId: string): string => {
  return jwt.sign(
    { id: userId },
    JWT_SECRET as string,
    { expiresIn: JWT_EXPIRES_IN } as any
  );
};
