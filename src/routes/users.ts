import express from 'express';
import { createUser, getUsers } from '../models/user';
import { body, validationResult } from 'express-validator';
import { DEFAULT_PAGE } from '../constants';

export const usersRouter = express.Router();

usersRouter.get('/', async (req: any, res: any) => {
  const page = req.query['page'] ? Number(req.query['page']) : DEFAULT_PAGE;
  const data = await getUsers(page);

  res.json(data);
});

usersRouter.post(
  '/',
  body('name').notEmpty().withMessage('Name is required'),
  body('score').notEmpty().withMessage('Score is required'),
  async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = await createUser(req.body.name, req.body.score);
    return res.status(201).json(data);
  }
);
