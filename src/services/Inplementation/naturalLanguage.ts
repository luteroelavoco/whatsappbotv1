import { NlpManager } from 'node-nlp';

const language = 'pt';

const manager = new NlpManager({ languages: [language], forceNER: true });
// Adds the utterances and intents for the NLP

const botApresentation =
  'Seja bem-vindo ao Whatsapp News. Qual jornal você quer receber notícias ? ';

manager.addDocument(language, 'oi !', 'greetings.hello');
manager.addDocument(language, 'olá !', 'greetings.hello');
manager.addDocument(language, 'hello !', 'greetings.hello');
manager.addDocument(language, 'e aí ?!', 'greetings.hello');
manager.addDocument(language, 'oie !', 'greetings.hello');
manager.addDocument(language, 'Boa noite !', 'greetings.greeting.night');
manager.addDocument(language, 'Bom Dia !', 'greetings.greeting.day');
manager.addDocument(language, 'Boa tarde!', 'greetings.greeting.noon');
// Train also the NLG

manager.addAnswer(language, 'greetings.hello', 'Olá ! ' + botApresentation);

manager.addAnswer(
  language,
  'greetings.greeting.night',
  'Boa noite ! ' + botApresentation
);
manager.addAnswer(
  language,
  'greetings.greeting.day',
  'Bom dia ! ' + botApresentation
);
manager.addAnswer(
  language,
  'greetings.greeting.noon',
  'Boa tarde ! ' + botApresentation
);

// Train and save the model.

export async function trainNLP() {
  await manager.train();
  manager.save();
}

export async function getAnswer(question: string) {
  const response = await manager.process(language, question);
  return (
    (response && response.answer) ||
    'Seja bem-vindo ao Whatsapp News. Qual jornal você quer receber notícias ? '
  );
}
