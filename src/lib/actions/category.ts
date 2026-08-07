'use server';

import { db } from '@/lib/db';

export async function getRootCategories() {
  return await db.query.categories.findMany({
    where: (category, { isNull }) => isNull(category.parentId),
    orderBy: (category, { asc }) => [asc(category.name)],
  });
}