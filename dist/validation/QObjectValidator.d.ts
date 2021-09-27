import { IQValidation } from "./QValidation";
export interface IQObjectValidatorAddValidationCallback {
    (val: IQValidation): void;
}
export interface IQObjectValidator {
    errors: string[];
    hasError: boolean;
    addValidation(propPath: string, callback: IQObjectValidatorAddValidationCallback): IQObjectValidator;
}
export default class QObjectValidator implements IQObjectValidator {
    constructor(object: any);
    private _object;
    private _validations;
    private _otherErrors;
    get errors(): string[];
    get hasError(): boolean;
    addValidation(propPath: string, callback: IQObjectValidatorAddValidationCallback): IQObjectValidator;
}
