
import { ListUsersController } from "../../application/controllers/ListUsersController";
import { UpdateUserController } from "../../application/controllers/UpdateUserController";
import { slsHandlerAdapter } from "../middy/slsHandlerAdapter";
import { makeRouteHandler } from "../middy/makeRouterHandler";

export const handler = makeRouteHandler([
    {
        path: '/users',
        method: 'GET',
        handler: slsHandlerAdapter(new ListUsersController())
    },
    {
        path: '/users/{userId}',
        method: 'PUT',
        handler: slsHandlerAdapter(new UpdateUserController())
    }
]);
