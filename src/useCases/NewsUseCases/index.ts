
import { NewsProvider } from '@providers/implemententations/NewsProvider';
import { NewsUseCases } from './NewsUseCases';
import { NewsUseController } from './NewsUseController';


const newsProvider = new NewsProvider();
const newsUseCases = new NewsUseCases(newsProvider);
const newsController = new NewsUseController(newsUseCases);

export { newsController, newsUseCases };
