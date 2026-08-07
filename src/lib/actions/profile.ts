'use server';

import { db } from '@/lib/db';
import { userProfiles } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { headers } from 'next/headers';
import { getSession } from '../auth';

type Data = {
  fullName: string;
  birthDate: string;
  gender: string;
  phone: string;
};

export async function getProfile() {
  const session = await getSession({
    headers: await headers(),
  });

  if (!session) return null;

  return db.query.userProfiles.findFirst({
    where: eq(userProfiles.userId, session.user.id),
  });
}

export async function saveProfile(data: Data) {
  const session = await getSession({
    headers: await headers(),
  });

  if (!session) throw new Error('Не авторизован');
  const existing = await db.query.userProfiles.findFirst({
    where: eq(userProfiles.userId, session.user.id),
  });
  if (existing) {
    await db.update(userProfiles).set(data).where(eq(userProfiles.userId, session.user.id));
  } else {
    await db.insert(userProfiles).values({ userId: session.user.id, ...data });
  }
}
