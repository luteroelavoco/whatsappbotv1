import { INavigator } from '../../INavigator';

export class FolhaNavigator implements INavigator {

  constructor() {}
  async navigator(page) {
    const response = await page.evaluate(() => {
     
      var linkList = []
      
      function addPrincipalNews(){
        const mainLink = (document.querySelector('a.c-main-headline__url') as HTMLAnchorElement).href  
        linkList.push({ href: mainLink })
      }

      function addTwoPrincipalColunistNews(){
        const colunistLink = document.querySelectorAll('a.c-list-links__url')
        for(var i = 0 ; i < Math.min(2, colunistLink.length); i++)
        linkList.push({ href: (colunistLink[i] as HTMLAnchorElement).href } )
      }
      
      function addOtherNews(){
        const othersLinks = document.querySelectorAll('a.c-headline__url')
        for(var i = 0 ; i < Math.min(othersLinks.length,7); i++)
        linkList.push({ href: (othersLinks[i] as HTMLAnchorElement).href } )
      }

      addPrincipalNews()
      addTwoPrincipalColunistNews()
      addOtherNews();

      return {
        linkList,
        source: 'Fonte : Folha de São Paulo'
      }
    });

    return response;
  }
}
