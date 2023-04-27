import { PrismaClient } from '@prisma/client'

export const dbPostgres = new PrismaClient()

const connectDatabase = async (): Promise<void> => {
  await dbPostgres.$connect()

  console.log('Connected to database at Postgres ⚡!') // eslint-disable-line no-console
}

export const connectPostgresDatabase = async (): Promise<void> =>
  connectDatabase().catch(async e => {
    console.error(e) // eslint-disable-line no-console

    await dbPostgres.$disconnect()
    process.exit(1)
  })
