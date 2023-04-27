import { Request, Response } from 'express'

import { StillVoid } from '../interfaces'
import { allUsers } from '../services'

export const getAllUsers = async (req: Request, res: Response): Promise<Response<any, Record<string, any>> | StillVoid> => {
  const users = await allUsers()

  res.status(200).json(users)
}
