export interface IQBusinessError {
    errors: string[];
    hasError: boolean;
    addError(error: string): IQBusinessError;
    addErrors(errors: string[]): IQBusinessError;
}
export default class QBusinessError implements IQBusinessError {
    constructor(error: string | string[]);
    private _errors;
    get errors(): string[];
    get hasError(): boolean;
    addError(error: string): IQBusinessError;
    addErrors(errors: string[]): IQBusinessError;
}
