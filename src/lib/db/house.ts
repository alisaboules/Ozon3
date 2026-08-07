import { db } from './index';
import { categories } from './schema';

async function house() {
  await db.insert(categories).values([
    {
      name: 'Посуда и кухонные принадлежности',
      slug: 'posuda-i-kukhonnye-prinadlezhnosti',
      parentId: 10,
    },
    {
      name: 'Цветы, растения и горшки',
      slug: 'tsvety-rasteniya-i-gorshki',
      parentId: 10,
    },
    {
      name: 'Сувениры и подарки',
      slug: 'suveniry-i-podarki',
      parentId: 10,
    },
    {
      name: 'Текстиль',
      slug: 'tekstil',
      parentId: 10,
    },
    {
      name: 'Хозяйственные товары',
      slug: 'khozyaystvennye-tovary',
      parentId: 10,
    },
    {
      name: 'Товары для праздников',
      slug: 'tovary-dlya-prazdnikov',
      parentId: 10,
    },
    {
      name: 'Освещение',
      slug: 'osveshchenie',
      parentId: 10,
    },
    {
      name: 'Хранение вещей',
      slug: 'khranenie-veshchey',
      parentId: 10,
    },
    {
      name: 'Религиозные предметы',
      slug: 'religioznye-predmety',
      parentId: 10,
    },
    {
      name: 'Декор и интерьер',
      slug: 'dekor-i-interer',
      parentId: 10,
    },
    {
      name: 'Аксессуары для ванной',
      slug: 'aksessuary-dlya-vannoy',
      parentId: 10,
    },
    {
      name: 'Ритуальные товары',
      slug: 'ritualnye-tovary',
      parentId: 10,
    },
    {
      name: 'Дача и сад',
      slug: 'dacha-i-sad',
      parentId: 10,
    },
    {
      name: 'Товары для бань и саун',
      slug: 'tovary-dlya-ban-i-saun',
      parentId: 10,
    },
    {
      name: 'Посуда для приготовления',
      slug: 'posuda-dlya-prigotovleniya',
      parentId: 405,
    },
    {
      name: 'Кухонные принадлежности',
      slug: 'kukhonnye-prinadlezhnosti',
      parentId: 405,
    },
    {
      name: 'Ножи и разделочные доски',
      slug: 'nozhi-i-razdelochnye-doski',
      parentId: 405,
    },
    {
      name: 'Столовая посуда',
      slug: 'stolovaya-posuda',
      parentId: 405,
    },
    {
      name: 'Чайники и кофейники',
      slug: 'chayniki-i-kofeyniki',
      parentId: 405,
    },
    {
      name: 'Бар',
      slug: 'bar',
      parentId: 405,
    },
    {
      name: 'Столовые приборы',
      slug: 'stolovye-pribory',
      parentId: 405,
    },
    {
      name: 'Предметы для сервировки стола',
      slug: 'predmety-dlya-servirovki-stola',
      parentId: 405,
    },
    {
      name: 'Товары для консервирования',
      slug: 'tovary-dlya-konservirovaniya',
      parentId: 405,
    },
    {
      name: 'Термосы и термокружки',
      slug: 'termosy-i-termokruzhki',
      parentId: 405,
    },
    {
      name: 'Хранение продуктов',
      slug: 'khranenie-produktov',
      parentId: 405,
    },
    {
      name: 'Посуда для детей',
      slug: 'posuda-dlya-detey',
      parentId: 405,
    },
    {
      name: 'Одноразовая посуда и скатерти',
      slug: 'odnorazovaya-posuda-i-skaterti',
      parentId: 405,
    },
    {
      name: 'Фильтры для воды',
      slug: 'filtry-dlya-vody',
      parentId: 405,
    },
    {
      name: 'Грунты, удобрения и садовая химия',
      slug: 'grunty-udobreniya-i-sadovaya-khimiya',
      parentId: 406,
    },
    {
      name: 'Защита и уход за растениями',
      slug: 'zashchita-i-ukhod-za-rasteniyami',
      parentId: 406,
    },
    {
      name: 'Цветы',
      slug: 'tsvety',
      parentId: 406,
    },
    {
      name: 'Горшки и кашпо',
      slug: 'gorshki-i-kashpo',
      parentId: 406,
    },
    {
      name: 'Лейки и пульверизаторы',
      slug: 'leyki-i-pulverizatory',
      parentId: 406,
    },
    {
      name: 'Подставки и крепления',
      slug: 'podstavki-i-krepleniya',
      parentId: 406,
    },
    {
      name: 'Семена и саженцы',
      slug: 'semena-i-sazhentsy',
      parentId: 406,
    },
    {
      name: 'Подарочные наборы',
      slug: 'podarochnye-nabory',
      parentId: 407,
    },
    {
      name: 'Флаги',
      slug: 'flagi',
      parentId: 407,
    },
    {
      name: 'Сувениры',
      slug: 'suveniry',
      parentId: 407,
    },
    {
      name: 'Сувенирное оружие',
      slug: 'suvenirovnoe-oruzhie',
      parentId: 407,
    },
    {
      name: 'Матрешки',
      slug: 'matreshki',
      parentId: 407,
    },
    {
      name: 'Магниты на холодильник',
      slug: 'magnity-na-kholodilnik',
      parentId: 407,
    },
    {
      name: 'Сувенирные деньги',
      slug: 'suvenirovnye-dengi',
      parentId: 407,
    },
    {
      name: 'Вееры',
      slug: 'veery',
      parentId: 407,
    },
    {
      name: 'Сувенирное мыло',
      slug: 'suvenirovnoe-mylo',
      parentId: 407,
    },
    {
      name: 'Шары со снегом',
      slug: 'shary-so-snegom',
      parentId: 407,
    },
    {
      name: 'Шторы и карнизы',
      slug: 'shtory-i-karnizy',
      parentId: 408,
    },
    {
      name: 'Постельное белье',
      slug: 'postelnoe-bele',
      parentId: 408,
    },
    {
      name: 'Подушки',
      slug: 'podushki',
      parentId: 408,
    },
    {
      name: 'Одеяла',
      slug: 'odeyala',
      parentId: 408,
    },
    {
      name: 'Пледы и покрывала',
      slug: 'pledy-i-pokryvala',
      parentId: 408,
    },
    {
      name: 'Текстиль с электроподогревом',
      slug: 'tekstil-s-elektropodogrevom',
      parentId: 408,
    },
    {
      name: 'Ковры и ковровые дорожки',
      slug: 'kovry-i-kovrovye-dorozhki',
      parentId: 408,
    },
    {
      name: 'Полотенца',
      slug: 'polotentsa',
      parentId: 408,
    },
    {
      name: 'Кухонный текстиль',
      slug: 'kukhonnyy-tekstil',
      parentId: 408,
    },
    {
      name: 'Чехлы для мебели',
      slug: 'chekhly-dlya-mebeli',
      parentId: 408,
    },
    {
      name: 'Наматрасники',
      slug: 'namatrasniki',
      parentId: 408,
    },
    {
      name: 'Ткани',
      slug: 'tkani',
      parentId: 408,
    },
    {
      name: 'Фиксаторы для текстиля',
      slug: 'fiksatory-dlya-tekstilya',
      parentId: 408,
    },
    {
      name: 'Инвентарь для уборки',
      slug: 'inventar-dlya-uborki',
      parentId: 409,
    },
    {
      name: 'Мусорные ведра и баки',
      slug: 'musornye-vedra-i-baki',
      parentId: 409,
    },
    {
      name: 'Уход за одеждой и обувью',
      slug: 'ukhod-za-odezhdoy-i-obuvyu',
      parentId: 409,
    },
    {
      name: 'Упаковка и переезд',
      slug: 'upakovka-i-pereezd',
      parentId: 409,
    },
    {
      name: 'Сумки хозяйственные',
      slug: 'sumki-khozyaystvennye',
      parentId: 409,
    },
    {
      name: 'Сумки-тележки',
      slug: 'sumki-telezhki',
      parentId: 409,
    },
    {
      name: 'Аксессуары для стирки',
      slug: 'aksessuary-dlya-stirki',
      parentId: 409,
    },
    {
      name: 'Подарочные упаковки',
      slug: 'podarochnye-upakovki',
      parentId: 410,
    },
    {
      name: 'Праздничный декор',
      slug: 'prazdnichnyy-dekor',
      parentId: 410,
    },
    {
      name: 'Воздушные шары и аксессуары',
      slug: 'vozdushnye-shary-i-aksessuary',
      parentId: 410,
    },
    {
      name: 'Мыльные пузыри',
      slug: 'mylnye-puzyri',
      parentId: 410,
    },
    {
      name: 'Свадебные товары',
      slug: 'svadebnye-tovary',
      parentId: 410,
    },
    {
      name: 'Украшения на машину',
      slug: 'ukrasheniya-na-mashinu',
      parentId: 410,
    },
    {
      name: 'Открытки',
      slug: 'otkrytki',
      parentId: 410,
    },
    {
      name: 'Свечи для торта',
      slug: 'svechi-dlya-torta',
      parentId: 410,
    },
    {
      name: 'Топперы для торта',
      slug: 'toppery-dlya-torta',
      parentId: 410,
    },
    {
      name: 'Фотобутафория',
      slug: 'fotobutaforiya',
      parentId: 410,
    },
    {
      name: 'Награды и кубки',
      slug: 'nagrady-i-kubki',
      parentId: 410,
    },
    {
      name: 'Китайские фонарики',
      slug: 'kitayskie-fonariki',
      parentId: 410,
    },
    {
      name: 'Пиньеты',
      slug: 'pinety',
      parentId: 410,
    },
    {
      name: 'Карнавальные товары',
      slug: 'karnavalnye-tovary',
      parentId: 410,
    },
    {
      name: 'Краски Холи',
      slug: 'kraski-kholi',
      parentId: 410,
    },
    {
      name: 'Фейерверки и салюты',
      slug: 'feyerverki-i-salyuty',
      parentId: 410,
    },
    {
      name: 'Поточные и подвесные светильники',
      slug: 'potochnye-i-podvesnye-svetilniki',
      parentId: 411,
    },
    {
      name: 'Напольные и настольные светильники',
      slug: 'napolnye-i-nastolnye-svetilniki',
      parentId: 411,
    },
    {
      name: 'Настенные светильники',
      slug: 'nastennye-svetilniki',
      parentId: 411,
    },
    {
      name: 'Уличные светильники',
      slug: 'ulichnye-svetilniki',
      parentId: 411,
    },
    {
      name: 'Светодиодные ленты',
      slug: 'svetodiodnye-lenty',
      parentId: 411,
    },
    {
      name: 'Споты и трековые светильники',
      slug: 'spoty-i-trekovye-svetilniki',
      parentId: 411,
    },
    {
      name: 'Рабочее освещение',
      slug: 'rabochee-osveshchenie',
      parentId: 411,
    },
    {
      name: 'Лампочки',
      slug: 'lampochki',
      parentId: 411,
    },
    {
      name: 'Аксессуары для освещения',
      slug: 'aksessuary-dlya-osveshcheniya',
      parentId: 411,
    },
    {
      name: 'Вешалки',
      slug: 'veshalki',
      parentId: 412,
    },
    {
      name: 'Органайзеры и разделители',
      slug: 'organayzery-i-razdeliteli',
      parentId: 412,
    },
    {
      name: 'Коробки и контейнеры',
      slug: 'korobki-i-konteynery',
      parentId: 412,
    },
    {
      name: 'Чехлы для одежды',
      slug: 'chekhly-dlya-odezhdy',
      parentId: 412,
    },
    {
      name: 'Чехлы для обуви',
      slug: 'chekhly-dlya-obuvi',
      parentId: 412,
    },
    {
      name: 'Вакуумные пакеты',
      slug: 'vakuumnye-pakety',
      parentId: 412,
    },
    {
      name: 'Мешочки и пакеты',
      slug: 'meshochki-i-pakety',
      parentId: 412,
    },
    {
      name: 'Корзины для белья',
      slug: 'korziny-dlya-belya',
      parentId: 412,
    },
    {
      name: 'Иконы и панно',
      slug: 'ikony-i-panno',
      parentId: 413,
    },
    {
      name: 'Церковная утварь',
      slug: 'tserkovnaya-utvar',
      parentId: 413,
    },
    {
      name: 'Свечи церковные',
      slug: 'svechi-tserkovnye',
      parentId: 413,
    },
    {
      name: 'Одежда и аксессуары для крещения',
      slug: 'odezhda-i-aksessuary-dlya-kreshcheniya',
      parentId: 413,
    },
    {
      name: 'Товары к Пасхе',
      slug: 'tovary-k-paskhe',
      parentId: 413,
    },
    {
      name: 'Аксессуары религиозные',
      slug: 'aksessuary-religioznye',
      parentId: 413,
    },
    {
      name: 'Коврики для намаза',
      slug: 'kovriki-dlya-namaza',
      parentId: 413,
    },
    {
      name: 'Оформление интерьера',
      slug: 'oformlenie-interera',
      parentId: 414,
    },
    {
      name: 'Зеркала',
      slug: 'zerkala',
      parentId: 414,
    },
    {
      name: 'Картины и панно',
      slug: 'kartiny-i-panno',
      parentId: 414,
    },
    {
      name: 'Фоторамки и фотоальбомы',
      slug: 'fotoramki-i-fotoalbomy',
      parentId: 414,
    },
    {
      name: 'Свечи и подсвечники',
      slug: 'svechi-i-podsvechniki',
      parentId: 414,
    },
    {
      name: 'Ароматы для дома',
      slug: 'aromaty-dlya-doma',
      parentId: 414,
    },
    {
      name: 'Часы и метеостанции',
      slug: 'chasy-i-meteostantsii',
      parentId: 414,
    },
    {
      name: 'Копилки',
      slug: 'kopilki',
      parentId: 414,
    },
    {
      name: 'Держатели и подставки интерьерные',
      slug: 'derzhateli-i-podstavki-interernye',
      parentId: 414,
    },
    {
      name: 'Таблички и крепления',
      slug: 'tablichki-i-krepleniya',
      parentId: 414,
    },
    {
      name: 'Изделия декора из драгоценных металлов',
      slug: 'izdeliya-dekora-iz-dragotsennykh-metallov',
      parentId: 414,
    },
    {
      name: 'Шторы и карнизы',
      slug: 'shtory-i-karnizy',
      parentId: 415,
    },
    {
      name: 'Диспенсеры и дозаторы',
      slug: 'dispensery-i-dozatory',
      parentId: 415,
    },
    {
      name: 'Полки',
      slug: 'polki',
      parentId: 415,
    },
    {
      name: 'Держатели',
      slug: 'derzhateli',
      parentId: 415,
    },
    {
      name: 'Крючки, рейлинги',
      slug: 'kryuchki-reylingi',
      parentId: 415,
    },
    {
      name: 'Наборы для ванной комнаты',
      slug: 'nabory-dlya-vannoy-komnaty',
      parentId: 415,
    },
    {
      name: 'Пробки',
      slug: 'probki',
      parentId: 415,
    },
    {
      name: 'Подушки',
      slug: 'podushki',
      parentId: 415,
    },
    {
      name: 'Ковшики',
      slug: 'kovshiki',
      parentId: 415,
    },
    {
      name: 'Мыльницы',
      slug: 'mylnitsy',
      parentId: 415,
    },
    {
      name: 'Ершики для унитаза',
      slug: 'ershiki-dlya-unitaza',
      parentId: 415,
    },
    {
      name: 'Оформление могилы',
      slug: 'oformlenie-mogily',
      parentId: 416,
    },
    {
      name: 'Памятники и ограды на могилу',
      slug: 'pamyatniki-i-ogrady-na-mogilu',
      parentId: 416,
    },
    {
      name: 'Цветы для кладбища',
      slug: 'tsvety-dlya-kladbishcha',
      parentId: 416,
    },
    {
      name: 'Садовая техника',
      slug: 'sadovaya-tekhnika',
      parentId: 417,
    },
    {
      name: 'Садовый инструмент',
      slug: 'sadovy-instrument',
      parentId: 417,
    },
    {
      name: 'Садовая мебель',
      slug: 'sadovaya-mebel',
      parentId: 417,
    },
    {
      name: 'Парники и теплицы',
      slug: 'parniki-i-teplitsy',
      parentId: 417,
    },
    {
      name: 'Дачные постройки',
      slug: 'dachnye-postroyki',
      parentId: 417,
    },
    {
      name: 'Садовый декор',
      slug: 'sadovy-dekor',
      parentId: 417,
    },
    {
      name: 'Водоснабжение для дачи',
      slug: 'vodosnabzhenie-dlya-dachi',
      parentId: 417,
    },
    {
      name: 'Бассейны и аксессуары',
      slug: 'basseyny-i-aksessuary',
      parentId: 417,
    },
    {
      name: 'Биотуалеты и септики',
      slug: 'biotualety-i-septiki',
      parentId: 417,
    },
    {
      name: 'Отпугиватели животных и насекомых',
      slug: 'otpugivateli-zhivotnykh-i-nasekomykh',
      parentId: 417,
    },
    {
      name: 'Отдых и пикник',
      slug: 'otdykh-i-piknik',
      parentId: 417,
    },
    {
      name: 'Уборка снега',
      slug: 'uborka-snega',
      parentId: 417,
    },
    {
      name: 'Банный текстиль',
      slug: 'bannyj-tekstil',
      parentId: 418,
    },
    {
      name: 'Предметы интерьера бани',
      slug: 'predmety-interera-bani',
      parentId: 418,
    },
    {
      name: 'Ковши, ушаты и ведра для бань',
      slug: 'kovshi-ushaty-i-vedra-dlya-ban',
      parentId: 418,
    },
    {
      name: 'Веники, опахало для бани',
      slug: 'veniki-opakhalo-dlya-bani',
      parentId: 418,
    },
    {
      name: 'Запарки, соль и ароматизаторы для бани',
      slug: 'zaparki-sol-i-aromatizatory-dlya-bani',
      parentId: 418,
    },
    {
      name: 'Купели',
      slug: 'kupeli',
      parentId: 418,
    },
  ]);
}
house();
