import type { JSONSchemaType } from "ajv"

interface getAll {}

export const getAllSchema: JSONSchemaType<getAll> = {
  type: "object",
  required: [],
  additionalProperties: false,
}
