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
export interface IQExpressRouteHandlerRequest extends Request {
    account: IQExpressRouteHandlerRequestAccount;
}
export interface IQExpressRouteHandlerRequestAccount {
    company?: IQExpressRouteHandlerRequestAccountCompany;
    auth?: IQExpressRouteHandlerRequestAccountAuth;
}
export interface IQExpressRouteHandlerRequestAccountCompany {
    id?: number;
    alias?: string;
}
export interface IQExpressRouteHandlerRequestAccountAuth {
    accessToken: string;
    email: string;
    cognitoSub: string;
    identifiers: any;
}
export interface IQExpressRouteHandlerCallback {
    (req: IQExpressRouteHandlerRequest, val: QExpressRouteHandlerValidator, res: QExpressRouteHandlerResolver): Promise<IQExpressRouteHandlerResolverResponse | IQExpressRouteHandlerValidatorResponse>;
}
export declare const createQExpressRouteHandler: (method: string, path: string, handler: IQExpressRouteHandlerCallback, options: IQExpressRouteHandlerOptions) => IQExpressRouteHandler;
