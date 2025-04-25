import { Request, Response, NextFunction } from 'express';
import { redisClient } from '../config/redis';

export const cacheTasks = async (req: Request, res: Response, next: NextFunction) => {
  if (Object.keys(req.query).length) return next();
  const cached = await redisClient.get('tasks');
  if (cached) return res.json(JSON.parse(cached));
  next();
};
