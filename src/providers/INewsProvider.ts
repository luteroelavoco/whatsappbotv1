import { News } from '@entities/news';
import { navigatorsType } from '@types/navigators';

export interface INewsProvider {
  getNews(newspapper: navigatorsType): Promise<News>;
}
