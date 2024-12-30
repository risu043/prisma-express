import express from 'express';
import { getRandomWakas, searchWakas } from '@/models/waka';
import { DEFAULT_AUTHOR, DEFAULT_FILTER, DEFAULT_PAGE } from '@/constants';

export const wakasRouter = express.Router();

wakasRouter.get('/search', async (req: any, res: any) => {
  const filter = req.query['filter']
    ? String(req.query['filter'])
    : DEFAULT_FILTER;
  const author = req.query['author']
    ? String(req.query['author'])
    : DEFAULT_AUTHOR;
  const page = req.query['page'] ? Number(req.query['page']) : DEFAULT_PAGE;

  const data = await searchWakas(filter, author, page);

  res.json(data);
});

wakasRouter.get('/', async (req: any, res: any) => {
  const data = await getRandomWakas();

  res.json(data);
});
