import * as dotenv from 'dotenv';
dotenv.config();
import App from '@app/app';
const app = new App();
app.startHttpServer();
