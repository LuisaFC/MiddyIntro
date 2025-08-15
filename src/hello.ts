import { makeHandler } from './middy/makeHandler'

export const handler = makeHandler(async (request) => {
    return {
        statusCode: 200,
        body: {
            firstName: request.body?.firstName,
            lastName: request.body?.lastName,
            clientHeader: request.headers?.['x-client-header']
        },
        headers: {
            'X-Teste': 'Luisa'
        }
    }
})
