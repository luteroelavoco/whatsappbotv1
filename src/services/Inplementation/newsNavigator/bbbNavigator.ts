import { INavigator } from '../../INavigator';

export class GShowGloboNavigator implements INavigator {
  constructor() {}

  async navigator(page) {
    
    await page
    .waitForSelector('.post-materia-text')
  

    const response = await page.evaluate(() => {
      const linkList = [];


      function addPrincipalNews(){
        const colunistLink = document.querySelectorAll('.post-materia-text')
        for(var i = 0 ; i < colunistLink.length; i++)
        linkList.push({ href: (colunistLink[i] as HTMLAnchorElement).href } )
      }
      addPrincipalNews();

      return {
        linkList,
        source: 'Fonte : gshow Globo',
      };
    });

    return response;
  }


}
