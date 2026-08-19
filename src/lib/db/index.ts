// import 'server-only'
// import { drizzle } from 'drizzle-orm/libsql'
// import * as schema from './schema'
// import { createClient } from '@libsql/client'

// const client = createClient({
//   url: 'file:./sqlite.db'
// })
// export const db = drizzle(client, { schema } )
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schema'
import { createClient } from '@libsql/client'

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})

export const db = drizzle(client, { schema })