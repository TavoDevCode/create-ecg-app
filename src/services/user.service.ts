import { User } from '@prisma/client'

import { getAllUsersPostgres } from '../databases'

export const allUsers = async (): Promise<User[]> => await getAllUsersPostgres()
