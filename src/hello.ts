import { makeHandler } from './middy/makeHandler'

export const handler = makeHandler(async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: JSON.stringify(event),
        }),
    }
})
