import { db } from './index';
import { categories } from './schema';

async function category() {
  await db.delete(categories);
  await db.insert(categories).values([
    {
      name: 'Автомобили',
      slug: 'avtomobili',
      parentId: null,
    },
    {
      name: 'Автотовары',
      slug: 'avtotovary',
      parentId: null,
    },
    {
      name: 'Аксессуары',
      slug: 'aksessuary',
      parentId: null,
    },
    {
      name: 'Антиквариат и коллекционирование',
      slug: 'antikvariat-i-kollektsionirovanie',
      parentId: null,
    },
    {
      name: 'Аптека',
      slug: 'apteka',
      parentId: null,
    },
    {
      name: 'Билеты, отели, туры',
      slug: 'bilety-oteli-tury',
      parentId: null,
    },
    {
      name: 'Бытовая техника',
      slug: 'bytovaya-tekhnika',
      parentId: null,
    },
    {
      name: 'Бытовая химия и гигиена',
      slug: 'bytovaya-khimiya-i-gigiena',
      parentId: null,
    },
    {
      name: 'Детские товары',
      slug: 'detskie-tovary',
      parentId: null,
    },
    {
      name: 'Дом и сад',
      slug: 'dom-i-sad',
      parentId: null,
    },
    {
      name: 'Игры и консоли',
      slug: 'igry-i-consoli',
      parentId: null,
    },
    {
      name: 'Канцелярские товары',
      slug: 'kantselyarskie-tovary',
      parentId: null,
    },
    {
      name: 'Книги',
      slug: 'knigi',
      parentId: null,
    },
    {
      name: 'Красота и здоровье',
      slug: 'krasota-i-zdorove',
      parentId: null,
    },
    {
      name: 'Мебель',
      slug: 'mebel',
      parentId: null,
    },
    {
      name: 'Музыка и видео',
      slug: 'music-i-video',
      parentId: null,
    },
    {
      name: 'Обувь',
      slug: 'obuv',
      parentId: null,
    },
    {
      name: 'Одежда',
      slug: 'odezhda',
      parentId: null,
    },
    {
      name: 'Подарочные сертификаты OZON',
      slug: 'podarochnye-sertifikaty-ozon',
      parentId: null,
    },
    {
      name: 'Продукты питания',
      slug: 'produkty-pitaniya',
      parentId: null,
    },
    {
      name: 'Спорт и отдых',
      slug: 'sport-i-otdykh',
      parentId: null,
    },
    {
      name: 'Строительство и ремонт',
      slug: 'stroitelstvo-i-remont',
      parentId: null,
    },
    {
      name: 'Товары для взрослых',
      slug: 'tovary-dlya-vzroslykh',
      parentId: null,
    },
    {
      name: 'Товары для животных',
      slug: 'tovary-dlya-zhivotnykh',
      parentId: null,
    },
    {
      name: 'Товары для курения и аксессуары',
      slug: 'tovary-dlya-kureniya-i-aksessuary',
      parentId: null,
    },
    {
      name: 'Туризм, рыбалка, охота',
      slug: 'turizm-rybalka-okhota',
      parentId: null,
    },
    {
      name: 'Хобби и творчество',
      slug: 'hobbi-i-tvorchestvo',
      parentId: null,
    },
    {
      name: 'Цифровые товары',
      slug: 'tsifrovye-tovary',
      parentId: null,
    },
    {
      name: 'Электроника',
      slug: 'elektronika',
      parentId: null,
    },
    {
      name: 'Ювелирные украшения',
      slug: 'yuvelirnye-ukrasheniya',
      parentId: null,
    },    
  ]);
}

category();