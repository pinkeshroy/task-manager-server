import { Request, Response } from 'express';
import { Task } from '../models/task.model';
import { redisClient } from '../config/redis';

export const createTask = async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  await redisClient.del('tasks');
  res.status(201).json(task);
};

export const getTask = async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

export const getTasks = async (req: Request, res: Response) => {
  const { status, dueDate, assignedTo } = req.query as Record<string, string>;
  const filter: any = {};
  if (status) filter.status = status;
  if (dueDate) filter.dueDate = { $lte: dueDate };
  if (assignedTo) filter.assignedTo = assignedTo;

  const tasks = await Task.find(filter);
  if (!Object.keys(req.query).length)
    await redisClient.setEx('tasks', 60, JSON.stringify(tasks));
  res.json(tasks);
};

export const updateTask = async (req: Request, res: Response) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!task) return res.status(404).json({ message: 'Task not found' });
  await redisClient.del('tasks');
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  await redisClient.del('tasks');
  res.json({ message: 'Task deleted' });
};
