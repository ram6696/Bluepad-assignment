import BaseController from '@app/controllers/BaseController';
import ArticleLikesService from '@app/services/ArticleLikesService';
import {Response} from 'express';

export class ArticleLikesController extends BaseController {
    private articleLikesService: ArticleLikesService;

    public constructor(articleLikesService: ArticleLikesService) {
        super();
        this.articleLikesService = articleLikesService;
    }

    /**
     * @swagger
     *
     * /api/v1/articles/:articleId/likes:
     *   put:
     *     summary: Like an article
     *     description: Like an article
     *     tags:
     *        - Likes
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: articleId
     *         in: path
     *         type: number
     *         required: true
     *     responses:
     *       200:
     *         description: ok
     */
    public put = async (req: any, res: Response, next) => {
        try {
            const articleId = parseInt(req.params.articleId, 10)
            const like = await this.articleLikesService.likeArticle(articleId, req.user.id);
            return this.appResponse.success(res, {like});
        } catch (error) {
            next(error);
        }
    }

    /**
     * @swagger
     *
     * /api/v1/articles/:articleId/likes:
     *   delete:
     *     summary: Unlike an article
     *     description: Unlike an article
     *     tags:
     *        - Likes
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: articleId
     *         in: path
     *         type: number
     *         required: true
     *     responses:
     *       200:
     *         description: ok
     */
    public delete = async (req: any, res: Response, next) => {
        try {
            const articleId = parseInt(req.params.articleId, 10)
            await this.articleLikesService.unlikeArticle(articleId, req.user.id);
            return this.appResponse.success(res, {});
        } catch (error) {
            next(error);
        }
    }
}

export default ArticleLikesController;
