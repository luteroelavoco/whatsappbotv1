import * as venom from 'venom-bot';
import {venomOptions } from "@utils/venom-options"
import { IVenom } from '../IVenom';

export class Venom implements IVenom {
  public sessionName: string;
  public onMessage: Function;

  constructor(sessionName: string = 'ZapBot', onMessage: Function) {
    this.sessionName = sessionName;
    this.onMessage = onMessage;
  }

  
  async initialize() {
    venom
      .create({
        session: 'Lutero Bot',
        ...venomOptions
      })
      .then((client) => start(client))
      .catch((erro) => {
        console.log(erro);
      });

    const onMessage = this.onMessage;
    function start(client) {
      client.onMessage(async (message) => {
        onMessage(message, client);
        
      });
    }
  }
}
