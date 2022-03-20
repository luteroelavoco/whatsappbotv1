const venom = require('venom-bot');


venom
  .create({
    session: 'LuteroBot',
    multidevice: false,
    useChrome: false, browserArgs: ['--no-sandbox']
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage(async (message) => {
    if (message.body.includes('Olá') && message.isGroupMsg === false) {
      client.sendText(message.from, 'olá! eu sou o Lutero Bot');
    }
    if (message.body.includes('Pesquisar :') && message.isGroupMsg === false) {
      const search = message.body.split(':')[1];
      client.sendText(message.from, 'Aguarde...');
    }else{
      client.sendText(message.from, 'Comando inválido\nComando válido = Pesquisar : O que vc quer pesquisar');
    }
  });
}
