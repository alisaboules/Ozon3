'use server';

import { cartItem, products } from './../db/schema';
import { and, eq } from 'drizzle-orm';
import { db } from '../db';
import { cart } from '../db/schema';
import { getUser } from './user';
import { revalidatePath } from 'next/cache';
import { PagesConfig } from '@/config/pages.config';

async function getOrCreateCart(userId: string) {
  let userCart = await db.query.cart.findFirst({
    where: eq(cart.userId, userId),
  });
  if (!userCart) {
    const [newCart] = await db
      .insert(cart)
      .values({
        id: crypto.randomUUID(),
        userId,
      })
      .returning();
    userCart = newCart;
  }
  return userCart;
}

export async function getCart() {
  try {
    const user = await getUser();
    const userCart = await getOrCreateCart(user.id);
    const items = await db.query.cartItem.findMany({
      with: {
        product: {
          with: {
            reviews: true,
            images: true,
          },
        },
      },
      orderBy: (item, { desc }) => [desc(item.createdAt)],
    });
    const total = items.reduce((acc, item) => {
      const price = item.product?.discountPrice ?? item.product?.price ?? 0;
      return acc + price * item.quantity;
    }, 0);
    return {
      items,
      total,
      count: items.reduce((acc, item) => acc + item.quantity, 0),
    };
  } catch {
    return {
      items: [],
      total: 0,
      count: 0,
    };
  }
}

export async function addToCart(productId: string, quantity: number = 1) {
  try {
    const user = await getUser();
    const userCart = await getOrCreateCart(user.id);
    const existingItem = await db.query.cartItem.findFirst({
      where: and(eq(cartItem.cartId, userCart.id), eq(cartItem.productId, productId)),
    });
    const productData = await db.query.products.findFirst({
      where: eq(products.id, productId),
    });
    if (!productData) {
      return { success: false, message: 'Товар не найден' };
    }
    const price = productData.discountPrice ?? productData.price ?? 0;
    if (existingItem) {
      await db
        .update(cartItem)
        .set({
          quantity: existingItem.quantity + quantity,
        })
        .where(eq(cartItem.id, existingItem.id));
    } else {
      await db.insert(cartItem).values({
        id: crypto.randomUUID(),
        cartId: userCart.id,
        productId,
        quantity,
        price,
      });
    }
    revalidatePath(PagesConfig.CART);
    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      message: 'Не удалось добавить товар в корзину',
    };
  }
}

export async function updateCartItemQuantity(productId: string, quantity: number) {
  try {
    const user = await getUser();
    const userCart = await getOrCreateCart(user.id);
    const existingItem = await db.query.cartItem.findFirst({
      where: and(eq(cartItem.cartId, userCart.id), eq(cartItem.productId, productId)),
    });
    if (!existingItem) {
      return { success: false, message: 'Товар не найден в корзине' };
    }
    if (quantity <= 0) {
      await db.delete(cartItem).where(eq(cartItem.id, existingItem.id));
    } else {
      await db.update(cartItem).set({ quantity }).where(eq(cartItem.id, existingItem.id));
    }
    revalidatePath(PagesConfig.CART);
    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      message: 'Не удалось обновить количество товаров в корзине',
    };
  }
}

export async function clearCart() {
  try {
    const user = await getUser();
    const userCart = await getOrCreateCart(user.id);
    await db.delete(cartItem).where(eq(cartItem.cartId, userCart.id));
    revalidatePath(PagesConfig.CART);
    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      message: 'Не удалось очистить корзину',
    };
  }
}
