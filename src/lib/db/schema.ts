import { sql, relations, } from 'drizzle-orm';
import { real, sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" })
    .default(false)
    .notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .$onUpdate(() => new Date())
    .notNull(),
});

export const session = sqliteTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    token: text("token").notNull().unique(),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .$onUpdate(() => new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = sqliteTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    issuer: text("issuer"),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: integer("access_token_expires_at", {
      mode: "timestamp_ms",
    }),
    refreshTokenExpiresAt: integer("refresh_token_expires_at", {
      mode: "timestamp_ms",
    }),
    scope: text("scope"),
    password: text("password"),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = sqliteTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const userRelations = relations(users, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(users, {
    fields: [session.userId],
    references: [users.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(users, {
    fields: [account.userId],
    references: [users.id],
  }),
}));

export const reviews = sqliteTable('reviews', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  productId: text('product_id')
    .notNull()
    .references(() => products.id, { onDelete: 'cascade' }),
  rating: real('rating').notNull(),
  comment: text('comment'),
  createdAt: text('created_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const products = sqliteTable('products', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  categoryId: integer('category_id').notNull().references(() => categories.id, { onDelete: 'cascade' }),
  price: integer('price').notNull(),
  discountPrice: integer('discount_price'),
  imageUrl: text('image_url').notNull(),
  sku: text('sku').notNull().unique(),
  slug: text('slug').notNull(),
  brand: text('brand'),
  shop: text('shop'),
  createdAt: text('created_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const orders = sqliteTable('orders', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  total: integer('total').notNull(),
  status: text('status').notNull().default('pending'),
  createdAt: text('created_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const orderItems = sqliteTable('order_items', {
  id: text('id').primaryKey(),
  orderId: text('order_id')
    .notNull()
    .references(() => orders.id, { onDelete: 'cascade' }),
  productId: text('product_id')
    .notNull()
    .references(() => products.id, { onDelete: 'cascade' }),
  quantity: integer('quantity').notNull().default(1),
  price: integer('price').notNull(),
});

export const product_attributes = sqliteTable('product_attributes', {
  id: integer("id").primaryKey({ autoIncrement: true }),
  product_id: text('product_id').notNull().references(() => products.id, { onDelete: 'cascade'}),
  title: text('title').notNull(),
  value: text('value').notNull(),
})

export const categories = sqliteTable('categories', {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull(),
  parentId: integer(),
});

export const productImages = sqliteTable('product_images', {
  id: integer().primaryKey({ autoIncrement: true }),
  productId: text('product_id')
    .notNull()
    .references(() => products.id, { onDelete: 'cascade' }),
  imageUrl: text('image_url').notNull(),
  order: integer('order').notNull().default(0),
});

export const cart = sqliteTable('cart', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade'}),
  createdAt: integer('create_at').notNull().$defaultFn(() => Date.now()),
  updatedAt: integer('update_at').notNull().$defaultFn(() => Date.now())
})

export const cartItem = sqliteTable('cart_items', {
  id: text('id').primaryKey(),
  cartId: text('cart_id').notNull().references(() => cart.id, { onDelete: 'cascade'}),
  productId: text('product_id').notNull(),
  quantity: integer('quantity').notNull().default(1),
  price: integer('price').notNull(),
  createdAt: integer('create_at').notNull().$defaultFn(() => Date.now()),
  updatedAt: integer('update_at').notNull().$defaultFn(() => Date.now())
})

// RELATIONS //

export const productRelation = relations(products, ({ many }) => ({
  reviews: many(reviews),
  images: many(productImages),
  attributes: many(product_attributes),
}))

export const reviewRelation = relations(reviews, ({ one }) => ({
  product: one(products, {
    fields: [reviews.productId],
    references: [products.id],
  }),
  user: one(users, {
    fields: [reviews.userId],
    references: [users.id],
  })
}))

export const userRelation = relations(users, ({ one, many }) => ({
  reviews: many(reviews),
  orders: many(orders),
  cart: one(cart, {
    fields: [users.id],
    references: [cart.userId]
  })
}))

export const productImagesRelation = relations(productImages, ({ one }) => ({
  product: one(products, {
    fields: [productImages.productId],
    references: [products.id],
  }),
}));

export const cartRelation = relations(cart, ({ many }) => ({
  items: many(cartItem),
}))

export const cartItemRelation = relations(cartItem, ({ one }) => ({
  cart: one(cart, {
    fields: [cartItem.cartId],
    references: [cart.id]
  }),
  product: one(products, {
    fields: [cartItem.productId],
    references: [products.id]
  })
}))

export const productAttributesRelation = relations(product_attributes, ({ one }) => ({
  product: one(products, {
    fields: [product_attributes.product_id],
    references: [products.id],
  }),
}));

export const orderRelation = relations(orders, ({one, many}) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id]
  }),
  items: many(orderItems)
}))

export const orderItemRelation = relations(orderItems, ({ one }) => ({
  product: one(products, {
    fields: [orderItems.productId],
    references: [products.id]
  }),
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id]
  })
}))

export const userProfiles = sqliteTable("user_profile", {
  userId: text("user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),

  fullName: text("full_name"),
  birthDate: text("birth_date"), // или integer, если хочешь timestamp
  gender: text("gender"),
  phone: text("phone"),

  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .$onUpdate(() => new Date())
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
});