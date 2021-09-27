export interface IQExpressRouteHandlerResolverRespondParam {
    body: any;
}
export interface IQExpressRouteHandlerResolverResponse {
    hasError: boolean;
    body: any;
}
export interface IQExpressRouteHandlerResolver {
    respond(data: IQExpressRouteHandlerResolverRespondParam): IQExpressRouteHandlerResolverResponse;
}
export default class QExpressRouteHandlerResolver implements IQExpressRouteHandlerResolver {
    constructor();
    respond(data: IQExpressRouteHandlerResolverRespondParam): IQExpressRouteHandlerResolverResponse;
}
