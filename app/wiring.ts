import { ArticleController } from "./controllers/v1/ArticleController";
import ArticleLikesController from "./controllers/v1/ArticleLikesController";
import { ArticleLikesRepository, ArticlesRepository } from "./repositories";
import { AppResponse } from "./services/AppResponse";
import ArticleLikesService from "./services/ArticleLikesService";
import ArticleService from "./services/ArticleService";
import { Redis } from "./utils";

class Wiring {

    /**
     * Repositories
     */
    public articleLikesRepository = new ArticleLikesRepository();
    public articlesRepository = new ArticlesRepository();
    
    /**
     * Utils
     */
    public redis = new Redis();

    /**
     * Service
     */
    public articleLikesService = new ArticleLikesService(this.articleLikesRepository,
            this.articlesRepository,
            this.redis);
    public articleService = new ArticleService(this.articlesRepository,
            this.redis);

    /**
     * Controllers
     */
    public articleLikesController = new ArticleLikesController(this.articleLikesService);
    public articleController = new ArticleController(this.articleService);
}

export default new Wiring();