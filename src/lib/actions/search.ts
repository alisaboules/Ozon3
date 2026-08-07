'use server';
import { db } from '@/lib/db';
import { categories, products } from '@/lib/db/schema';
import { getDescendantIds } from '@/utils/category';

import { inArray, like, or } from 'drizzle-orm';

export async function searchProducts(query: string) {
  const search = query.trim();
  if (!search) {
    return [];
  }
  const allCategories = await db.query.categories.findMany();
  const matchedCategories = allCategories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase()),
  );
  const categoryIds = new Set<number>();
  for (const category of matchedCategories) {
    const ids = getDescendantIds(allCategories, category.id);

    ids.forEach((id) => categoryIds.add(id));
  }

  const conditions = [
    like(products.name, `%${search}%`),
    like(products.description, `%${search}%`),
  ];

  if (categoryIds.size > 0) {
    conditions.push(
      inArray(products.categoryId, [...categoryIds]),
    );
  }

  return await db
    .select()
    .from(products)
    .where(or(...conditions));
}