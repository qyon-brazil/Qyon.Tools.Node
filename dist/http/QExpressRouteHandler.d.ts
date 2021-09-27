import { Request } from "express";
import QExpressRouteHandlerValidator, { IQExpressRouteHandlerValidatorResponse } from "./QExpressRouteHandlerValidator";
import QExpressRouteHandlerResolver, { IQExpressRouteHandlerResolverResponse } from "./QExpressRouteHandlerResolver";
export interface IQExpressRouteHandler {
    method: string;
    path: string;
    handler: IQExpressRouteHandlerCallback;
    options: IQExpressRouteHandlerOptions;
}
export interface IQExpressRouteHandlerOptions {
    requiresAuth?: boolean;
}
export interface IQExpressRouteHandlerCallback {
    (req: Request, val: QExpressRouteHandlerValidator, res: QExpressRouteHandlerResolver): Promise<IQExpressRouteHandlerResolverResponse | IQExpressRouteHandlerValidatorResponse>;
}
export declare const createQExpressRouteHandler: (method: string, path: string, handler: IQExpressRouteHandlerCallback, options: IQExpressRouteHandlerOptions) => IQExpressRouteHandler;
