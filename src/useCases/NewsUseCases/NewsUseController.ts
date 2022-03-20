import { Response, Request } from 'express';
import { navigatorsType } from '@mytypes/navigators';
import { NewsUseCases } from './NewsUseCases';

export class NewsUseController {
  constructor(private newsUseCases: NewsUseCases) {}

  async handle(req: Request, res: Response) {
    try {
      const { newspapper } = req.params;
      return res.json(await this.newsUseCases.execute(navigatorsType[newspapper]));
    } catch (err) {
      return res
        .status(400)
        .json({ message: err.message || 'Unexpected error. ' });
    }
  }
}
