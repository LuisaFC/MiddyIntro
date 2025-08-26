import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import httpResponseSerializer from "@middy/http-response-serializer";
import httpMultipartBodyParser from "@middy/http-multipart-body-parser";
import { IHttpRequest, IHttpResponse } from "../../application/types/IHttp";
import { errorHandler } from "./middlewares/errorHandler";
import { IController } from "../../application/types/IController";

export function slsHandlerAdapter(controller: IController<any>){
  return middy()
  .use(httpJsonBodyParser({disableContentTypeError: true}))
  .use(httpMultipartBodyParser({ disableContentTypeError: true }))
  .use(errorHandler())
  .use(httpResponseSerializer({
    defaultContentType: 'application/json',
    serializers: [
      {
        regex: /^application\/json$/,
        serializer: ({body}) => JSON.stringify(body)
      }
    ]
  }))
  // @ts-ignore
  .handler(async (event) => {
    return controller.handler({
        body: event.body,
        headers: event.headers,
        params: event.pathParameters ?? undefined
    })
  });
}
