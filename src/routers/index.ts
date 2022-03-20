import express from 'express';
import { newsController } from '@useCases/NewsUseCases';

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ hello: 'Bem Vindo ao Whatsapp News ' });
});

router.get('/news/:newspapper', async (req, res) => {
  return newsController.handle(req, res);
});

export default router;
