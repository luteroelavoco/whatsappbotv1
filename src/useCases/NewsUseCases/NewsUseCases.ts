import { INewsProvider } from '@providers/INewsProvider';
import { navigatorsType } from '@mytypes/navigators';

export class NewsUseCases {
  constructor(private newsProvider: INewsProvider) {}

  async execute(newspaper: navigatorsType) {
    return await this.newsProvider.getNews(newspaper);
  }
}
