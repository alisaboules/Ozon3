import { db } from './index';
import { categories } from './schema';

async function beauty() {
  await db.insert(categories).values([
    {
      name: 'Уход за волосами',
      slug: 'ukhod-za-volosami',
      parentId: 14,
    },
    {
      name: 'Маникюр и педикюр',
      slug: 'manikyur-i-pedikyur',
      parentId: 14,
    },
    {
      name: 'Детская косметика и парфюмерия',
      slug: 'detskaya-kosmetika-i-parfyumeriya',
      parentId: 14,
    },
    {
      name: 'Уход за лицом',
      slug: 'ukhod-za-litsom',
      parentId: 14,
    },
    {
      name: 'Парфюмерия',
      slug: 'parfyumeriya',
      parentId: 14,
    },
    {
      name: 'Аппаратная косметология и массаж',
      slug: 'apparatnaya-kosmetologiya-i-massazh',
      parentId: 14,
    },
    {
      name: 'Уход за телом',
      slug: 'ukhod-za-telom',
      parentId: 14,
    },
    {
      name: 'Загар и защита от солнца',
      slug: 'zagar-i-zashchita-ot-solntsa',
      parentId: 14,
    },
    {
      name: 'Оборудование и материалы для тату-салона',
      slug: 'oborudovanie-i-materialy-dlya-tatu-salona',
      parentId: 14,
    },
    {
      name: 'Макияж',
      slug: 'makiyazh',
      parentId: 14,
    },
    {
      name: 'Мужская косметика',
      slug: 'muzhskaya-kosmetika',
      parentId: 14,
    },
    {
      name: 'Мебель и оборудование для салонов красоты',
      slug: 'mebel-i-oborudovanie-dlya-salonov-krasoty',
      parentId: 14,
    },
    {
      name: 'Беременным и кормящим',
      slug: 'beremennym-i-kormyashchim',
      parentId: 14,
    },
    {
      name: 'Ароматерапия',
      slug: 'aromaterapiya',
      parentId: 14,
    },
    {
      name: 'Шампуни и кондиционеры',
      slug: 'shampuni-i-konditsionery',
      parentId: 553,
    },
    {
      name: 'Масла и сыворотки',
      slug: 'masla-i-syvorotki',
      parentId: 553,
    },
    {
      name: 'Средства для укладки',
      slug: 'sredstva-dlya-ukladki',
      parentId: 553,
    },
    {
      name: 'Расчески и щетки',
      slug: 'rascheski-i-shchetki',
      parentId: 553,
    },
    {
      name: 'Окрашивание и химическая завивка',
      slug: 'okrashivanie-i-khimicheskaya-zavivka',
      parentId: 553,
    },
    {
      name: 'Косметические наборы',
      slug: 'kosmeticheskie-nabory',
      parentId: 553,
    },
    {
      name: 'Наращивание волос',
      slug: 'narashchivanie-volos',
      parentId: 553,
    },
    {
      name: 'Шапочки для душа',
      slug: 'shapochki-dlya-dusha',
      parentId: 553,
    },
    {
      name: 'Бигуди',
      slug: 'bigudi',
      parentId: 553,
    },
    {
      name: 'Парики и шиньоны',
      slug: 'pariki-i-shinony',
      parentId: 553,
    },
    {
      name: 'Профессиональные инструменты',
      slug: 'professionalnye-instrumenty',
      parentId: 553,
    },
    {
      name: 'парикмахера',
      slug: 'parikmakhera',
      parentId: 553,
    },
    {
      name: 'Лаки и гели для ногтей',
      slug: 'laki-i-geli-dlya-nogtey',
      parentId: 554,
    },
    {
      name: 'Дизайн ногтей',
      slug: 'dizayn-nogtey',
      parentId: 554,
    },
    {
      name: 'Инструменты и аксессуары',
      slug: 'instrumenty-i-aksessuary',
      parentId: 554,
    },
    {
      name: 'Оборудование для маникюра и педикюра',
      slug: 'oborudovanie-dlya-manikyura-i-pedikyura',
      parentId: 554,
    },
    {
      name: 'Типсы и формы для наращивания',
      slug: 'tipsy-i-formy-dlya-narashchivaniya',
      parentId: 554,
    },
    {
      name: 'Уход за кожей и ногтями',
      slug: 'ukhod-za-kozhey-i-nogtyami',
      parentId: 554,
    },
    {
      name: 'Антисептические средства',
      slug: 'antisepticheskie-sredstva',
      parentId: 554,
    },
    {
      name: 'Ванночки и парафинотерапия',
      slug: 'vannochki-i-parafinoterapiya',
      parentId: 554,
    },
    {
      name: 'Декоративная косметика',
      slug: 'dekorativnaya-kosmetika',
      parentId: 555,
    },
    {
      name: 'Парфюмерия',
      slug: 'parfyumeriya',
      parentId: 555,
    },
    {
      name: 'Средства для купания',
      slug: 'sredstva-dlya-kupaniya',
      parentId: 555,
    },
    {
      name: 'Средства для укладки волос',
      slug: 'sredstva-dlya-ukladki-volos',
      parentId: 555,
    },
    {
      name: 'Маникюр',
      slug: 'manikyur',
      parentId: 555,
    },
    {
      name: 'Очищение и умывание',
      slug: 'ochishchenie-i-umyvanie',
      parentId: 556,
    },
    {
      name: 'Скрыть и пилинги',
      slug: 'skryt-i-pilingi',
      parentId: 556,
    },
    {
      name: 'Увлажнение и питание',
      slug: 'uvlazhnenie-i-pitanie',
      parentId: 556,
    },
    {
      name: 'Маски',
      slug: 'maski',
      parentId: 556,
    },
    {
      name: 'Патчи',
      slug: 'patchi',
      parentId: 556,
    },
    {
      name: 'Средства для проблемной кожи',
      slug: 'sredstva-dlya-problemnoy-kozhi',
      parentId: 556,
    },
    {
      name: 'Антивозрастной уход',
      slug: 'antivozrastnoy-ukhod',
      parentId: 556,
    },
    {
      name: 'Наборы средств для лица',
      slug: 'nabory-sredstv-dlya-litsa',
      parentId: 556,
    },
    {
      name: 'Инструменты косметологические',
      slug: 'instrumenty-kosmetologicheskie',
      parentId: 556,
    },
    {
      name: 'Парфюмерная вода',
      slug: 'parfyumernaya-voda',
      parentId: 557,
    },
    {
      name: 'Туалетная вода',
      slug: 'tualetnaya-voda',
      parentId: 557,
    },
    {
      name: 'Духи',
      slug: 'dukhi',
      parentId: 557,
    },
    {
      name: 'Духи сухие и масляные',
      slug: 'dukhi-sukhie-i-maslyanye',
      parentId: 557,
    },
    {
      name: 'Нишевая парфюмерия',
      slug: 'nishevaya-parfyumeriya',
      parentId: 557,
    },
    {
      name: 'Дымки и вуали',
      slug: 'dymki-i-vuali',
      parentId: 557,
    },
    {
      name: 'Наливная парфюмерия',
      slug: 'nalivnaya-parfyumeriya',
      parentId: 557,
    },
    {
      name: 'Одеколоны',
      slug: 'odekolony',
      parentId: 557,
    },
    {
      name: 'Парфюмированный набор',
      slug: 'parfyumirovannyy-nabor',
      parentId: 557,
    },
    {
      name: 'Массажеры',
      slug: 'massazhery',
      parentId: 558,
    },
    {
      name: 'Косметологические аппараты',
      slug: 'kosmetologicheskie-apparaty',
      parentId: 558,
    },
    {
      name: 'Эпиляторы',
      slug: 'epilyatory',
      parentId: 558,
    },
    {
      name: 'Контактные гели',
      slug: 'kontaktnye-geli',
      parentId: 558,
    },
    {
      name: 'Кремы',
      slug: 'kremy',
      parentId: 559,
    },
    {
      name: 'Увлажнение и питание',
      slug: 'uvlazhnenie-i-pitanie',
      parentId: 559,
    },
    {
      name: 'Средства для душа',
      slug: 'sredstva-dlya-dusha',
      parentId: 559,
    },
    {
      name: 'Мыло',
      slug: 'mylo',
      parentId: 559,
    },
    {
      name: 'Мочалки',
      slug: 'mochalki',
      parentId: 559,
    },
    {
      name: 'Скрытые и пилинги',
      slug: 'skrytye-i-pilingi',
      parentId: 559,
    },
    {
      name: 'Средства для принятия ванны',
      slug: 'sredstva-dlya-prinyatiya-vanny',
      parentId: 559,
    },
    {
      name: 'Дезодоранты',
      slug: 'dezodoranty',
      parentId: 559,
    },
    {
      name: 'Средства против целлюлита и растяжек',
      slug: 'sredstva-protiv-tsellyulita-i-rastyazhek',
      parentId: 559,
    },
    {
      name: 'Щетки для сухого массажа',
      slug: 'shchetki-dlya-sukhogo-massazha',
      parentId: 559,
    },
    {
      name: 'Депиляция и эпиляция',
      slug: 'depilyatsiya-i-epilyatsiya',
      parentId: 559,
    },
    {
      name: 'Наборы косметики',
      slug: 'nabory-kosmetiki',
      parentId: 559,
    },
    {
      name: 'Стики для тела',
      slug: 'stiki-dlya-tela',
      parentId: 559,
    },
    {
      name: 'Солнцезащитные средства',
      slug: 'solntsezashchitnye-sredstva',
      parentId: 560,
    },
    {
      name: 'Косметика для ухода с SPF',
      slug: 'kosmetika-dlya-ukhoda-s-spf',
      parentId: 560,
    },
    {
      name: 'Средства для загара',
      slug: 'sredstva-dlya-zagara',
      parentId: 560,
    },
    {
      name: 'Средства после загара',
      slug: 'sredstva-posle-zagara',
      parentId: 560,
    },
    {
      name: 'Средства для солярия',
      slug: 'sredstva-dlya-solyariya',
      parentId: 560,
    },
    {
      name: 'Автозагар',
      slug: 'avtozagar',
      parentId: 560,
    },

    {
      name: 'Тату-машинки и аксессуары',
      slug: 'tatu-mashinki-i-aksessuary',
      parentId: 561,
    },
    {
      name: 'Краски и расходники',
      slug: 'kraski-i-raskhodniki',
      parentId: 561,
    },
    {
      name: 'Уход за татуировками',
      slug: 'ukhod-za-tatuirovkami',
      parentId: 561,
    },
    {
      name: 'Тату-наборы',
      slug: 'tatu-nabory',
      parentId: 561,
    },
    {
      name: 'Удаления татуировок',
      slug: 'udaleniya-tatuirovok',
      parentId: 561,
    },
    {
      name: 'Инструменты для пирсинга',
      slug: 'instrumenty-dlya-pirsinga',
      parentId: 561,
    },
    {
      name: 'Лицо',
      slug: 'litso',
      parentId: 562,
    },
    {
      name: 'Глаза',
      slug: 'glaza',
      parentId: 562,
    },
    {
      name: 'Губы',
      slug: 'guby',
      parentId: 562,
    },
    {
      name: 'Брови',
      slug: 'brovi',
      parentId: 562,
    },
    {
      name: 'Аксессуары для макияжа',
      slug: 'aksessuary-dlya-makiyazha',
      parentId: 562,
    },
    {
      name: 'Наборы для макияжа',
      slug: 'nabory-dlya-makiyazha',
      parentId: 562,
    },
    {
      name: 'Атомайзеры и флаконы',
      slug: 'atomayzery-i-flakony',
      parentId: 562,
    },
    {
      name: 'Перманентный макияж',
      slug: 'permanentnyy-makiyazh',
      parentId: 562,
    },
    {
      name: 'Временные татуировки и стразы',
      slug: 'vremennye-tatuirovki-i-strazy',
      parentId: 562,
    },
    {
      name: 'Бритье и уход за бородой',
      slug: 'brite-i-ukhod-za-borodoy',
      parentId: 563,
    },
    {
      name: 'Парфюмерия',
      slug: 'parfyumeriya',
      parentId: 563,
    },
    {
      name: 'Для волос',
      slug: 'dlya-volos',
      parentId: 563,
    },
    {
      name: 'Гели для душа',
      slug: 'geli-dlya-dusha',
      parentId: 563,
    },
    {
      name: 'Дезодоранты',
      slug: 'dezodoranty',
      parentId: 563,
    },
    {
      name: 'Наборы для гигиены',
      slug: 'nabory-dlya-gigieny',
      parentId: 563,
    },
    {
      name: 'Массажное оборудование',
      slug: 'massazhnoe-oborudovanie',
      parentId: 564,
    },
    {
      name: 'Для кабинетов маникюра и педикюра',
      slug: 'dlya-kabinetov-manikyura-i-pedikyura',
      parentId: 564,
    },
    {
      name: 'Для парикмахеров',
      slug: 'dlya-parikmakherov',
      parentId: 564,
    },
    {
      name: 'Для косметологов',
      slug: 'dlya-kosmetologov',
      parentId: 564,
    },
    {
      name: 'Для визажистов',
      slug: 'dlya-vizazhistov',
      parentId: 564,
    },
    {
      name: 'Стулья мастеров для салонов красоты',
      slug: 'stulya-masterov-dlya-salonov-krasoty',
      parentId: 564,
    }
  ])
}
beauty();