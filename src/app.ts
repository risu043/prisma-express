import express from 'express';
import { loadMiddlewaresForWakaApp } from '@/loaders/express';

export const app = express();
loadMiddlewaresForWakaApp(app);
