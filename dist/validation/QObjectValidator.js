"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var QValidation_1 = require("./QValidation");
var QObjectValidator = /** @class */ (function () {
    function QObjectValidator(object) {
        this._object = object;
        this._validations = [];
        this._otherErrors = [];
    }
    Object.defineProperty(QObjectValidator.prototype, "errors", {
        get: function () {
            return this._otherErrors.concat.apply(this._otherErrors, this._validations.map(function (v) { return v.errors; }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QObjectValidator.prototype, "hasError", {
        get: function () {
            return this.errors.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    QObjectValidator.prototype.addValidation = function (propPath, callback) {
        var val = new QValidation_1.default(lodash_1.get(this._object, propPath));
        callback(val);
        this._validations.push(val);
        return this;
    };
    return QObjectValidator;
}());
exports.default = QObjectValidator;
