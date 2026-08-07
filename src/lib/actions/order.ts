'use server';

import { eq, inArray } from 'drizzle-orm';
import { cart, cartItem, orderItems, orders, products } from '../db/schema';
import { getUser } from './user';
import { db } from '../db';
import { revalidatePath } from 'next/cache';
import { PagesConfig } from '@/config/pages.config';

export async function createOrder(selectedProductIds: string[]) {
  try {
    const user = await getUser();
    const userId = user.id;
    const userCart = await db.query.cart.findFirst({
      where: eq(cart.userId, userId),
      with: {
        items: {
          with: {
            product: true,
          },
        },
      },
    });
    if (!userCart || userCart.items.length == 0) {
      return {
        success: false,
        message: 'Корзина пуста',
      };
    }
    const selectedItems = userCart.items.filter((item) =>
      selectedProductIds.includes(item.productId),
    );

    if (selectedItems.length === 0) {
      return {
        success: false,
        message: 'Не выбраны товары',
      };
    }

    const total = selectedItems.reduce((acc, item) => {
      const price = item.product.discountPrice || item.product.price;
      return acc + price * item.quantity;
    }, 0);

    const [newOrder] = await db
      .insert(orders)
      .values({
        id: crypto.randomUUID(),
        userId,
        total,
        status: 'paid',
      })
      .returning();

    for (const item of selectedItems) {
      await db.insert(orderItems).values({
        id: crypto.randomUUID(),
        orderId: newOrder.id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.product.discountPrice || item.product.price,
      });
    }

    await db.delete(cartItem).where(inArray(cartItem.productId, selectedProductIds));

    revalidatePath(PagesConfig.CART);
    revalidatePath(PagesConfig.ORDERS);
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: 'Ошибка при создании заказа',
    };
  }
}

export async function getUserOrders() {
  try {
    const user = await getUser();
    const orderss = await db.query.orders.findMany({
      where: eq(orders.userId, user.id),
      with: {
        items: {
          with: {
            product: true,
          },
        },
      },
      orderBy: (order, { desc }) => [desc(order.createdAt)],
    });
    return orderss;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function buyNow(productId: string, quantity: number) {
  try {
    const user = await getUser();
    if (!user) {
      return {
        success: false,
        message: 'Необходимо войти в аккаунт',
      };
    }
    const product = await db.query.products.findFirst({
      where: eq(products.id, productId),
    });
    if (!product) {
      return {
        success: false,
        message: 'Товар не найден',
      };
    }
    const price = product.discountPrice ?? product.price;
    const total = price * quantity;
    const [newOrder] = await db
      .insert(orders)
      .values({
        id: crypto.randomUUID(),
        userId: user.id,
        total: total,
        status: 'paid',
      })
      .returning();
    await db.insert(orderItems).values({
      id: crypto.randomUUID(),
      orderId: newOrder.id,
      productId: product.id,
      quantity,
      price,
    });
    revalidatePath(PagesConfig.ORDERS);
    return {
      success: true,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: 'Ошибка при создании заказа',
    };
  }
}