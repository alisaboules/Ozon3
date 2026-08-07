import { db } from './index';
import { categories } from './schema';

async function tourism() {
  await db.insert(categories).values([
    {
      name: 'Туризм и отдых на природе',
      slug: 'turizm-i-otdykh-na-prirode',
      parentId: 26,
    },
    {
      name: 'Товары для охоты',
      slug: 'tovary-dlya-okhoty',
      parentId: 26,
    },
    {
      name: 'Одежда для рыбалки и охоты',
      slug: 'odezhda-dlya-rybalki-i-okhoty',
      parentId: 26,
    },
    {
      name: 'Рыбалка',
      slug: 'rybalka',
      parentId: 26,
    },
    {
      name: 'Лодки и лодочные моторы',
      slug: 'lodki-i-lodochnye-motory',
      parentId: 26,
    },
    {
      name: 'Тактическая одежда и аксессуары',
      slug: 'takticheskaya-odezhda-i-aksessuary',
      parentId: 26,
    },
    {
      name: 'Обувь для рыбалки и охоты',
      slug: 'obuv-dlya-rybalki-i-okhoty',
      parentId: 26,
    },
    {
      name: 'Наборы для выживания',
      slug: 'nabory-dlya-vyzhivaniya',
      parentId: 26,
    },
    {
      name: 'Палатки, тенты и шатры',
      slug: 'palatki-tenty-i-shatry',
      parentId: 1092,
    },
    {
      name: 'Ножи, лопаты и пилы',
      slug: 'nozhi-lopaty-i-pily',
      parentId: 1092,
    },
    {
      name: 'Туристическая мебель',
      slug: 'turisticheskaya-mebel',
      parentId: 1092,
    },
    {
      name: 'Фонари и аксессуары',
      slug: 'fonari-i-aksessuary',
      parentId: 1092,
    },
    {
      name: 'Насосы',
      slug: 'nasosy',
      parentId: 1092,
    },
    {
      name: 'Спальные мешки',
      slug: 'spalnye-meshki',
      parentId: 1092,
    },
    {
      name: 'Коврики',
      slug: 'kovriki',
      parentId: 1092,
    },
    {
      name: 'Горелки, походные печи и газовые обогреватели',
      slug: 'gorelki-pokhodnye-pechi-i-gazovye-obogrevateli',
      parentId: 1092,
    },
    {
      name: 'Термосы, фляги и питьевые системы',
      slug: 'termosy-flyagi-i-pitevye-sistemy',
      parentId: 1092,
    },
    {
      name: 'Металлоискатели и аксессуары',
      slug: 'metalloiskateli-i-aksessuary',
      parentId: 1092,
    },
    {
      name: 'Рюкзаки и сумки',
      slug: 'ryukzaki-i-sumki',
      parentId: 1092,
    },
    {
      name: 'Термосумки и аксессуары',
      slug: 'termosumki-i-aksessuary',
      parentId: 1092,
    },
    {
      name: 'Походная посуда',
      slug: 'pokhodnaya-posuda',
      parentId: 1092,
    },
    {
      name: 'Тактическая одежда',
      slug: 'takticheskaya-odezhda',
      parentId: 1092,
    },
    {
      name: 'Дождевики',
      slug: 'dozhdeviki',
      parentId: 1092,
    },
    {
      name: 'Альпинизм и скалолазание',
      slug: 'alpinizm-i-skalolazanie',
      parentId: 1092,
    },
    {
      name: 'Компасы и курвиметры',
      slug: 'kompasy-i-kurvimetry',
      parentId: 1092,
    },
    {
      name: 'Тросы',
      slug: 'trosy',
      parentId: 1092,
    },
    {
      name: 'Аксессуары для туризма',
      slug: 'aksessuary-dlya-turizma',
      parentId: 1092,
    },
    {
      name: 'Пневматическое оружие',
      slug: 'pnevmaticheskoe-oruzhie',
      parentId: 1093,
    },
    {
      name: 'Оптика',
      slug: 'optika',
      parentId: 1093,
    },
    {
      name: 'Снаряжение для охоты',
      slug: 'snaryazhenie-dlya-okhoty',
      parentId: 1093,
    },
    {
      name: 'Страйкбольное оружие',
      slug: 'straikbolnoe-oruzhie',
      parentId: 1093,
    },
    {
      name: 'Луки и арбалеты',
      slug: 'luki-i-arbalety',
      parentId: 1093,
    },
    {
      name: 'Спортивная стрельба',
      slug: 'sportivnaya-strelba',
      parentId: 1093,
    },
    {
      name: 'Рогатки',
      slug: 'rogatki',
      parentId: 1093,
    },
    {
      name: 'Средства связи для охоты',
      slug: 'sredstva-svyazi-dlya-okhoty',
      parentId: 1093,
    },
    {
      name: 'Оформления трофеев',
      slug: 'oformleniya-trofeev',
      parentId: 1093,
    },
    {
      name: 'Аксессуары и хранение оружия',
      slug: 'aksessuary-i-khranenie-oruzhiya',
      parentId: 1093,
    },
    {
      name: 'Костюмы',
      slug: 'kostyumy',
      parentId: 1094,
    },
    {
      name: 'Полукомбинезоны',
      slug: 'polukombinezony',
      parentId: 1094,
    },
    {
      name: 'Верхняя одежда',
      slug: 'verkhnyaya-odezhda',
      parentId: 1094,
    },
    {
      name: 'Брюки',
      slug: 'bryuki',
      parentId: 1094,
    },
    {
      name: 'Перчатки, варежки и носки',
      slug: 'perchatki-varezhki-i-noski',
      parentId: 1094,
    },
    {
      name: 'Головные уборы',
      slug: 'golovnye-ubory',
      parentId: 1094,
    },
    {
      name: 'Рубашки, футболки и худи',
      slug: 'rubashki-futbolki-i-khudi',
      parentId: 1094,
    },
    {
      name: 'Одежда для зимней рыбалки',
      slug: 'odezhda-dlya-zimney-rybalki',
      parentId: 1094,
    },
    {
      name: 'Удочки, удилища и спиннинги',
      slug: 'udochki-udilishcha-i-spinningi',
      parentId: 1095,
    },
    {
      name: 'Катушки',
      slug: 'katushki',
      parentId: 1095,
    },
    {
      name: 'Приманки и снасти',
      slug: 'primanki-i-snasti',
      parentId: 1095,
    },
    {
      name: 'Лески и плетеные шнуры',
      slug: 'leski-i-pletenye-shnury',
      parentId: 1095,
    },
    {
      name: 'Эхолоты, подводные камеры и аксессуары',
      slug: 'ekholoty-podvodnye-kamery-i-aksessuary',
      parentId: 1095,
    },
    {
      name: 'Хранение и переноски',
      slug: 'khranenie-i-perenoski',
      parentId: 1095,
    },
    {
      name: 'Прикормки, насадки и ароматизаторы',
      slug: 'prikormki-nasadki-i-aromatizatory',
      parentId: 1095,
    },
    {
      name: 'Грузила',
      slug: 'gruzila',
      parentId: 1095,
    },
    {
      name: 'Ледобуры и аксессуары',
      slug: 'ledobury-i-aksessuary',
      parentId: 1095,
    },
    {
      name: 'Снаряжение',
      slug: 'snaryazhenie',
      parentId: 1095,
    },
    {
      name: 'Аксессуары рыболовные',
      slug: 'aksessuary-rybolovnye',
      parentId: 1095,
    },
    {
      name: 'Лодки, байдарки и каяки',
      slug: 'lodki-baydarki-i-kayaki',
      parentId: 1096,
    },
    {
      name: 'Моторы',
      slug: 'motory',
      parentId: 1096,
    },
    {
      name: 'Запчасти и аксессуары для моторов',
      slug: 'zapchasti-i-aksessuary-dlya-motorov',
      parentId: 1096,
    },
    {
      name: 'Аксессуары для лодок',
      slug: 'aksessuary-dlya-lodok',
      parentId: 1096,
    },
    {
      name: 'Спасательные жилеты',
      slug: 'spasatelnye-zhilety',
      parentId: 1096,
    },
    {
      name: 'Средства спасения',
      slug: 'sredstva-spaseniya',
      parentId: 1096,
    },
    {
      name: 'Аксессуары',
      slug: 'aksessuary',
      parentId: 1096,
    },
    {
      name: 'Бронежилеты и бронешлемы',
      slug: 'bronezhilety-i-broneshlemy',
      parentId: 1097,
    },
    {
      name: 'Ремни и разгрузочные системы',
      slug: 'remni-i-razgruzochnye-sistemy',
      parentId: 1097,
    },
    {
      name: 'Тактическая одежда',
      slug: 'takticheskaya-odezhda',
      parentId: 1097,
    },
    {
      name: 'Перчатки',
      slug: 'perchatki',
      parentId: 1097,
    },
    {
      name: 'Сумки и рюкзаки',
      slug: 'sumki-i-ryukzaki',
      parentId: 1097,
    },
  ]);
}
tourism();
