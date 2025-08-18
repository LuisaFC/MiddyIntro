import { makeHandler } from './middy/makeHandler'

interface IHelloRequestBody {
    firstName: string
    lastName: string
}

export const handler = makeHandler<IHelloRequestBody>(async (request) => {
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
