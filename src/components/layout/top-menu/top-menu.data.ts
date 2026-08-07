
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
    href: PagesConfig.HOME,
  },
  {
    title: 'Ozon карта',
    icon: CreditCard,
    href: PagesConfig.HOME,
  },
  {
    title: 'Авиа-билеты',
    icon: Plane,
    href: PagesConfig.HOME,
  },
  {
    title: 'Для бизнеса',
    icon: ShoppingBasket,
    href: PagesConfig.HOME,
  },
  {
    title: 'Одежда',
    href: PagesConfig.HOME,
  },
  {
    title: 'Электроника',
    href: PagesConfig.HOME,
  },
  {
    title: 'Дом и сад',
    href: PagesConfig.HOME,
  },
  {
    title: 'Товары за 1₽',
    href: PagesConfig.HOME,
  },
  {
    title: 'Сертификаты',
    href: PagesConfig.HOME,
  },
] as const;

