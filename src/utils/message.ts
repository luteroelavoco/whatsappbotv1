export function isNewsMessage(message: string) {
  let search = '' + message.toLocaleLowerCase();
  return search.includes('folha') || search.includes('povo') || search.includes('globo') || search.includes('bbb');
}

export function handleNewsPapper(message: string) {
  if(message.includes('O Povo'))
    return "povo";
  if(message.includes('O Globo'))
    return "globo";
  if(message.includes('BBB'))
    return "bbb";
  return "folha";
}
