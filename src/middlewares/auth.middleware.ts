import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env';
import { User } from '../models/user';
import { JwtPayload } from 'jsonwebtoken';

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    try {
      if (!token) throw new Error('Token is missing');
      const decoded = jwt.verify(token as string, JWT_SECRET) as JwtPayload;
      const user = await User.findById(decoded.id).select('-password');
      if (!user) throw new Error('User not found');
      // @ts-ignore
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};
