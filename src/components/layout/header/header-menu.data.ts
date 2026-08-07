import { PagesConfig } from "@/config/pages.config";
import { Package, Heart, ShoppingBasket } from "lucide-react";

export const headerMenu = [
  {
    title: "Заказы",
    icon: Package,
    href: PagesConfig.ORDERS,
  }, 
  {
    title: "Избранное",
    icon: Heart,
    href: PagesConfig.FAVOURITES
  },
  {
    title: "Корзина",
    icon: ShoppingBasket,
    href: PagesConfig.CART
  }
] as const