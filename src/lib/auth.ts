import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from './db/schema'
import { db } from "./db";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite',
    schema: {
      user: schema.users,
      session: schema.session,
      account: schema.account,
      verification: schema.verification
    }
  }),
  emailAndPassword: {
    enabled: true
  },
  trustedOrigins: ['http://localhost:3000', 'https://ozon3-nine.vercel.app']
})
export const { getSession } = auth.api
export type Session = typeof auth.$Infer.Session.session
export type User = typeof auth.$Infer.Session.user
