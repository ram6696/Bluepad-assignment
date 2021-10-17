import ArticleService from "@app/services/ArticleService";
import BaseController from "../BaseController";
import {Response} from 'express';

export class ArticleController extends BaseController {
    private articleService: ArticleService;

    public constructor(articleService: ArticleService) {
        super();
        this.articleService = articleService;
    }

    public getArticles = async (req: any, res: Response, next) => {
        try {
            const isPopular = req.query.isPopular;
            const articles = await this.articleService.getArticles(isPopular);
            return this.appResponse.success(res, {articles});
        } catch (error) {
            throw error;
        }
    }
}