import { InferSelectModel } from "drizzle-orm";
import { cart, cartItem, categories, orderItems, orders, product_attributes, productImages, products, reviews, userProfiles } from "./schema";
import { User } from "better-auth";

export type TProduct = InferSelectModel<typeof products>
export type TOrderItem = InferSelectModel<typeof orderItems>
export type TReview = InferSelectModel<typeof reviews>
export type TOrder = InferSelectModel<typeof orders>
export type TImage = InferSelectModel<typeof productImages>
export type TCart = InferSelectModel<typeof cart>
export type TProfile = InferSelectModel<typeof userProfiles>

export type TProductWithReviews = TProduct & {
  reviews: TReview[],
  images: TImage[],
}

export type TFullReview = TReview & {
  product: TProduct
  user: User
}

export type TOrderWithItems = TOrder & {
  items: TOrderItem[]
}

export type TProductAttribute = InferSelectModel<typeof product_attributes>;

export type TCategory = InferSelectModel<typeof categories>;

export type TCartItem = InferSelectModel<typeof cartItem> & {
  product: TProductWithReviews
}

export type TCartFull = {
  items: TCartItem[],
  total: number,
  count: number,
}