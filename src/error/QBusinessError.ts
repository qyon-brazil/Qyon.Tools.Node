export interface IQBusinessError {
  errors: string[];
  hasError: boolean;
  addError(error: string): IQBusinessError;
  addErrors(errors: string[]): IQBusinessError;
}

export default class QBusinessError implements IQBusinessError {
  constructor(error: string | string[]) {
    this._errors = [];
    if (!error) this._errors = [];
    else this._errors = typeof error === "string" ? [error] : error;
  }

  private _errors: string[];
  public get errors(): string[] {
    return this._errors;
  }

  get hasError(): boolean {
    return this.errors.length > 0;
  }

  addError(error: string): IQBusinessError {
    this._errors.push(error);
    return this;
  }

  addErrors(errors: string[]): IQBusinessError {
    this._errors = this._errors.concat(errors);
    return this;
  }
}
