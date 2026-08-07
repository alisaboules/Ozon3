import { db } from './index';
import { categories } from './schema';

async function mebel() {
  await db.insert(categories).values([
    {
      name: 'Садовая мебель',
      slug: 'sadovaya-mebel',
      parentId: 15,
    },
    {
      name: 'Мебель для хранения',
      slug: 'mebel-dlya-khraneniya',
      parentId: 15,
    },
    {
      name: 'Мебель для ванной',
      slug: 'mebel-dlya-vannoy',
      parentId: 15,
    },
    {
      name: 'Бескаркасная мебель',
      slug: 'beskarkasnaya-mebel',
      parentId: 15,
    },
    {
      name: 'Детская мебель',
      slug: 'detskaya-mebel',
      parentId: 15,
    },
    {
      name: 'Мебель для спальни и комплектующие',
      slug: 'mebel-dlya-spalni-i-komplektuyushchie',
      parentId: 15,
    },
    {
      name: 'Компьютерная и офисная мебель',
      slug: 'kompyuternaya-i-ofisnaya-mebel',
      parentId: 15,
    },
    {
      name: 'Мягкая мебель',
      slug: 'myagkaya-mebel',
      parentId: 15,
    },
    {
      name: 'Мебель для кухни',
      slug: 'mebel-dlya-kukhni',
      parentId: 15,
    },
    {
      name: 'Мебель для бизнеса',
      slug: 'mebel-dlya-biznesa',
      parentId: 15,
    },
    {
      name: 'Столы и стулья',
      slug: 'stoly-i-stulya',
      parentId: 15,
    },
    {
      name: 'Сейфы и архивные шкафы',
      slug: 'seyfy-i-arkhivnye-shkafy',
      parentId: 15,
    },
    {
      name: 'Комплекты мебели',
      slug: 'komplekty-mebeli',
      parentId: 849,
    },
    {
      name: 'Столы',
      slug: 'stoly',
      parentId: 849,
    },
    {
      name: 'Диваны',
      slug: 'divany',
      parentId: 849,
    },
    {
      name: 'Стулья и кресла',
      slug: 'stulya-i-kresla',
      parentId: 849,
    },
    {
      name: 'Скамейки',
      slug: 'skameyki',
      parentId: 849,
    },
    {
      name: 'Тенты и шатры',
      slug: 'tenty-i-shatry',
      parentId: 849,
    },
    {
      name: 'Качели-гнезда и гамаки',
      slug: 'kacheli-gnezda-i-gamaki',
      parentId: 849,
    },
    {
      name: 'Кресла подвесные садовые',
      slug: 'kresla-podvesnye-sadovye',
      parentId: 849,
    },
    {
      name: 'Качели садовые',
      slug: 'kacheli-sadovye',
      parentId: 849,
    },
    {
      name: 'Лежаки и шезлонги',
      slug: 'lezhaki-i-shezlongi',
      parentId: 849,
    },
    {
      name: 'Шкафы и тумбы',
      slug: 'shkafy-i-tumby',
      parentId: 849,
    },
    {
      name: 'Фурнитура',
      slug: 'furnitura',
      parentId: 849,
    },
    {
      name: 'Чехлы, сетки и матрасы',
      slug: 'chekhly-setki-i-matrasy',
      parentId: 849,
    },
    {
      name: 'Вешалки',
      slug: 'veshalki',
      parentId: 850,
    },
    {
      name: 'Гардеробные системы',
      slug: 'garderobnye-sistemy',
      parentId: 850,
    },
    {
      name: 'Для гостиной',
      slug: 'dlya-gostinoy',
      parentId: 850,
    },
    {
      name: 'Для прихожей',
      slug: 'dlya-prikhozhey',
      parentId: 850,
    },
    {
      name: 'Мебельные модули',
      slug: 'mebelnye-moduli',
      parentId: 850,
    },
    {
      name: 'Комоды и тумбы',
      slug: 'komody-i-tumby',
      parentId: 850,
    },
    {
      name: 'Обувницы',
      slug: 'obuvnitsy',
      parentId: 850,
    },
    {
      name: 'Полки',
      slug: 'polki',
      parentId: 850,
    },
    {
      name: 'Стеллажи',
      slug: 'stellazhi',
      parentId: 850,
    },
    {
      name: 'Шкафы',
      slug: 'shkafy',
      parentId: 850,
    },
    {
      name: 'Тумбы',
      slug: 'tumby',
      parentId: 851,
    },
    {
      name: 'Шкафы и пеналы',
      slug: 'shkafy-i-penaly',
      parentId: 851,
    },
    {
      name: 'Диваны и пуфы бескаркасные',
      slug: 'divany-i-pufy-beskarkasnye',
      parentId: 852,
    },
    {
      name: 'Кресла-мешки',
      slug: 'kresla-meshki',
      parentId: 852,
    },
    {
      name: 'Комплектующие для бескаркасной мебели',
      slug: 'komplektuyushchie-dlya-beskarkasnoy-mebeli',
      parentId: 852,
    },
    {
      name: 'Диваны',
      slug: 'divany',
      parentId: 853,
    },
    {
      name: 'Кресла',
      slug: 'kresla',
      parentId: 853,
    },
    {
      name: 'Кровати',
      slug: 'krovati',
      parentId: 853,
    },
    {
      name: 'Колыбели',
      slug: 'kolybeli',
      parentId: 853,
    },
    {
      name: 'Парты и столы',
      slug: 'party-i-stoly',
      parentId: 853,
    },
    {
      name: 'Наборы детской мебели',
      slug: 'nabory-detskoy-mebeli',
      parentId: 853,
    },
    {
      name: 'Стулья и табуреты',
      slug: 'stulya-i-taburety',
      parentId: 853,
    },
    {
      name: 'Пеленальные комоды и столики',
      slug: 'pelenalnye-komody-i-stoliki',
      parentId: 853,
    },
    {
      name: 'Кровати',
      slug: 'krovati',
      parentId: 854,
    },
    {
      name: 'Комплектующие для кровати',
      slug: 'komplektuyushchie-dlya-krovati',
      parentId: 854,
    },
    {
      name: 'Матрасы',
      slug: 'matrasy',
      parentId: 854,
    },
    {
      name: 'Раскладушки',
      slug: 'raskladushki',
      parentId: 854,
    },
    {
      name: 'Комплекты мебели для спальни',
      slug: 'komplekty-mebeli-dlya-spalni',
      parentId: 854,
    },
    {
      name: 'Столы письменные и компьютерные',
      slug: 'stoly-pismennye-i-kompyuternye',
      parentId: 855,
    },
    {
      name: 'Кресла офисные и компьютерные',
      slug: 'kresla-ofisnye-i-kompyuternye',
      parentId: 855,
    },
    {
      name: 'Стулья офисные',
      slug: 'stulya-ofisnye',
      parentId: 855,
    },
    {
      name: 'Аксессуары для рабочего места',
      slug: 'aksessuary-dlya-rabochego-mesta',
      parentId: 855,
    },
    {
      name: 'Диваны',
      slug: 'divany',
      parentId: 856,
    },
    {
      name: 'Кресла',
      slug: 'kresla',
      parentId: 856,
    },
    {
      name: 'Кресла-качалки',
      slug: 'kresla-kachalki',
      parentId: 856,
    },
    {
      name: 'Пуфы и банкетки',
      slug: 'pufy-i-banketki',
      parentId: 856,
    },
    {
      name: 'Кухонные уголки',
      slug: 'kukhonnye-ugolki',
      parentId: 857,
    },
    {
      name: 'Кухонные гарнитуры',
      slug: 'kukhonnye-garnitury',
      parentId: 857,
    },
    {
      name: 'Кухонные модули',
      slug: 'kukhonnye-moduli',
      parentId: 857,
    },
    {
      name: 'Комплектующие',
      slug: 'komplektuyushchie',
      parentId: 857,
    },
    {
      name: 'Наполнения для кухонных модулей',
      slug: 'napolneniya-dlya-kukhonnykh-moduley',
      parentId: 857,
    },
    {
      name: 'Столешницы для кухни',
      slug: 'stoleshnitsy-dlya-kukhni',
      parentId: 857,
    },
    {
      name: 'Фартуки для кухни',
      slug: 'fartuki-dlya-kukhni',
      parentId: 857,
    },
    {
      name: 'Для торгового зала',
      slug: 'dlya-torgovogo-zala',
      parentId: 858,
    },
    {
      name: 'Для салонов красоты',
      slug: 'dlya-salonov-krasoty',
      parentId: 858,
    },
    {
      name: 'Для производства',
      slug: 'dlya-proizvodstva',
      parentId: 858,
    },
    {
      name: 'Оборудование для ПВЗ',
      slug: 'oborudovanie-dlya-pvz',
      parentId: 858,
    },
    {
      name: 'Мебель для швей',
      slug: 'mebel-dlya-shvey',
      parentId: 858,
    },
    {
      name: 'Столы',
      slug: 'stoly',
      parentId: 859,
    },
    {
      name: 'Стулья',
      slug: 'stulya',
      parentId: 859,
    },
    {
      name: 'Табуреты',
      slug: 'taburety',
      parentId: 859,
    },
    {
      name: 'Туалетные столики и консоли',
      slug: 'tualetnye-stoliki-i-konsoli',
      parentId: 859,
    },
    {
      name: 'Обеденные группы',
      slug: 'obedennye-gruppy',
      parentId: 859,
    },
    {
      name: 'Комплектующие для столов и стульев',
      slug: 'komplektuyushchie-dlya-stolov-i-stulev',
      parentId: 859,
    },
  ]);
}
mebel();
