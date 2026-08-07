
import { PagesConfig } from '@/config/pages.config';
import { Banana, CreditCard, LucideIcon, Plane, ShoppingBasket } from 'lucide-react';

export interface ITopMenuItem {
  title: string;
  href: string;
  icon?: LucideIcon;
}

export const topMenu: ITopMenuItem[] = [
  {
    title: 'Ozon fresh',
    icon: Banana,
    href: PagesConfig.FRESH,
  },
  {
    title: 'Ozon карта',
    icon: CreditCard,
    href: PagesConfig.OZON_CARD,
  },
  {
    title: 'Авиа-билеты',
    icon: Plane,
    href: PagesConfig.AIR_TICKETS,
  },
  {
    title: 'Для бизнеса',
    icon: ShoppingBasket,
    href: PagesConfig.FOR_BUSINESS,
  },
  {
    title: 'Одежда',
    href: PagesConfig.CLOTHING,
  },
  {
    title: 'Электроника',
    href: PagesConfig.ELECTRONICS,
  },
  {
    title: 'Дом и сад',
    href: PagesConfig.HOME_AND_GARDEN,
  },
  {
    title: 'Товары за 1₽',
    href: PagesConfig.PRODUCTS_FOR_1_RUB,
  },
  {
    title: 'Сертификаты',
    href: PagesConfig.CERTIFICATES,
  },
] as const;

// enum TopMenuEnum {
//   FRESH = 'FRESH',
//   OZON_CARD = 'OZON_CARD',
//   AIR_TICKETS = 'AIR_TICKETS',
// }

// const TopMenu = {
//   FRESH: 'FRESH',
//   OZON_CARD: 'OZON_CARD',
//   AIR_TICKETS: 'AIR_TICKETS'
// }

// type TopMenu = typeof TopMenu[keyof typeof TopMenu]
