import { makeHandler } from './middy/makeHandler'

export const handler = makeHandler(async (event) => {
    return {
        statusCode: 200,
        body: {
            firstName: event?.body?.firstName,
            lastName: event?.body?.lastName,
        }
    }
})
