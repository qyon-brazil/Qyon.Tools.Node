export interface IQValidation {
  errors: string[];
  hasError: boolean;
  isRequired(message: string): IQValidation;
  isNumber(message: string): IQValidation;
  isEmail(message: string): IQValidation;
}

export default class QValidation implements IQValidation {
  constructor(value: string) {
    this._value = value;
    this._errors = [];
  }

  private _value: string;

  private _errors: string[];
  public get errors(): string[] {
    return this._errors;
  }

  public get hasError(): boolean {
    return this._errors.length > 0;
  }

  public isRequired(message: string): IQValidation {
    if (
      !this._value ||
      this._value?.length <= 0 ||
      this._value?.toString().trim() === "null" ||
      this._value?.toString().trim() === "undefined"
    ) {
      this._errors.push(message);
    }
    return this;
  }

  public isNumber(message: string): IQValidation {
    if (isNaN(Number(this._value))) {
      this.errors.push(message);
    }
    return this;
  }

  isEmail(message: string): IQValidation {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(this._value)) {
      this.errors.push(message);
    }
    return this;
  }
}
