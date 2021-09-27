"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QBusinessError = /** @class */ (function () {
    function QBusinessError(error) {
        this._errors = [];
        if (!error)
            this._errors = [];
        else
            this._errors = typeof error === "string" ? [error] : error;
    }
    Object.defineProperty(QBusinessError.prototype, "errors", {
        get: function () {
            return this._errors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QBusinessError.prototype, "hasError", {
        get: function () {
            return this.errors.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    QBusinessError.prototype.addError = function (error) {
        this._errors.push(error);
        return this;
    };
    QBusinessError.prototype.addErrors = function (errors) {
        this._errors = this._errors.concat(errors);
        return this;
    };
    return QBusinessError;
}());
exports.default = QBusinessError;
