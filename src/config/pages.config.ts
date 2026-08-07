export class PagesConfig {
  static readonly HOME = '/';
  static readonly CATALOG = '/catalog';
  static readonly LOGIN = '/login';
  static readonly ORDERS = '/orders';
  static readonly FAVOURITES = '/favourites';
  static readonly CART = '/cart';

  static PRODUCT_DETAILS(slug: string) {
    return `/product/${slug}`;
  }

  static readonly COMPARE = '/compare';
  static readonly PROFILE = '/profile';

  static readonly FRESH = '/fresh'
  static readonly OZON_CARD = '/ozon_card'
  static readonly AIR_TICKETS = '/air_tickets'
  static readonly FOR_BUSINESS = '/for_business'
  static readonly CLOTHING = '/clothing'
  static readonly ELECTRONICS = '/electronics'
  static readonly HOME_AND_GARDEN = '/home_and_garden'
  static readonly PRODUCTS_FOR_1_RUB = '/products_for_1_rub'
  static readonly CERTIFICATES = '/certificates'
}