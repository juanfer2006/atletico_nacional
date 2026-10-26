import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { env } from './infrastructure/config/env.js';

export const createApp = (): Application => {
  const app = express();

  // Middlewares esenciales
  app.use(
    cors({
      origin: env.FRONTEND_URL,
      credentials: true,
    })
  );
  app.use(express.json());

  // Health check / ruta base
  app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).json({
      status: 'ok',
      service: 'Tienda Verdolaga API',
      timestamp: new Date().toISOString(),
    });
  });

  return app;
};
