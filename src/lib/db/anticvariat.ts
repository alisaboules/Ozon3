import { db } from './index';
import { categories } from './schema';

async function anticvariat() {
  await db.insert(categories).values([
    {
      name: "Коллекционирование",
      slug: "kollektsionirovanie",
      parentId: 4,
    },
    {
      name: "Посуда и утварь",
      slug: "posuda-i-utvar",
      parentId: 4,
    },
    {
      name: "Предметы интерьера",
      slug: "predmety-interera",
      parentId: 4,
    },
    {
      name: "Предметы быта",
      slug: "predmety-byta",
      parentId: 4,
    },
    {
      name: "Живопись и графика",
      slug: "zhivopis-i-grafika",
      parentId: 4,
    },
    {
      name: "Предметы военной истории",
      slug: "predmety-voennoy-istorii",
      parentId: 4,
    },
    {
      name: "Украшения",
      slug: "ukrasheniya",
      parentId: 4,
    },
    {
      name: "Канцелярия",
      slug: "kantselyariya",
      parentId: 4,
    },
    {
      name: "Приборы и инструменты",
      slug: "pribory-i-instrumenty",
      parentId: 4,
    },
    {
      name: "Галантерея",
      slug: "galantereya",
      parentId: 4,
    },
    {
      name: "Товары для курения",
      slug: "tovary-dlya-kureniya",
      parentId: 4,
    },
    {
      name: 'Банкноты',
      slug: 'banknoty',
      parentId: 235,
    },
    {
      name: 'Билеты',
      slug: 'bilety',
      parentId: 235,
    },
    {
      name: 'Жетоны',
      slug: 'zhetony',
      parentId: 235,
    },
    {
      name: 'Значки',
      slug: 'znachki',
      parentId: 235,
    },
    {
      name: 'Карточки',
      slug: 'kartochki',
      parentId: 235,
    },
    {
      name: 'Насекомые',
      slug: 'nasekomye',
      parentId: 235,
    },
    {
      name: 'Куклы',
      slug: 'kukly',
      parentId: 235,
    },
    {
      name: 'Марки',
      slug: 'marki',
      parentId: 235,
    },
    {
      name: 'Минералы и окаменелости',
      slug: 'mineraly-i-okamenelosti',
      parentId: 235,
    },
    {
      name: 'Модели и фигурки',
      slug: 'modeli-i-figurki',
      parentId: 235,
    },
    {
      name: 'Монеты',
      slug: 'monety',
      parentId: 235,
    },
    {
      name: 'Наборы',
      slug: 'nabory',
      parentId: 235,
    },
    {
      name: 'Наклейки',
      slug: 'nakleyki',
      parentId: 235,
    },
    {
      name: 'Наперстки',
      slug: 'naperstki',
      parentId: 235,
    },
    {
      name: 'Открытки и конверты',
      slug: 'otkrytki-i-konverty',
      parentId: 235,
    },
    {
      name: 'Средства для ухода',
      slug: 'sredstva-dlya-ukhoda',
      parentId: 235,
    },
    {
      name: 'Хранение коллекций',
      slug: 'khranenie-kollektsiy',
      parentId: 235,
    },
    {
      name: 'Ценные бумаги',
      slug: 'tsennye-bumagi',
      parentId: 235,
    },
    {
      name: 'Этикетки и пробки',
      slug: 'etiketki-i-probki',
      parentId: 235,
    },
    {
      name: 'Посуда для чая и кофе',
      slug: 'posuda-dlya-chaya-i-kofe',
      parentId: 236,
    },
    {
      name: 'Сервизы',
      slug: 'servizy',
      parentId: 236,
    },
    {
      name: 'Кухоння утварь',
      slug: 'kukhonnya-utvar',
      parentId: 236,
    },
    {
      name: 'Игрушки и игры',
      slug: 'igrushki-i-igry',
      parentId: 237,
    },
    {
      name: 'Бытовые товары',
      slug: 'bytovye-tovary',
      parentId: 237,
    }, 
    {
      name: 'Скульптуры и статуэтки',
      slug: 'skulptury-i-statuetki',
      parentId: 238,
    },
    {
      name: 'Вазы, кашпо',
      slug: 'vazy-kashpo',
      parentId: 238,
    },
    {
      name: 'Элементы интерьера',
      slug: 'elementy-interera',
      parentId: 238,
    },
    {
      name: 'Подсвечники и аромалампы',
      slug: 'podsvechniki-i-aromalamy',
      parentId: 238,
    },
    {
      name: 'Освещение',
      slug: 'osveshchenie',
      parentId: 238,
    },
    {
      name: 'Подставки',
      slug: 'podstavki',
      parentId: 238,
    },
    {
      name: 'Гравюры и литографии',
      slug: 'gravury-i-litography',
      parentId: 239,
    },
    {
      name: 'Плакаты, журналы и фотографии',
      slug: 'plakaty-zhurnaly-i-photo',
      parentId: 239,
    }
  ])
}
anticvariat();