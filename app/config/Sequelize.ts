import { Article, ArticleView, ArticleLike, User } from '@app/models';
import {Sequelize} from 'sequelize-typescript';

const db = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

export const sequelize = new Sequelize({
    host,
    database: db,
    dialect: 'postgres',
    username,
    password,
    dialectOptions: {
        useUTC: true,
    },
});

sequelize.addModels([
    Article,
    ArticleView,
    ArticleLike,
    User,
]);

export default sequelize;
