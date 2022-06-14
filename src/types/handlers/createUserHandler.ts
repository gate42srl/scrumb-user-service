import { ObjectId } from "mongoose"

export interface createUserHandler {
  firstName?: string
  lastName?: string
  email: string
  password: string
  myProjects?: ObjectId[]
  sharedProjects?: ObjectId[]
}
