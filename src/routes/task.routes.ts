import { Router } from 'express';
import { body, param } from 'express-validator';
import {
  createTask,
  getTask,
  getTasks,
  updateTask,
  deleteTask
} from '../controllers/task.controller';
import { authenticate } from '../middleware/auth.middleware';
import { authorize } from '../middleware/role.middleware';
import { validate } from '../middleware/validate.middleware';
import { cacheTasks } from '../middleware/cache.middleware';

const router = Router();

router.use(authenticate);

router.post('/', [body('title').notEmpty().isString()], validate, createTask);

router.get('/', cacheTasks, getTasks);

router.get('/:id', [param('id').isMongoId()], validate, getTask);

router.put(
  '/:id',
  [param('id').isMongoId(), body('title').optional().isString()],
  validate,
  updateTask
);

router.delete('/:id', [param('id').isMongoId()], validate, authorize(['admin']), deleteTask);

export default router;
