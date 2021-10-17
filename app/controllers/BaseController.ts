import {AppResponse} from '@app/services/AppResponse';

export default class BaseController {
    protected appResponse: AppResponse;

    public constructor() {
        this.appResponse = new AppResponse();
    }
}
