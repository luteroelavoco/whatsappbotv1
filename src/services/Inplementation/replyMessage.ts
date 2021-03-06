import axios from 'axios';
import {
  handleNewsPapper,
  isNewsAvalaible,
  isNewsMessage,
} from '@utils/message';
import { navigatorsType } from '@mytypes/navigators';
import { getAnswer } from './naturalLanguage';
import { IReplyMessage } from '../IReplyMessage';

const YoutubeLink = 'https://www.youtube.com/channel/UCnRkmcr5V0Ye5kh1hE5yL2Q';
const InstagramLink = 'https://www.instagram.com/luteroelavoco1';

const instance = axios.create({
  baseURL: 'https://newswebscrapingapi.vercel.app/api/news/',
  timeout: 30000,
});

export async function onMessageAnswer(question) {
  getAnswer(question);
}

async function getNewsAndAnswer(client, message, newspapper: string) {
  const newsType = navigatorsType[newspapper];
  instance
    .get(`${newsType}`)
    .then(async (response) => {
      const { data } = response;

      for (let i = 0; i < data.linkList.length; i++) {
        const item = data.linkList[i];
        client.sendLinkPreview(message.from, item.href, data.source);
      }
    })
    .catch((ex) => {
      console.log(ex);
      client.sendText(
        message.from,
        'Desculpa ! Não consegui buscar notícias. Você pode tentar novamente ?',
      );
    });
}
async function sendNewsMessage(client, message) {
  client.sendText(message.from, 'Aguarde... Estou buscando noticias para você');
  getNewsAndAnswer(client, message, handleNewsPapper(message.body));
}

export class ReplyMessage implements IReplyMessage {
  constructor() {}

  async onMessage(message, client) {
    if (isNewsMessage(message.body)) {
      if (isNewsAvalaible(message.body)) sendNewsMessage(client, message);
      else {
        client.sendText(
          message.from,
          'Esta fonte de notícia estará disponivel apenas em 15 de Abril de 2022. Acompanha meu canal do youtube e meu instagram para mais informações',
        );
        client.sendLinkPreview(
          message.from,
          InstagramLink,
          'Meu Instagram oficial',
        );
        client.sendLinkPreview(
          message.from,
          YoutubeLink,
          'Meu canal do youtube',
        );
      }
    } else {
      const messageToAnswer = await onMessageAnswer(message.body);
      const list = [
        {
          title: 'Fontes disponiveis',
          rows: [
            {
              title: 'BBB',
              description: ' ',
            },
            {
              title: 'Folha de São Paulo',
              description: ' ',
            },
            {
              title: 'O Povo',
              description: ' ',
            },
            {
              title: 'O Globo',
              description: ' ',
            },
            {
              title: 'CNN',
              description: ' ',
            },
            {
              title: 'Jornal de Angola',
              description: ' ',
            },
          ],
        },
      ];
      client.sendListMenu(
        message.from,
        'WhatsappNews',
        '#NoFakeNews',
        messageToAnswer,
        'Escolher fonte',
        list,
      );
    }
  }
}
