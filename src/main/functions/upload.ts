import { UploadController } from "../../application/controllers/UploadController";
import { slsHandlerAdapter } from "../middy/slsHandlerAdapter";

export const handler = slsHandlerAdapter(new UploadController());
