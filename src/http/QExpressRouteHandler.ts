import { Express, Request } from "express";
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
  (req: Request, val: QExpressRouteHandlerValidator, res: QExpressRouteHandlerResolver): Promise<
    IQExpressRouteHandlerResolverResponse | IQExpressRouteHandlerValidatorResponse
  >;
}

export const createQExpressRouteHandler = (
  method: string,
  path: string,
  handler: IQExpressRouteHandlerCallback,
  options: IQExpressRouteHandlerOptions,
): IQExpressRouteHandler => {
  if (!options) options = {};
  options.requiresAuth = options.requiresAuth === false ? false : true;

  const handlerOverlaid = async (
    req: Request,
  ): Promise<IQExpressRouteHandlerResolverResponse | IQExpressRouteHandlerValidatorResponse> => {
    return await handler(req, new QExpressRouteHandlerValidator(req), new QExpressRouteHandlerResolver());
  };

  return {
    method,
    path,
    handler: handlerOverlaid,
    options,
  };
};
