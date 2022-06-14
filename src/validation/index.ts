import Ajv from "ajv"
const ajv = new Ajv({ allErrors: true })
// Import schemas
import * as schemas from "./userSchemas"

// Create validation functions
export const validateGetAll = ajv.compile(schemas.getAllSchema)
