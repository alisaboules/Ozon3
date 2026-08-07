import { db } from './index';
import { categories } from './schema';

async function akseccuary() {
  await db.insert(categories).values([
    {
      name: 'Женские аксессуары',
      slug: 'zhenskie-akseccuary',
      parentId: 3,
    },
    {
      name: 'Мужские аксессуары',
      slug: 'muzhskie-akseccuary',
      parentId: 3,
    },
    {
      name: 'Детские аксессуары ',
      slug: 'detskie-akseccuary',
      parentId: 3,
    },
    { name: 'Путешествия',
      slug: 'puteshestviya',
      parentId: 3,
    },
    {
      name: 'Аксессуары для волос',
      slug: 'aksessuary-dlya-volos',
      parentId: 194,
    },
    {
      name: 'Бижутерия',
      slug: 'bizhuteriya',
      parentId: 194,
    },
    {
      name: 'Галстуки и бабочки',
      slug: 'galstuki-i-babochki',
      parentId: 194,
    },
    {
      name: 'Головные уборы',
      slug: 'golovnye-ubory',
      parentId: 194,
    },
    {
      name: 'Зонты',
      slug: 'zonty',
      parentId: 194,
    },
    {
      name: 'Кошельки, ключицы и визитницы',
      slug: 'koshelki-klyuchitsy-i-vizitnitsy',
      parentId: 194,
    },
    {
      name: 'Носовые платки',
      slug: 'nosovye-platki',
      parentId: 194,
    },
    {
      name: 'Обложки для документов',
      slug: 'oblozhki-dlya-dokumentov',
      parentId: 194,
    },
    {
      name: 'Очки',
      slug: 'ochki',
      parentId: 194,
    },
    {
      name: 'Перчатки и варежки',
      slug: 'perchatki-i-varezhki',
      parentId: 194,
    },
    {
      name: 'Платки и шарфы',
      slug: 'platki-i-sharfy',
      parentId: 194,
    },
    {
      name: 'Повязки на лицо',
      slug: 'povyazki-na-litso',
      parentId: 194,
    },
    {
      name: 'Ремни и подтяжки',
      slug: 'remni-i-podtyazhki',
      parentId: 194,
    },
    {
      name: 'Спортивные аксессуары',
      slug: 'sportivnye-aksessuary',
      parentId: 194,
    },
    {
      name: 'Сумки и рюкзаки',
      slug: 'sumki-i-ryukzaki',
      parentId: 194,
    },
    {
      name: 'Часы и аксессуары',
      slug: 'chasy-i-aksessuary',
      parentId: 194,
    },
    {
      name: 'Аксессуары для военной формы',
      slug: 'aksessuary-dlya-voennoy-formy',
      parentId: 194,
    },
    {
      name: 'Бижутерия',
      slug: 'bizhuteriya',
      parentId: 195,
    },
    {
      name: 'Галстуки и бабочки',
      slug: 'galstuki-i-babochki',
      parentId: 195,
    },
    {
      name: 'Головные уборы',
      slug: 'golovnye-ubory',
      parentId: 195,
    },
    {
      name: 'Зонты',
      slug: 'zonty',
      parentId: 195,
    },
    {
      name: 'Кошельки, ключицы и визитницы',
      slug: 'koshelki-klyuchitsy-i-vizitnitsy',
      parentId: 195,
    },
    {
      name: 'Носовые платки',
      slug: 'nosovye-platki',
      parentId: 195,
    },
    {
      name: 'Обложки для документов',
      slug: 'oblozhki-dlya-dokumentov',
      parentId: 195,
    },
    {
      name: 'Очки',
      slug: 'ochki',
      parentId: 195,
    },
    {
      name: 'Перчатки и варежки',
      slug: 'perchatki-i-varezhki',
      parentId: 195,
    },
    {
      name: 'Платки и шарфы',
      slug: 'platki-i-sharfy',
      parentId: 195,
    },
    {
      name: 'Повязки на лицо',
      slug: 'povyazki-na-litso',
      parentId: 195,
    },
    {
      name: 'Ремни и подтяжки',
      slug: 'remni-i-podtyazhki',
      parentId: 195,
    },
    {
      name: 'Спортивные аксессуары',
      slug: 'sportivnye-aksessuary',
      parentId: 195,
    },
    {
      name: 'Сумки и рюкзаки',
      slug: 'sumki-i-ryukzaki',
      parentId: 195,
    },
    {
      name: 'Часы и аксессуары',
      slug: 'chasy-i-aksessuary',
      parentId: 195,
    },
    {
      name: 'Аксессуары для военной формы',
      slug: 'aksessuary-dlya-voennoy-formy',
      parentId: 195,
    },
    {
      name: 'Аксессуары для девочек',
      slug: 'aksessuary-dlya-devochek',
      parentId: 196,
    },
    {
      name: 'Аксессуары для мальчиков',
      slug: 'aksessuary-dlya-malchikov',
      parentId: 196,
    },
    {
      name: 'Аксессуары для путешествий',
      slug: 'aksessuary-dlya-puteshestviy',
      parentId: 197,
    },
    {
      name: 'Багаж',
      slug: 'bagazh',
      parentId: 197,
    },
  ])
}

akseccuary();