import { IController } from "../types/IController";
import { IHttpRequest, IHttpResponse } from "../types/IHttp";

export class ListUsersController implements IController {
    async handler(): Promise<IHttpResponse> {
        return {
            statusCode: 200,
            body: {
                users: ['Lista de usuarios']
            }
        }
    }
}
