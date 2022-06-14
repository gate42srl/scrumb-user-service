import { Router } from "express"

// Init the router
const router = Router()

// Import middleware functions
import { validateBody } from "../../middleware"
// Import validation functions
import { validateGetAll } from "../../validation"
// Import handlers
import { getAllHandler, getByIdHandler, createHandler, updateHandler, deleteHandler } from "./handler"

// API
router.get("/", validateBody(validateGetAll), getAllHandler)
router.get("/:id", /* validation and auth middleware, */ getByIdHandler)
router.post("/", /* validation and auth middleware, */ createHandler)
router.put("/:id", /* validation and auth middleware, */ updateHandler)
router.delete("/:id", /* validation and auth middleware, */ deleteHandler)

export default router
