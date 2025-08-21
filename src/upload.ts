import { HttpError } from './errors/HttpError'
import { makeHandler } from './middy/makeHandler'
import { IFile } from './types/IFile'

interface IHelloRequestBody {
    firstName: string
    lastName: string
    file: IFile
}

export const handler = makeHandler<IHelloRequestBody>(async (request) => {
    const file = request.body?.file;

    if (!file) {
        throw new HttpError(400, {error: 'File is required'});
    }

    return {
        statusCode: 200,
        body: {filename: file.filename},
    }
})
