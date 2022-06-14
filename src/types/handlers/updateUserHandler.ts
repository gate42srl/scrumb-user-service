import { ObjectId } from "mongoose"

export interface updateUserHandler {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  myProjects?: ObjectId[]
  sharedProjects?: ObjectId[]
}
