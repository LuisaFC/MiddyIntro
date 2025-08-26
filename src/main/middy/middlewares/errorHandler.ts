import { MiddlewareObj } from "@middy/core";
import { HttpError } from "../../../application/errors/HttpError";

export function errorHandler(): MiddlewareObj {
    return {
        onError: (request) => {
            const {error} = request;

            if(error && (error instanceof HttpError || 'statusCode' in error)){
                request.response = {
                    statusCode: error.statusCode,
                    body: error.message,
                    headers: {
                        ...request.response?.header,
                        'Content-Type': 'application/json'
                    }
                };
            } else {
                console.log(error)
                request.response = {
                    statusCode: 500,
                    body: JSON.stringify({ error: 'Erro no servidor' }),
                    headers: {
                        ...request.response?.header,
                        'Content-Type': 'application/json'
                    }
                };
            }
        }
    };
}
