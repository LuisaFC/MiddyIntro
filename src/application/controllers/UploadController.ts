import { HttpError } from "../errors/HttpError";
import { IController } from "../types/IController";
import { IFile } from "../types/IFile";
import { IHttpRequest, IHttpResponse } from "../types/IHttp";

interface IUploadBody {
    file: IFile
}

export class UploadController implements IController<IUploadBody>{
    async handler(request: IHttpRequest<IUploadBody>): Promise<IHttpResponse> {
        const file = request.body?.file;

    if (!file) {
        throw new HttpError(400, {error: 'File is required'});
    }

    return {
        statusCode: 200,
        body: {filename: file.filename},
    }
    }

}
