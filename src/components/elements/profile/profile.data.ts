import { PagesConfig } from "@/config/pages.config";

export const ProfileSidebar = {
  "Личная информация" : [
    {
      title: "Главная",
      href: PagesConfig.HOME,
    }, 
    {
      title: "Ozon Карта",
      href: PagesConfig.HOME,
    },
    {
      title: "Кредитная карта",
      href: PagesConfig.HOME
    },
    {
      title: "Мои компании",
      href: PagesConfig.HOME
    },
    {
      title: "Коды и сертификаты",
      href: PagesConfig.HOME
    },
    {
      title: "Баллы и бонусы",
      href: PagesConfig.HOME
    },
    {
      title: "Способы оплаты",
      href: PagesConfig.HOME
    },
    {
      title: "Ozon Premium",
      href: PagesConfig.HOME
    },
    {
      title: "Баланс средств",
      href: PagesConfig.HOME
    },
    {
      title: "Мой гараж",
      href: PagesConfig.HOME
    },
  ],
  'Заказы': [
    {
      title: "Моя корзина",
      href: PagesConfig.CART
    },
    {
      title: "Мои заказы",
      href: PagesConfig.ORDERS
    },
    {
      title: "Мои возвраты",
      href: PagesConfig.HOME
    },
    {
      title: "Купленные товары",
      href: PagesConfig.ORDERS
    },
    {
      title: "OZON Travel",
      href: PagesConfig.HOME
    },
    {
      title: "Для меня",
      href: PagesConfig.HOME
    },
    {
      title: "Сравнение товаров",
      href: PagesConfig.COMPARE
    },
    {
      title: "Сообщения",
      href: PagesConfig.HOME
    },
    {
      title: "Электронные чеки",
      href: PagesConfig.HOME
    }
  ],
  "Отзывы и вопросы о товарах":[
  {
    title: "Мои отзывы",
    href: PagesConfig.HOME
  },
  {
    title: 'Акция «Баллы за отзывы»',
    href: PagesConfig.HOME
  },
  {
    title: "Мои вопросы и ответы",
    href: PagesConfig.HOME
  },
  {
    title: "Вопросы, ожидающие ответа",
    href: PagesConfig.HOME
  }],
  "Подписки":[
  {
    title: 'Избранное',
    href: PagesConfig.FAVOURITES
  },
  {
    title: "Настройки уведомлений",
    href: PagesConfig.HOME
  }],
  "Настройки и помощь": [ {
    title: 'Моя учетная запись',
    href: PagesConfig.HOME
  },
  {
    title: "Помощь",
    href: PagesConfig.HOME
  }],
} as const