import { Article } from '@app/models/Article';
import { Op, Sequelize } from 'sequelize';

export class ArticlesRepository {

    public incrementLikesCount = (articleId) => {
        return Article.increment('noOfLikes', { by: 1, where: { id: articleId }});
    }

    public decrementLikesCount = (articleId) => {
        return Article.increment('noOfLikes', { by: -1, where: { id: articleId }});
    }

    public findPopularArticles = async () => {
        return Article.findAll({
            where: {
                noOfLikes: { 
                    [Sequelize.Op.in]: [Sequelize.literal('SELECT MAX(no_of_likes) FROM articles GROUP BY id')]
                }
            },
            raw: true,
            order: [['noOfLikes', 'DESC']],
            limit: 2,
          });
    }

    public getAllArticles = async () => {
        return Article.findAll();
    }
}