import { db } from './index';
import { categories } from './schema';

async function dress_shoes() {
  await db.insert(categories).values([
    {
      name: 'Женская одежда',
      slug: 'zhenskaya-odezhda',
      parentId: 18,
    },
    {
      name: 'Мужская одежда',
      slug: 'muzhskaya-odezhda',
      parentId: 18,
    },
    {
      name: 'Детская одежда',
      slug: 'detskaya-odezhda',
      parentId: 18,
    },
    {
      name: 'Униформа и рабочая одежда',
      slug: 'uniforma-i-rabochaya-odezhda',
      parentId: 18,
    },
    {
      name: 'Уход за одеждой',
      slug: 'ukhod-za-odezhdoy',
      parentId: 18,
    },
    {
      name: 'Женская обувь',
      slug: 'zhenskaya-obuv',
      parentId: 17,
    },
    {
      name: 'Мужская обувь',
      slug: 'muzhskaya-obuv',
      parentId: 17,
    },
    {
      name: 'Детская обувь',
      slug: 'detskaya-obuv',
      parentId: 17,
    },
    {
      name: 'Уход и аксессуары',
      slug: 'ukhod-i-aksessuary',
      parentId: 17,
    },
    {
      name: 'Блузы и рубашки',
      slug: 'bluzy-i-rubashki',
      parentId: 660,
    },
    {
      name: 'Брюки, бриджи и капри',
      slug: 'bryuki-bridzhi-i-kapri',
      parentId: 660,
    },
    {
      name: 'Верхняя одежда',
      slug: 'verkhnyaya-odezhda',
      parentId: 660,
    },
    {
      name: 'Джемперы, свитеры и кардиганы',
      slug: 'dzhempery-svitery-i-kardigany',
      parentId: 660,
    },
    {
      name: 'Джинсы и джеггинсы',
      slug: 'dzhinsy-i-dzhegginsy',
      parentId: 660,
    },
    {
      name: 'Домашняя одежда',
      slug: 'domashnyaya-odezhda',
      parentId: 660,
    },
    {
      name: 'Комбинезоны',
      slug: 'kombinezony',
      parentId: 660,
    },
    {
      name: 'Костюмы и комплекты',
      slug: 'kostyumy-i-komplekty',
      parentId: 660,
    },
    {
      name: 'Купальники и пляжная одежда',
      slug: 'kupalniki-i-plyazhnaya-odezhda',
      parentId: 660,
    },
    {
      name: 'Лонгсливы',
      slug: 'longslivy',
      parentId: 660,
    },
    {
      name: 'Нижнее белье',
      slug: 'nizhnee-bele',
      parentId: 660,
    },
    {
      name: 'Носки, колготки и чулки',
      slug: 'noski-kolgotki-i-chulki',
      parentId: 660,
    },
    {
      name: 'Пиджаки, жакеты и жилеты',
      slug: 'pidzhaki-zhakety-i-zhilety',
      parentId: 660,
    },
    {
      name: 'Платья и сарафаны',
      slug: 'platya-i-sarafany',
      parentId: 660,
    },
    {
      name: 'Термобелье',
      slug: 'termobele',
      parentId: 660,
    },
    {
      name: 'Толстовки, свитшоты и худи',
      slug: 'tolstovki-svitshoty-i-khudi',
      parentId: 660,
    },
    {
      name: 'Туники',
      slug: 'tuniki',
      parentId: 660,
    },
    {
      name: 'Футболки и топы',
      slug: 'futbolki-i-topy',
      parentId: 660,
    },
    {
      name: 'Шорты',
      slug: 'shorty',
      parentId: 660,
    },
    {
      name: 'Юбки',
      slug: 'yubki',
      parentId: 660,
    },
    {
      name: 'Одежда больших размеров',
      slug: 'odezhda-bolshikh-razmerov',
      parentId: 660,
    },
    {
      name: 'Одежда для беременных',
      slug: 'odezhda-dlya-beremennykh',
      parentId: 660,
    },
    {
      name: 'Свадебные платья',
      slug: 'svadebnye-platya',
      parentId: 660,
    },
    {
      name: 'Брюки',
      slug: 'bryuki',
      parentId: 661,
    },
    {
      name: 'Верхняя одежда',
      slug: 'verkhnyaya-odezhda',
      parentId: 661,
    },
    {
      name: 'Джемперы, свитеры и кардиганы',
      slug: 'dzhempery-svitery-i-kardigany',
      parentId: 661,
    },
    {
      name: 'Джинсы',
      slug: 'dzhinsy',
      parentId: 661,
    },
    {
      name: 'Домашняя одежда',
      slug: 'domashnyaya-odezhda',
      parentId: 661,
    },
    {
      name: 'Комбинезоны',
      slug: 'kombinezony',
      parentId: 661,
    },
    {
      name: 'Костюмы и комплекты',
      slug: 'kostyumy-i-komplekty',
      parentId: 661,
    },
    {
      name: 'Лонгсливы',
      slug: 'longslivy',
      parentId: 661,
    },
    {
      name: 'Нижнее белье',
      slug: 'nizhnee-bele',
      parentId: 661,
    },
    {
      name: 'Носки и гетры',
      slug: 'noski-i-getry',
      parentId: 661,
    },
    {
      name: 'Пиджаки, жилеты и жакеты',
      slug: 'pidzhaki-zhilety-i-zhakety',
      parentId: 661,
    },
    {
      name: 'Пляжная одежда',
      slug: 'plyazhnaya-odezhda',
      parentId: 661,
    },
    {
      name: 'Рубашки',
      slug: 'rubashki',
      parentId: 661,
    },
    {
      name: 'Термобелье',
      slug: 'termobele',
      parentId: 661,
    },
    {
      name: 'Толстовки, свитшоты и худи',
      slug: 'tolstovki-svitshoty-i-khudi',
      parentId: 661,
    },
    {
      name: 'Футболки и майки',
      slug: 'futbolki-i-mayki',
      parentId: 661,
    },
    {
      name: 'Шорты',
      slug: 'shorty',
      parentId: 661,
    },
    {
      name: 'Одежда больших размеров',
      slug: 'odezhda-bolshikh-razmerov',
      parentId: 661,
    },
    {
      name: 'Одежда для девочек',
      slug: 'odezhda-dlya-devochek',
      parentId: 662,
    },
    {
      name: 'Одежда для мальчиков',
      slug: 'odezhda-dlya-malchikov',
      parentId: 662,
    },
    {
      name: 'Одежда для новорожденных',
      slug: 'odezhda-dlya-novorozhdennykh',
      parentId: 662,
    },
    {
      name: 'Школа',
      slug: 'shkola',
      parentId: 662,
    },
    {
      name: 'Академическая одежда',
      slug: 'akademicheskaya-odezhda',
      parentId: 663,
    },
    {
      name: 'Медицинская одежда',
      slug: 'meditsinskaya-odezhda',
      parentId: 663,
    },
    {
      name: 'Поварам и официантам',
      slug: 'povaram-i-ofitsiantam',
      parentId: 663,
    },
    {
      name: 'Рабочая спецодежда',
      slug: 'rabochaya-spetsodezhda',
      parentId: 663,
    },
    {
      name: 'Сигнальная одежда',
      slug: 'signelnaya-odezhda',
      parentId: 663,
    },
    {
      name: 'Форменная одежда',
      slug: 'formennaya-odezhda',
      parentId: 663,
    },
    {
      name: 'Бретели, резинки и штрипки',
      slug: 'breteli-rezinki-i-shtripki',
      parentId: 664,
    },
    {
      name: 'Красители',
      slug: 'krasiteli',
      parentId: 664,
    },
    {
      name: 'Машинки для удаления катышков',
      slug: 'mashinki-dlya-udaleniya-katyshkov',
      parentId: 664,
    },
    {
      name: 'Ролики и щётки',
      slug: 'roliki-i-shchetki',
      parentId: 664,
    },
    {
      name: 'Средства для ухода за одеждой',
      slug: 'sredstva-dlya-ukhoda-za-odezhdoy',
      parentId: 664,
    },
    {
      name: 'Аквашузы',
      slug: 'akvashuzy',
      parentId: 665,
    },
    {
      name: 'Босоножки и сандалии',
      slug: 'bosonozhki-i-sandalii',
      parentId: 665,
    },
    {
      name: 'Ботинки и полуботинки',
      slug: 'botinki-i-polubotinki',
      parentId: 665,
    },
    {
      name: 'Домашняя обувь',
      slug: 'domashnyaya-obuv',
      parentId: 665,
    },
    {
      name: 'Кроссовки и кеды',
      slug: 'krossovki-i-kedy',
      parentId: 665,
    },
    {
      name: 'Мокасины и топсайдеры',
      slug: 'mokasiny-i-topsaydery',
      parentId: 665,
    },
    {
      name: 'Резиновая обувь',
      slug: 'rezinovaya-obuv',
      parentId: 665,
    },
    {
      name: 'Сабо и мюли',
      slug: 'sabo-i-myuli',
      parentId: 665,
    },
    {
      name: 'Сапоги и полусапоги',
      slug: 'sapogi-i-polysapogi',
      parentId: 665,
    },
    {
      name: 'Туфли и балетки',
      slug: 'tufli-i-baletki',
      parentId: 665,
    },
    {
      name: 'Угги, валенки и дутики',
      slug: 'uggi-valenki-i-dutiki',
      parentId: 665,
    },
    {
      name: 'Шлепанцы и сланцы',
      slug: 'shlepantsy-i-slantsy',
      parentId: 665,
    },
    {
      name: 'Эспадрильи',
      slug: 'espadrili',
      parentId: 665,
    },
    {
      name: 'Медицинская обувь',
      slug: 'meditsinskaya-obuv',
      parentId: 665,
    },
    {
      name: 'Рабочая обувь',
      slug: 'rabochaya-obuv',
      parentId: 665,
    },
    {
      name: 'Аквашузы',
      slug: 'akvashuzy',
      parentId: 666,
    },
    {
      name: 'Ботинки и полуботинки',
      slug: 'botinki-i-polubotinki',
      parentId: 666,
    },
    {
      name: 'Домашняя обувь',
      slug: 'domashnyaya-obuv',
      parentId: 666,
    },
    {
      name: 'Кеды, кроссовки и слипоны',
      slug: 'kedy-krossovki-i-slipony',
      parentId: 666,
    },
    {
      name: 'Мокасины и топсайдеры',
      slug: 'mokasiny-i-topsaydery',
      parentId: 666,
    },
    {
      name: 'Резиновая обувь',
      slug: 'rezinovaya-obuv',
      parentId: 666,
    },
    {
      name: 'Сандалии',
      slug: 'sandalii',
      parentId: 666,
    },
    {
      name: 'Сапоги и полусапоги',
      slug: 'sapogi-i-polysapogi',
      parentId: 666,
    },
    {
      name: 'Туфли',
      slug: 'tufli',
      parentId: 666,
    },
    {
      name: 'Угги, валенки и дутики',
      slug: 'uggi-valenki-i-dutiki',
      parentId: 666,
    },
    {
      name: 'Шлепанцы и сланцы',
      slug: 'shlepantsy-i-slantsy',
      parentId: 666,
    },
    {
      name: 'Эспадрильи',
      slug: 'espadrili',
      parentId: 666,
    },
    {
      name: 'Медицинская обувь',
      slug: 'meditsinskaya-obuv',
      parentId: 666,
    },
    {
      name: 'Рабочая обувь',
      slug: 'rabochaya-obuv',
      parentId: 666,
    },
    {
      name: 'Обувь для девочек',
      slug: 'obuv-dlya-devochek',
      parentId: 667,
    },
    {
      name: 'Обувь для мальчиков',
      slug: 'obuv-dlya-malchikov',
      parentId: 667,
    },
    {
      name: 'Школа',
      slug: 'shkola',
      parentId: 667,
    },
    {
      name: 'Губки и щетки',
      slug: 'gubki-i-shchetki',
      parentId: 668,
    },
    {
      name: 'Измерители стопы',
      slug: 'izmeriteli-stopy',
      parentId: 668,
    },
    {
      name: 'Колодки',
      slug: 'kolodki',
      parentId: 668,
    },
    {
      name: 'Косметика и чистящие средства',
      slug: 'kosmetika-i-chistyashchie-sredstva',
      parentId: 668,
    },
    {
      name: 'Ледострупы и противоскользящие наклейки',
      slug: 'ledostrupy-i-protivoskolzyashchie-nakleyki',
      parentId: 668,
    },
    {
      name: 'Ложки и рожки',
      slug: 'lozhki-i-rozhki',
      parentId: 668,
    },
    {
      name: 'Растяжители',
      slug: 'rastyazhiteli',
      parentId: 668,
    },
    {
      name: 'Стельки',
      slug: 'stelki',
      parentId: 668,
    },
    {
      name: 'Сушилки для обуви',
      slug: 'sushilki-dlya-obuvi',
      parentId: 668,
    },
    {
      name: 'Украшения',
      slug: 'ukrasheniya',
      parentId: 668,
    },
    {
      name: 'Чехлы и защита для обуви',
      slug: 'chekhly-i-zashchita-dlya-obuvi',
      parentId: 668,
    },
    {
      name: 'Шнурки',
      slug: 'shnurki',
      parentId: 668,
    },
  ]);
}
dress_shoes();
