import { INavigator } from '../../INavigator';
import { IPuppeteer } from '@services/IPuppeteer';

export class GloboNavigator implements INavigator {

  constructor() {}
  async navigator(page) {
    const response = await page.evaluate(() => {
     
      var linkList = []
      
      function addPrincipalNews(){
        const mainLink = (document.querySelector('h1.teaser__title.headline__title a') as HTMLAnchorElement).href  
        linkList.push({ href: mainLink })
      }

      function addTwoPrincipalColunistNews(){
        const colunistLink = document.querySelectorAll('h1.people-teasers__card--title a')
        for(var i = 0 ; i < Math.min(2, colunistLink.length); i++)
        linkList.push({ href: (colunistLink[i] as HTMLAnchorElement).href } )
      }
      
      function addOtherNews(){
        const othersLinks = document.querySelectorAll('h1.teaser__title.small-teaser__title.teaser__title a')
        for(var i = 0 ; i < Math.min(othersLinks.length,7); i++)
        linkList.push({ href: (othersLinks[i] as HTMLAnchorElement).href } )
      }

      addPrincipalNews();
      addTwoPrincipalColunistNews();
      addOtherNews();

      return {
        linkList,
        source: 'Fonte : O Globo'
      }

    });

    return response;
  }
}
