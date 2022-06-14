import type { Request, Response, NextFunction, RequestHandler } from "express"
import { ValidateFunction } from "ajv"
import { ValidationOption } from "../types/validationOptions"

export const validateRequest = (field: ValidationOption, validate: ValidateFunction): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const isValid = validate(req[field])
    if (!isValid) return next(new Error("Invalid request, not allowed"))
    next()
  }
}

export const validateBody = (validate: ValidateFunction): RequestHandler => validateRequest("body", validate)
export const validateParams = (validate: ValidateFunction): RequestHandler => validateRequest("params", validate)
export const validateQuery = (validate: ValidateFunction): RequestHandler => validateRequest("query", validate)
export const validateHeaders = (validate: ValidateFunction): RequestHandler => validateRequest("headers", validate)
