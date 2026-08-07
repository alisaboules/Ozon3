import { db } from '@/lib/db';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetails } from './ProductDetails';
import { eq } from 'drizzle-orm';
import { categories, products } from '@/lib/db/schema';
import { product_attributes } from '@/lib/db/schema';
import { getCart } from '@/lib/actions/cart';

export const metadata: Metadata = {
  title: 'Product details',
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await db.query.products.findFirst({
    where: eq(products.slug, slug),
    with: {
      reviews: true,
      images: true,
    },
  });
  if (!product) {
    notFound();
  }
  const specifications = await db.query.product_attributes.findMany({
    where: eq(product_attributes.product_id, product.id),
  });
  let category = await db.query.categories.findFirst({
    where: eq(categories.id, product.categoryId),
  });
  const path = [];

  while (category) {
    path.unshift(category);

    if (category.parentId === null) break;

    category = await db.query.categories.findFirst({
      where: eq(categories.id, category.parentId),
    });
  }  
  const cart = await getCart();
  const quantityCart = cart.items.find(item => item.productId == product.id)?.quantity || 0
  return <ProductDetails product={product} quantityCart={quantityCart} specifications={specifications} categories={path} />;
}
