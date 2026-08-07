import { db } from './index';
import { categories } from './schema';

async function animals() {
  await db.insert(categories).values([
    {
      name: 'Для кошек',
      slug: 'dlya-koshek',
      parentId: 24,
    },
    {
      name: 'Для собак',
      slug: 'dlya-sobak',
      parentId: 24,
    },
    {
      name: 'Для птиц',
      slug: 'dlya-ptits',
      parentId: 24,
    },
    {
      name: 'Для рыб и рептилий',
      slug: 'dlya-ryb-i-reptiliy',
      parentId: 24,
    },
    {
      name: 'Для грызунов и хорьков',
      slug: 'dlya-gryzunov-i-khorkov',
      parentId: 24,
    },
    {
      name: 'Для лошадей',
      slug: 'dlya-loshadey',
      parentId: 24,
    },
    {
      name: 'Ветаптека',
      slug: 'vetapteka',
      parentId: 24,
    },
    {
      name: 'Фермерское хозяйство',
      slug: 'fermerskoe-khozyaystvo',
      parentId: 24,
    },
    {
      name: 'Ветеринарное оборудование',
      slug: 'veterinarnoe-oborudovanie',
      parentId: 24,
    },
    {
      name: 'Корма и лакомства',
      slug: 'korma-i-lakomstva',
      parentId: 769,
    },
    {
      name: 'Туалеты и наполнители',
      slug: 'tualety-i-napolniteli',
      parentId: 769,
    },
    {
      name: 'Когтеточки и игровые комплексы',
      slug: 'kogtetochki-i-igrovye-kompleksy',
      parentId: 769,
    },
    {
      name: 'Домики',
      slug: 'domiki',
      parentId: 769,
    },
    {
      name: 'Лежанки',
      slug: 'lezhanki',
      parentId: 769,
    },
    {
      name: 'Переноски',
      slug: 'perenoski',
      parentId: 769,
    },
    {
      name: 'Клетки и ограждения',
      slug: 'kletki-i-ograzhdeniya',
      parentId: 769,
    },
    {
      name: 'Игрушки',
      slug: 'igrushki',
      parentId: 769,
    },
    {
      name: 'Ошейники и поводки',
      slug: 'osheyniki-i-povodki',
      parentId: 769,
    },
    {
      name: 'Посуда для кошек',
      slug: 'posuda-dlya-koshek',
      parentId: 769,
    },
    {
      name: 'Груминг',
      slug: 'gruming',
      parentId: 769,
    },
    {
      name: 'Средства для ухода',
      slug: 'sredstva-dlya-ukhoda',
      parentId: 769,
    },
    {
      name: 'Одежда',
      slug: 'odezhda',
      parentId: 769,
    },
    {
      name: 'Коррекция поведения',
      slug: 'korrektsiya-povedeniya',
      parentId: 769,
    },
    {
      name: 'Ритуальные товары',
      slug: 'ritualnye-tovary',
      parentId: 769,
    },
    {
      name: 'Корма и лакомства',
      slug: 'korma-i-lakomstva',
      parentId: 770,
    },
    {
      name: 'Игрушки',
      slug: 'igrushki',
      parentId: 770,
    },
    {
      name: 'Амуниция',
      slug: 'amunitsiya',
      parentId: 770,
    },
    {
      name: 'Лежаки и домики',
      slug: 'lezhaki-i-domiki',
      parentId: 770,
    },
    {
      name: 'Посуда',
      slug: 'posuda',
      parentId: 770,
    },
    {
      name: 'Груминг',
      slug: 'gruming',
      parentId: 770,
    },
    {
      name: 'Средства для ухода',
      slug: 'sredstva-dlya-ukhoda',
      parentId: 770,
    },
    {
      name: 'Одежда',
      slug: 'odezhda',
      parentId: 770,
    },
    {
      name: 'Обувь',
      slug: 'obuv',
      parentId: 770,
    },
    {
      name: 'Переноски',
      slug: 'perenoski',
      parentId: 770,
    },
    {
      name: 'Аксессуары для перевозки',
      slug: 'aksessuary-dlya-perevozki',
      parentId: 770,
    },
    {
      name: 'Туалеты и пеленки',
      slug: 'tualety-i-pelenki',
      parentId: 770,
    },
    {
      name: 'Вольеры и будки',
      slug: 'volery-i-budki',
      parentId: 770,
    },
    {
      name: 'Дрессировка собак',
      slug: 'dressirovka-sobak',
      parentId: 770,
    },
    {
      name: 'Средства для коррекции поведения',
      slug: 'sredstva-dlya-korrektsii-povedeniya',
      parentId: 770,
    },
    {
      name: 'Ритуальные товары',
      slug: 'ritualnye-tovary',
      parentId: 770,
    },
    {
      name: 'Корма и лакомства',
      slug: 'korma-i-lakomstva',
      parentId: 771,
    },
    {
      name: 'Клетки',
      slug: 'kletki',
      parentId: 771,
    },
    {
      name: 'Игрушки',
      slug: 'igrushki',
      parentId: 771,
    },
    {
      name: 'Поилки, кормушки',
      slug: 'poilki-kormushki',
      parentId: 771,
    },
    {
      name: 'Чехлы и колеса для клеток',
      slug: 'chekhly-i-kolesa-dlya-kletok',
      parentId: 771,
    },
    {
      name: 'Купалки и песок',
      slug: 'kupalki-i-pesok',
      parentId: 771,
    },
    {
      name: 'Светильники и лампы',
      slug: 'svetilniki-i-lampy',
      parentId: 771,
    },
    {
      name: 'Переноски',
      slug: 'perenoski',
      parentId: 771,
    },
    {
      name: 'Одежда',
      slug: 'odezhda',
      parentId: 771,
    },
    {
      name: 'Дрессировка и воспитание',
      slug: 'dressirovka-i-vospitanie',
      parentId: 771,
    },
    {
      name: 'Скворечники и гнезда',
      slug: 'skvorechniki-i-gnezda',
      parentId: 771,
    },
    {
      name: 'Аквариумы и аксессуары',
      slug: 'akvariumy-i-aksessuary',
      parentId: 772,
    },
    {
      name: 'Террариумы и аксессуары',
      slug: 'terrariumy-i-aksessuary',
      parentId: 772,
    },
    {
      name: 'Корма для рыб',
      slug: 'korma-dlya-ryb',
      parentId: 772,
    },
    {
      name: 'Корма для рептилий и других насекомоядных',
      slug: 'korma-dlya-reptiliy-i-drugikh-nasekomoyadnykh',
      parentId: 772,
    },
    {
      name: 'Муравьиные фермы',
      slug: 'muravinye-fermy',
      parentId: 772,
    },
    {
      name: 'Корма и лакомства',
      slug: 'korma-i-lakomstva',
      parentId: 773,
    },
    {
      name: 'Клетки',
      slug: 'kletki',
      parentId: 773,
    },
    {
      name: 'Переноски',
      slug: 'perenoski',
      parentId: 773,
    },
    {
      name: 'Игрушки',
      slug: 'igrushki',
      parentId: 773,
    },
    {
      name: 'Домики и лежаки',
      slug: 'domiki-i-lezhaki',
      parentId: 773,
    },
    {
      name: 'Туалеты и наполнители',
      slug: 'tualety-i-napolniteli',
      parentId: 773,
    },
    {
      name: 'Миски, поилки',
      slug: 'miski-poilki',
      parentId: 773,
    },
    {
      name: 'Средства для ухода',
      slug: 'sredstva-dlya-ukhoda',
      parentId: 773,
    },
    {
      name: 'Инструменты для ухода',
      slug: 'instrumenty-dlya-ukhoda',
      parentId: 773,
    },
    {
      name: 'Шлейки и амуниция',
      slug: 'shleyki-i-amunitsiya',
      parentId: 773,
    },
    {
      name: 'Корм для лошадей',
      slug: 'korm-dlya-loshadey',
      parentId: 774,
    },
    {
      name: 'Амуниция для лошадей',
      slug: 'amunitsiya-dlya-loshadey',
      parentId: 774,
    },
    {
      name: 'Средства для ухода',
      slug: 'sredstva-dlya-ukhoda',
      parentId: 774,
    },
    {
      name: 'Оборудование для конюшни',
      slug: 'oborudovanie-dlya-konyushni',
      parentId: 774,
    },
    {
      name: 'Подковы и инструменты для ковки',
      slug: 'podkovy-i-instrumenty-dlya-kovki',
      parentId: 774,
    },
    {
      name: 'Лекарственные препараты',
      slug: 'lekarstvennye-preparaty',
      parentId: 775,
    },
    {
      name: 'Парафармацевтика',
      slug: 'parafarmatsevtika',
      parentId: 775,
    },
    {
      name: 'Медицинские инструменты и оборудование',
      slug: 'meditsinskie-instrumenty-i-oborudovanie',
      parentId: 775,
    },
    {
      name: 'Расходные материалы',
      slug: 'raskhodnye-materialy',
      parentId: 775,
    },
    {
      name: 'Товары для животных-инвалидов',
      slug: 'tovary-dlya-zhivotnykh-invalidov',
      parentId: 775,
    },
    {
      name: 'Оборудование',
      slug: 'oborudovanie',
      parentId: 776,
    },
    {
      name: 'Содержание с/х животных и птиц',
      slug: 'soderzhanie-selskohozyaystvennykh-zhivotnykh-i-ptits',
      parentId: 776,
    },
    {
      name: 'Корма и добавки',
      slug: 'korma-i-dobavki',
      parentId: 776,
    },
    {
      name: 'Товары для пчеловодства',
      slug: 'tovary-dlya-pchelovodstva',
      parentId: 776,
    },
  ]);
}
animals();
