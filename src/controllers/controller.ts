import { User } from "../models/user"
import { createUserHandler, updateUserHandler } from "../types/handlers"
import { hash } from "./hash"

export const createUser = async (data: createUserHandler) => {
  const hashPassword = hash(data.password)
  data.password = hashPassword

  const user = new User(data).save()
  //user = await user.save()

  return user
}

export const updateUser = async (id: string, data: updateUserHandler) => {
  var user: any // should replace with a mongoose type

  if (data.password) {
    const hashPassword = hash(data.password)
    data.password = hashPassword
    user = await User.findByIdAndUpdate(id, data)
  } else {
    user = await User.findByIdAndUpdate(id, data)
  }

  // To inform the user making request
  if (user === null) throw new Error("User not found...")
  return user
}
