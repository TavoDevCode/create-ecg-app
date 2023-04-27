import { User } from '@prisma/client'

import { dbPostgres } from '../../../configs'

export const getAllUsersPostgres = async (): Promise<User[]> => {
  return await dbPostgres.user.findMany()
}
