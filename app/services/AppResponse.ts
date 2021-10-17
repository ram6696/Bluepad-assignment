import { Response } from 'express';

export class AppResponse {
    public readonly SUCCESS = 200;
    public readonly NO_CONTENT = 204;
    public readonly BAD_REQUEST = 400;
    public readonly UNAUTHORIZED = 401;
    public readonly UNPROCESSABLE_ENTITY = 422;
    public readonly INTERNAL_SERVER_ERROR = 500;
    public readonly CONFLICT = 409;
    public readonly NOT_FOUND = 404;
    public readonly FORBIDDEN = 403;

    public success = (res: Response, data: any = {}) => {
        res.status(this.SUCCESS).send({
            status: 'SUCCESS',
            data,
        });
    }

    public error = (res: Response, code: string, message: string, description: string = '') => {
        res.status(this.INTERNAL_SERVER_ERROR).send({
            status: 'ERROR',
            data: {
                error: {
                    code,
                    message,
                    description,
                },
            },
        });
    }

    public failure = (res: Response, responseCode, errorCode: string, message: string, description: string = '') => {
        res.status(responseCode).send({
            status: 'FAILURE',
            data: {
                error: {
                    errorCode,
                    message,
                    description,
                },
            },
        });
    }

    public badRequest = (res: Response, code: string, message: string, description: string = '') => {
        res.status(this.BAD_REQUEST).send({
            status: 'FAILURE',
            data: {
                error: {
                    code,
                    message,
                    description,
                },
            },
        });
    }

    public notFound = (res: Response, code: string, message: string, description: string = '') => {
        res.status(this.NOT_FOUND).send({
            status: 'FAILURE',
            data: {
                error: {
                    code,
                    message,
                    description,
                },
            },
        });
    }

    public noContent = (res: Response) => {
        res.status(this.NO_CONTENT).send({});
    }

    public conflict = (res: Response, code: string, message: string, description: string = '') => {
        res.status(this.CONFLICT).send({
            status: 'ERROR',
            data: {
                error: {
                    code,
                    message,
                    description,
                },
            },
        });
    }

    public forbidden = (res: Response, code: string, message: string, description: string = '') => {
        res.status(this.FORBIDDEN).send({
            status: 'ERROR',
            data: {
                error: {
                    code,
                    message,
                    description,
                },
            },
        });
    }

    public unauthorized = (res: Response, code: string, message: string, description: string = '') => {
        res.status(this.UNAUTHORIZED).send({
            status: 'ERROR',
            data: {
                error: {
                    code,
                    message,
                    description,
                },
            },
        });
    }
}
