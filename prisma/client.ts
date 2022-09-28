import { PrismaClient } from '@prisma/client';

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var dbclient: PrismaClient | undefined
}

const dbclient =
  global.dbclient ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') global.dbclient = dbclient

export default dbclient