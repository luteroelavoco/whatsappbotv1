export function isNewsMessage(message: string) {
  let search = '' + message.toLocaleLowerCase();
  return search.includes('folha') || search.includes('povo') || search.includes('globo') || search.includes('bbb');
}

export function isNewsAvalaible(message: string) {
  let search = '' + message.toLocaleLowerCase();
  return search.includes('bbb');
}

export function handleNewsPapper(message: string) {
  message = message.toLowerCase();
  if(message.includes('povo'))
    return "povo";
  if(message.includes('globo'))
    return "globo";
  if(message.includes('bbb'))
    return "bbb";
  return "folha";
}
