import wiring from '@app/wiring';

export class Routes {

    public routes(app: any): void {
        /**
         * Article Likes
         */
        app.put('/api/v1/articles/:articleId/likes', wiring.articleLikesController.put);
        app.delete('/api/v1/articles/:articleId/likes', wiring.articleLikesController.delete);

        /**
         * Articles
         */
        app.get('/api/v1/articles', wiring.articleController.getArticles);
    }
}