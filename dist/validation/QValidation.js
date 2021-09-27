"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QValidation = /** @class */ (function () {
    function QValidation(value) {
        this._value = value;
        this._errors = [];
    }
    Object.defineProperty(QValidation.prototype, "errors", {
        get: function () {
            return this._errors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QValidation.prototype, "hasError", {
        get: function () {
            return this._errors.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    QValidation.prototype.isRequired = function (message) {
        if (!this._value || this._value.length <= 0) {
            this._errors.push(message);
        }
        return this;
    };
    QValidation.prototype.isEmail = function (message) {
        var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (!reg.test(this._value)) {
            this.errors.push(message);
        }
        return this;
    };
    return QValidation;
}());
exports.default = QValidation;
