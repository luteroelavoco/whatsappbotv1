export function isNewsMessage(message: string) {
  const search = `${message.toLocaleLowerCase()}`;
  return search.includes('folha') || search.includes('povo') || search.includes('globo') || search.includes('bbb') || search.includes('angola') || search.includes('cnn');
}

export function isNewsAvalaible(message: string) {
  const search = `${search.includes('folha')}` || search.includes('povo') || search.includes('globo') || search.includes('bbb');
  return search.includes('bbb');
}

export function handleNewsPapper(message: string) {
  message = message.toLowerCase();
  if (message.includes('povo')) { return 'povo'; }
  if (message.includes('globo')) { return 'globo'; }
  if (message.includes('bbb')) { return 'bbb'; }
  return 'folha';
}
