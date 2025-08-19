import { makeHandler } from './middy/makeHandler'
import { IFile } from './types/IFile'

interface IHelloRequestBody {
    firstName: string
    lastName: string
    file: IFile
}

export const handler = makeHandler<IHelloRequestBody>(async (request) => {
    return {
        statusCode: 200,
        body: {filename: request.body?.file.filename},
    }
})
