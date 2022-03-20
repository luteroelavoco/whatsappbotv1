import { News } from '@entities/news';
import { Puppeteer } from '@services/Inplementation/puppeteer';
import { INewsProvider } from '@providers/INewsProvider';
import { NewsNavigator } from '@services/Inplementation/newsNavigator';
import { navigatorsType } from '@mytypes/navigators';

export class NewsProvider implements INewsProvider {
  constructor() {}

  async getNews(newspapper: navigatorsType): Promise<News> {
    const newsNavigator = new NewsNavigator(newspapper);
    const puppeteer = new Puppeteer(newsNavigator.url, newsNavigator.navigator);

    return await puppeteer.extractData();
  }
}
