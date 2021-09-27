"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QExpressRouteHandlerResolver = /** @class */ (function () {
    function QExpressRouteHandlerResolver() {
    }
    QExpressRouteHandlerResolver.prototype.respond = function (data) {
        return {
            hasError: false,
            body: data.body,
        };
    };
    return QExpressRouteHandlerResolver;
}());
exports.default = QExpressRouteHandlerResolver;
