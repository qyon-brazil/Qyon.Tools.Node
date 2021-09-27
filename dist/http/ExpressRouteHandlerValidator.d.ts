import { Request } from "express";
import QObjectValidator from "../validation/QObjectValidator";
export default class ExpressRouteHandlerValidator extends QObjectValidator {
    constructor(req: Request);
    respond(): {
        hasError: boolean;
        errors: string[];
    };
}
