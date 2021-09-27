export interface IQValidation {
    errors: string[];
    hasError: boolean;
    isRequired(message: string): IQValidation;
    isEmail(message: string): IQValidation;
}
export default class QValidation implements IQValidation {
    constructor(value: string);
    private _value;
    private _errors;
    get errors(): string[];
    get hasError(): boolean;
    isRequired(message: string): IQValidation;
    isEmail(message: string): IQValidation;
}
