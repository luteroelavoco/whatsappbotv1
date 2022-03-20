import { navigatorFunctionType } from "@services/INavigator"
import { navigatorsType } from "@mytypes/navigators"
import { FolhaNavigator } from "./folhaNavigator"
import { GloboNavigator } from "./globoNavigator"
import { PovoNavigator } from "./povoNavigator"
import { GShowGloboNavigator } from "./bbbNavigator"


export class NewsNavigator  {

  public url: string
  public navigator: navigatorFunctionType 
  constructor(private newspapper: navigatorsType)  {
    const folhaNavigator = new FolhaNavigator()
    const povoNavigator = new PovoNavigator();
    const globoNavigator = new GloboNavigator();
    const gShowGloboNavigator = new GShowGloboNavigator();

    const navigators = {
        folha: {
            url: 'https://www1.folha.uol.com.br/',
            navigator: folhaNavigator.navigator,
        },
        povo: {
            url: 'https://www.opovo.com.br/',
            navigator: povoNavigator.navigator ,
        },
        globo: {
            url: 'https://oglobo.globo.com/',
            navigator: globoNavigator.navigator,
        },
        bbb: {
          url: 'https://gshow.globo.com/realities/bbb/bbb22/tempo-real/',
          navigator: gShowGloboNavigator.navigator,
      },
    }
    
    this.navigator = navigators[this.newspapper].navigator;
    this.url = navigators[this.newspapper].url

  }
  
}
