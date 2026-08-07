'use server'

import { db } from "../db"

export async function getProductByIds(ids: string[]) {
  if (ids.length == 0) return []
      return db.query.products.findMany({
        where: (product, { inArray }) => inArray(product.id, ids),
        with: {
          reviews: true,
          images: true,
          attributes: true,
        }
      })
}

export async function getAllProducts() {
  return db.query.products.findMany({
    with: {
      reviews: true,
      images: true
    },
  });
}