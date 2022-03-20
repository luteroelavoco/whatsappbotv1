import express from 'express';
import { trainNLP } from '@services/Inplementation/naturalLanguage';
import { whatsappBotProvider } from '@useCases/whatsappBotUseCases';
import router from './routers';

const app = express();

 trainNLP();
 whatsappBotProvider.start();

app.use(router);
const PORT = process.env.PORT || 5000;

app.listen(PORT)
