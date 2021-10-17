export default class ServiceError extends Error {
    public code: string;

    constructor(message: string, code: string) {
        super(message);
        this.code = code;
        this.name = 'ServiceError';
    }
}
