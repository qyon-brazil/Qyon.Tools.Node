import { Request } from "express";
import QExpressRouteHandlerValidator from "./QExpressRouteHandlerValidator";
import QExpressRouteHandlerResolver from "./QExpressRouteHandlerResolver";
export interface QExpressRouteHandler {
    req: Request;
    val: QExpressRouteHandlerValidator;
    res: QExpressRouteHandlerResolver;
}
