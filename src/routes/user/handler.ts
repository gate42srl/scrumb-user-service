import { NextFunction, Request, Response } from "express"
import { User } from "../../models/user"
import { createUser, updateUser } from "../../controllers"

export const getAllHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.find({})
    res.json(user)
  } catch (err) {
    return next(err)
  }
}

export const getByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(req.params.id)

    if (user === null) throw new Error("User not found...")

    res.json(user)
  } catch (err) {
    return next(err)
  }
}

export const createHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await createUser(req.body)
    res.json(user)
  } catch (err) {
    return next(err)
  }
}

export const updateHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    /* PAY ATTENTION:
    1. change of password
    2. change of my-sharedProjects */
    const user = await updateUser(req.params.id, req.body)
    res.json(user)
  } catch (err) {
    return next(err)
  }
}

export const deleteHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.json(user)
  } catch (err) {
    return next(err)
  }
}
