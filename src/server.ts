import { trainNLP } from '@services/Inplementation/naturalLanguage';
import { whatsappBotProvider } from '@useCases/whatsappBotUseCases';

 trainNLP();
 whatsappBotProvider.start();

