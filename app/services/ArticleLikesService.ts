import { ERROR_CODES } from '@app/constants/AppConstants';
import RepositoryError from '@app/errors/RepositoryError';
import { ArticleLikesRepository, ArticlesRepository } from '@app/repositories';
import {Redis} from '@app/utils';

export default class ArticleLikesService {
    private articleLikesRepository: ArticleLikesRepository;
    private articleRepository: ArticlesRepository;
    private redis: Redis;

    public constructor(articleLikesRepository: ArticleLikesRepository,
        articleRepository: ArticlesRepository,
        redis: Redis) {
        this.articleRepository = articleRepository;
        this.articleLikesRepository = articleLikesRepository;
        this.redis = redis;
    }

    public likeArticle = async (articleId: number, userId: number) => {
        try {
            // Create the article like in article like table
            const like = await this.articleLikesRepository.create({
                articleId, userId,
            });
            // increment the likes count in the articles table
            await this.articleRepository.incrementLikesCount(articleId);
    
            // Update the cache to have the popular articles likes
            // get the popular articles by likes count(Top 2 articles)
            const articles = await this.articleRepository.findPopularArticles();
            console.log(articles)
            await this.redis.flushDB();
            // storing the popular articles in the redis which will always be updated on like
            articles.map(article => {
                this.redis.set(article.id, JSON.stringify(article))
            })
            return like;
        } catch (error) {
            if (error instanceof RepositoryError) {
                if (error.code === ERROR_CODES.ERR_UNIQUE_CONSTRAINT_VIOLATION) {
                    const like = await this.articleLikesRepository.findOne({articleId, userId}, true);
                    if (like.deletedAt) {
                        await this.articleRepository.incrementLikesCount(articleId);
                        return like.restore();
                    } else {
                        return like;
                    }
                }
            }
            throw error;
        }
    }

    public unlikeArticle = async (articleId: number, userId: number) => {
        // Delete the article like in article like table
        const result = await this.articleLikesRepository.softDelete({
            articleId, userId,
        });

        if (result) {
            // decrement the likes count in the articles table
            await this.articleRepository.decrementLikesCount(articleId);
        }

        return result;
    }
}