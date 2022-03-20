import { ReplyMessage } from '@services/Inplementation/replyMessage';
import { Venom } from '@services/Inplementation/venom';
import { WhatsappBotProvider } from '@providers/implemententations/WhatsappBotProvider';

const replyMessage = new ReplyMessage();
const venom = new Venom('WhatsappBotNews', replyMessage.onMessage);
const whatsappBotProvider = new WhatsappBotProvider(venom);

export { whatsappBotProvider };
