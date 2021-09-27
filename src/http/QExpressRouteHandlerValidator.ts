import { Request } from "express";
import QObjectValidator from "../validation/QObjectValidator";

export interface IQExpressRouteHandlerValidatorResponse {
  hasError: boolean;
  errors: string[];
}

export default class QExpressRouteHandlerValidator extends QObjectValidator {
  constructor(req: Request) {
    super(req);
  }

  public respond(): IQExpressRouteHandlerValidatorResponse {
    return {
      hasError: this.hasError,
      errors: this.errors,
    };
  }
}
