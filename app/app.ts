import * as dotenv from 'dotenv';

dotenv.config();
import {sequelize} from '@app/config/Sequelize';
import { ERROR_CODES, ERROR_MESSAGES } from '@app/constants/AppConstants';
import {Routes} from '@app/routes/routes';
import { AppResponse } from '@app/services/AppResponse';
import * as bodyParser from 'body-parser';
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import redis from 'redis';

export default class App {
    public app: express.Application;
    public routes: Routes = new Routes();

    constructor() {
        this.app = express();
        this.postgresSetup();
        this.config();
        this.processAuthHeader();
        this.routes.routes(this.app);
        this.swaggerSetup();
        this.errorHandler();
        this.initializeRedis();
    }

    public initializeRedis = () => {
        const client = redis.createClient();
        client.on("error", function(error){
            console.error(error);
        })
    }

    public startHttpServer = () => {
        this.app.listen(process.env.LISTEN_PORT, () => {
            console.log('Express server listening on port ' + process.env.LISTEN_PORT);
        });
    }

    private postgresSetup(): void {
        sequelize
            .authenticate()
            .then(() => {
                console.log('Connected to postgres');
                this.app.emit('PostgresConnected');
            })
            .catch((err) => {
                console.error(err);
            });
    }

    private config(): void {
        this.app.use(bodyParser.json());
    }

    private swaggerSetup(): void {
        const swaggerDefinition = {
            info: {
                title: 'Bluepad Assignment Swagger',
                version: '1.0.0',
                description: 'API documentation of Bluepad Assignment',
            },
            host: process.env.APP_HOST,
            basePath: '/',
        };
        const options = {
            swaggerDefinition,
            apis: ['**/*Controller.ts'],
        };
        const swaggerSpec = swaggerJSDoc(options);
        this.app.get('/content_service/docs', (req, res) => {
            res.send(swaggerSpec);
        });
    }

    private errorHandler(): void {
        this.app.use((err, req, res, next) => {
            if (err) {
                const appResponse = new AppResponse();

                console.error(err.stack);

                appResponse.error(res,
                    ERROR_CODES.ERR_INTERNAL_SERVER_ERROR,
                    ERROR_MESSAGES.ERR_INTERNAL_SERVER_ERROR,
                    err.message);
            }
        });
    }

    private processAuthHeader(): void {
        // decode authInfo header from request if it exists
        this.app.use((req: any , res: any, next: any) => {
            if (req.headers.authinfo !== undefined) {
                req.user = JSON.parse(req.headers.authinfo);
            } else {
                req.user = null;
            }
            next();
        });
    }
}
