import { userInfo } from "os";
import { makeHandler } from "./middy/makeHandler";
import { makeRouteHandler } from "./middy/makeRouterHandler";

const listUsersHandler = makeHandler(async () => {
    return {
        statusCode: 200,
        body: {
            users: ['Lista de usuarios']
        }
    }
})

const updateUsersHandler = makeHandler(async (request) => {
    return {
        statusCode: 200,
        body:{
            userId: request.pathParameters?.userId
        }
    }
})

const listUserPosts= makeHandler(async () => {
    return {
        statusCode: 200,
        body: {
            users: ['Lista de posts do usuario']
        }
    }
})

const getUserPost= makeHandler(async (request) => {
    return {
        statusCode: 200,
        body: {
            userId: request.pathParameters?.userId,
            post: request.pathParameters?.postId
        }
    }
})

export const handler = makeRouteHandler([
    {
        path: '/users',
        method: 'GET',
        handler: listUsersHandler
    },
    {
        path: '/users/{userId}',
        method: 'PUT',
        handler: updateUsersHandler
    },
    {
        path: '/users/{userId}/posts',
        method: 'GET',
        handler: listUserPosts
    },
     {
        path: '/users/{userId}/posts/{postId}',
        method: 'GET',
        handler: getUserPost
    }
]);
