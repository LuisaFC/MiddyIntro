import middy from "@middy/core";
import httpJsonBodyParser from '@middy/http-json-body-parser'

type Handler = (event: any) => Promise<any>;

export function makeHandler(handler: Handler) {
    return middy()
    .use(httpJsonBodyParser({disableContentTypeError: true}))
    .handler(handler);
}
