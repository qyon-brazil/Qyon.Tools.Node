import { get as _get } from "lodash";
import QValidation, { IQValidation } from "./QValidation";

export interface IQObjectValidatorAddValidationCallback {
  (val: IQValidation): void;
}

export interface IQObjectValidator {
  errors: string[];
  hasError: boolean;
  addValidation(propPath: string, callback: IQObjectValidatorAddValidationCallback): IQObjectValidator;
}

export default class QObjectValidator implements IQObjectValidator {
  constructor(object: any) {
    this._object = object;
    this._validations = [];
    this._otherErrors = [];
  }

  private _object: any;
  private _validations: IQValidation[];
  private _otherErrors: string[];

  public get errors(): string[] {
    return this._otherErrors.concat.apply(
      this._otherErrors,
      this._validations.map((v) => v.errors),
    );
  }

  public get hasError(): boolean {
    return this.errors.length > 0;
  }

  public addValidation(propPath: string, callback: IQObjectValidatorAddValidationCallback): IQObjectValidator {
    const val = new QValidation(_get(this._object, propPath));
    callback(val);
    this._validations.push(val);
    return this;
  }
}
