import { ArticleLikesRepository, ArticlesRepository } from '@app/repositories';
import {Redis} from '@app/utils';

export default class ArticleService {
    private articleRepository: ArticlesRepository;
    private redis: Redis;

    public constructor(articleRepository: ArticlesRepository,
        redis: Redis) {
        this.articleRepository = articleRepository;
        this.redis = redis;
    }

    public getArticles = async (isPopular: string) => {
        let articles;
        // get the popular article from cache
        if(isPopular === 'true') {
            articles = await this.redis.getAll();
        } else {
            articles = await this.articleRepository.getAllArticles();
        }
        return articles;
    }
}