import { IReplyMessage } from '../IReplyMessage';
import { newsUseCases } from '@useCases/NewsUseCases';
import { getAnswer } from './naturalLanguage';
import { handleNewsPapper, isNewsMessage } from '@utils/message';
import { navigatorsType } from '@mytypes/navigators';

export async function onMessageAnswer(question) {
  return await getAnswer(question);
}

async function sendNewsMessage(client, message) {
  client.sendText(message.from, 'Aguarde... Estou buscando noticias para você');
  await getNewsAndAnswer(client, message, handleNewsPapper(message.body));
}

async function getNewsAndAnswer(client, message, newspapper: string) {
  const response = await newsUseCases.execute(navigatorsType[newspapper]);
 
  response.linkList
    .map(
      async (item) =>
          await client.sendLinkPreview(
            message.from,
            item.href,
            response.source,
          )
    );
}





export class ReplyMessage implements IReplyMessage {
  constructor() {}

  async onMessage(message, client) {
    if (isNewsMessage(message.body)) {
      try {
        await sendNewsMessage(client, message);
      } catch (ex) {
        console.log(ex);
        client.sendText(
          message.from,
          'Desculpa ! Não consegui buscar notícias. Você pode tentar novamente ?'
        );
      }
    } else {
      const messageToAnswer = await onMessageAnswer(message.body);
      //await client.sendText(message.from, messageToAnswer);

      const list = [
        {
          title: "Fontes disponiveis",
          rows: [
            {
              title: "BBB",
              description: " ",
            },
            {
              title: "Folha de São Paulo",
              description: " ",
            },
            {
              title: "O Povo",
              description: " ",
            },
            {
              title: "O Globo",
              description: " ",
            }
          ]
        },
       
      ];
    await client.sendListMenu(message.from, 'WhatsappNews', '#NoFakeNews',messageToAnswer, 'Escolher fonte', list)
    }
  }
}
