import { db } from './index';
import { categories } from './schema';

async function apteka() {
  await db.insert(categories).values([
    {
      name: "Лекарственные средства",
      slug: "lekarstvennye-sredstva",
      parentId: 5,
    },
    {
      name: "Медицинское оборудование",
      slug: "meditsinskoe-oborudovanie",
      parentId: 5,
    },
    {
      name: "Товары для гигиены",
      slug: "tovary-dlya-gigieny",
      parentId: 5,
    },
    {
      name: "Витамины и БАДы",
      slug: "vitaminy-i-bady",
      parentId: 5,
    },
    {
      name: "Аксессуары и комплектующие",
      slug: "aksessuary-i-komplektuyushchie",
      parentId: 5,
    },
    {
      name: "Парафармацевтика",
      slug: "parafarmatsevtika",
      parentId: 5,
    },
    {
      name: "Медицинские изделия и расходные материалы",
      slug: "meditsinskie-izdeliya-i-raskhodnye-materialy",
      parentId: 5,
    },
    {
      name: "Товары для реабилитации",
      slug: "tovary-dlya-reabilitatsii",
      parentId: 5,
    },
    {
      name: "Оптика",
      slug: "optika",
      parentId: 5,
    },
    {
      name: "Ортопедия",
      slug: "ortopediya",
      parentId: 5,
    },
    {
      name: "Одежда и текстиль медицинские",
      slug: "odezhda-i-tekstil-meditsinskie",
      parentId: 5,
    },
    {
      name: "Медицинские инструменты",
      slug: "meditsinskie-instrumenty",
      parentId: 5,
    },
    {
      name: "Ручные массажёры и аппликаторы",
      slug: "ruchnye-massazhery-i-applikatory",
      parentId: 5,
    },
    {
      name: "Товары стоматологические",
      slug: "tovary-stomatologicheskie",
      parentId: 5,
    },
    {
      name: "Медицинские приборы",
      slug: "meditsinskie-pribory",
      parentId: 5,
    },
    {
      name: "Мебель медицинская",
      slug: "mebel-meditsinskaya",
      parentId: 5,
    },
    {
      name: "При простуде и гриппе",
      slug: "pri-prostude-i-grippe",
      parentId: 278,
    },
    {
      name: "Иммуностимуляторы",
      slug: "immunostimulyatory",
      parentId: 278,
    },
    {
      name: "Желудок, кишечник, печень",
      slug: "zheludok-kishechnik-pechen",
      parentId: 278,
    },
    {
      name: "Препараты при дерматологических нарушениях",
      slug: "preparaty-pri-dermatologicheskikh-narusheniyakh",
      parentId: 278,
    },
    {
      name: "При нарушениях опорно-двигательного аппарата",
      slug: "pri-narusheniyakh-oporno-dvigatelnogo-apparata",
      parentId: 278,
    },
    {
      name: "Сердечно-сосудистые",
      slug: "serdechno-sosudistye",
      parentId: 278,
    },
    {
      name: "При неврологических нарушениях",
      slug: "pri-nevrologicheskikh-narusheniyakh",
      parentId: 278,
    },
    {
      name: "Препараты при аллергии",
      slug: "preparaty-pri-allergii",
      parentId: 278,
    },
    {
      name: "При нарушении обмена веществ",
      slug: "pri-narushenii-obmena-veshchestv",
      parentId: 278,
    },
    {
      name: "Витаминные препараты",
      slug: "vitaminnye-preparaty",
      parentId: 278,
    },
    {
      name: "При воспалениях и инфекциях",
      slug: "pri-vospaleniyakh-i-infektsiyakh",
      parentId: 278,
    },
    {
      name: "При курении и алкоголизме",
      slug: "pri-kurenii-i-alkogolizme",
      parentId: 278,
    },
    {
      name: "При гинекологических нарушениях",
      slug: "pri-ginekologicheskikh-narusheniyakh",
      parentId: 278,
    },
    {
      name: "Болеутоляющие",
      slug: "boleutolyayushchie",
      parentId: 278,
    },
    {
      name: "При нарушениях мочеполовой системы",
      slug: "pri-narusheniyakh-mochepolovoy-sistemy",
      parentId: 278,
    },
    {
      name: "При нарушениях работы зрения",
      slug: "pri-narusheniyakh-raboty-zreniya",
      parentId: 278,
    },
    {
      name: "При гормональных нарушениях",
      slug: "pri-gormonalnykh-narusheniyakh",
      parentId: 278,
    },
    {
      name: "Для зубов и десен",
      slug: "dlya-zubov-i-desen",
      parentId: 278,
    },
    {
      name: "Препараты при бронхиальной астме",
      slug: "preparaty-pri-bronkhialnoy-astme",
      parentId: 278,
    },
    {
      name: "Препараты при онкологии",
      slug: "preparaty-pri-onkologii",
      parentId: 278,
    },
    {
      name: 'Медицинский осмотр',
      slug: 'meditsinskiy-osmotr',
      parentId: 279,
    },
    {
      name: 'Лабораторное оборудование и материалы',
      slug: 'laboratornoe-oborudovanie-i-materialy',
      parentId: 279,
    },
    {
      name: 'Для ортодонтии и стоматологии',
      slug: 'dlya-ortodontii-i-stomatologii',
      parentId: 279,
    },
    {
      name: 'Для УЗИ и эндоскопии',
      slug: 'dlya-uzi-i-endoskopii',
      parentId: 279,
    },
    {
      name: 'Для физиотерапии',
      slug: 'dlya-fizioterapii',
      parentId: 279,
    },
    {
      name: 'Учебное медицинское оборудование',
      slug: 'uchebnoe-meditsinskoe-oborudovanie',
      parentId: 279,
    },
    {
      name: 'Презервативы и лубриканты',
      slug: 'prezervativy-i-lubrikanty',
      parentId: 280,
    },
    {
      name: 'Антисептические средства',
      slug: 'antisepticheskie-sredstva',
      parentId: 280,
    },
    {
      name: 'Ирригаторы и аксессуары',
      slug: 'irrigatory-i-aksessuary',
      parentId: 280,
    },
    {
      name: 'Уход за полостью рта и отбеливание зубов',
      slug: 'ukhod-za-polostyu-rta-i-otbelivanie-zubov',
      parentId: 280,
    },
    {
      name: 'Прокладки урологические',
      slug: 'prokladki-urologicheskie',
      parentId: 280,
    },
    {
      name: 'Менструальные чаши',
      slug: 'menstrualnye-chashi',
      parentId: 280,
    },
    {
      name: 'Вкладыши для груди и одежды',
      slug: 'vkladyshi-dlya-grudi-i-odezhdy',
      parentId: 280,
    },
    {
      name: 'Товары для зубных протезов',
      slug: 'tovary-dlya-zubnykh-protezov',
      parentId: 280,
    },
    {
      name: 'Товары для чистки ушей, носа',
      slug: 'tovary-dlya-chistki-ushei-nosa',
      parentId: 280,
    },
    {
      name: 'Здоровые и гигиена малыша',
      slug: 'zdorovye-i-gigiena-malysha',
      parentId: 280,
    },
    {
      name: 'БАДЫ',
      slug: 'aksessuary',
      parentId: 281,
    },
    {
      name: 'Витамины и витаминно-минеральные комплексы',
      slug: 'komplektuyushchie',
      parentId: 281,
    },
    {
      name: 'Аксессуары',
      slug: 'aksessuary',
      parentId: 282,
    },
    {
      name: 'Комплектующие',
      slug: 'komplektuyushchie',
      parentId: 282,
    },
    {
      name: 'Лечебные средства',
      slug: 'lechebnye-sredstva',
      parentId: 283,
    },
    {
      name: 'Средства профилактики',
      slug: 'sredstva-profilaktiki',
      parentId: 283,
    },
    {
      name: 'Диабетические товары',
      slug: 'diabeticheskie-tovary',
      parentId: 283,
    },
    {
      name: 'Комплексные пищевые добавки',
      slug: 'kompleksnye-pishchevye-dobavki',
      parentId: 283,
    },
    {
      name: 'Специализированное питание',
      slug: 'spetsializirovannoe-pitanie',
      parentId: 283,
    },
    {
      name: 'Дыхательные смеси',
      slug: 'dykhatelnye-smesi',
      parentId: 283,
    },
    {
      name: 'Контейнеры для анализов и пакеты для стерилизации',
      slug: 'konteynery-dlya-analizov-i-pakety-dlya-sterilizatsii',
      parentId: 284,
    },
    {
      name: 'Кровоостанавливающие средства',
      slug: 'krovoostanavlivayushchie-sredstva',
      parentId: 284,
    },
    {
      name: 'Перчатки, маски, бахилы и шапочки',
      slug: 'perchatki-maski-bakhily-i-shapochki',
      parentId: 284,
    },
    {
      name: 'Перевязочные материалы',
      slug: 'perevyazochnye-materialy',
      parentId: 284,
    },
    {
      name: 'Пипетки, дозаторы, спринцовки и клизмы',
      slug: 'pipetki-dozatory-sprintsovki-i-klizmy',
      parentId: 284,
    },
    {
      name: 'Пессарии и уринаторы',
      slug: 'pessarii-i-urinator',
      parentId: 284,
    },
    {
      name: 'Шприцы, иглы и инъекторы',
      slug: 'shpritsy-igly-i-inektsionnye-igly',
      parentId: 284,
    },
    {
      name: 'Таблетницы',
      slug: 'tabletnitsy',
      parentId: 284,
    },
    {
      name: 'Аптечки',
      slug: 'aptechki',
      parentId: 284,
    },
    {
      name: 'Диагностические тесты',
      slug: 'diagnosticheskie-testy',
      parentId: 284,
    },
    {
      name: 'Средства для процедур и дезинфекции',
      slug: 'sredstva-dlya-protsedur-i-dezinfektsii',
      parentId: 284,
    },
    {
      name: 'Грелки',
      slug: 'grelki',
      parentId: 284,
    },
    {
      name: 'Товары по уходу за больными',
      slug: 'tovary-po-ukhodu-za-bolnymi',
      parentId: 285,
    },
    {
      name: 'Костыли, трости и ходунки',
      slug: 'kostyli-trosti-i-khodunki',
      parentId: 285,
    },
    {
      name: 'Бытовые приспособления',
      slug: 'bytovye-prisposobleniya',
      parentId: 285,
    },
    {
      name: 'Коляски инвалидные, пандусы',
      slug: 'kolyaski-invalidnye-pandusy',
      parentId: 285,
    },
    {
      name: 'Параподиумы, вертикализаторы и подъемники',
      slug: 'parapodiumy-vertikalizatory-i-podyemniki',
      parentId: 285,
    },
    {
      name: 'Товары для ухода за стомой',
      slug: 'tovary-dlya-ukhoda-za-stomoy',
      parentId: 285,
    },
    {
      name: 'Протезы и аксессуары',
      slug: 'protezy-i-aksessuary',
      parentId: 285,
    },
    {
      name: 'Реабилитационные тренажеры и оборудование',
      slug: 'reabilitatsionnye-trenazhery-i-oborudovanie',
      parentId: 285,
    },
    {
      name: 'Детская реабилитация',
      slug: 'detskaya-reabilitatsiya',
      parentId: 285,
    },
    {
      name: 'Контактные линзы',
      slug: 'kontaktnye-linzy',
      parentId: 286,
    },
    {
      name: 'Растворы для линз',
      slug: 'rastvory-dlya-linz',
      parentId: 286,
    },
    {
      name: 'Линзы для очков',
      slug: 'linzy-dlya-ochkov',
      parentId: 286,
    },
    {
      name: 'Оправы для очков',
      slug: 'opravy-dlya-ochkov',
      parentId: 286,
    },
    {
      name: 'Очки для зрения',
      slug: 'ochki-dlya-zreniya',
      parentId: 286,
    },
    {
      name: 'Аксессуары и комплектующие для линз и очков',
      slug: 'aksessuary-i-komplektuyushchie-dlya-linz-i-ochkov',
      parentId: 286,
    },
    {
      name: 'Капли для глаз',
      slug: 'kapli-dlya-glaz',
      parentId: 286,
    },
    {
      name: 'Бандажи и ортезы',
      slug: 'bandazhi-i-ortezy',
      parentId: 287,
    },
    {
      name: 'Корсеты, корректоры осанки и пояса',
      slug: 'korsety-korrektory-osanki-i-poyasa',
      parentId: 287,
    },
    {
      name: 'Компрессионное белье',
      slug: 'kompressionnoe-bele',
      parentId: 287,
    },
    {
      name: 'Ортопедические стельки',
      slug: 'ortopedicheskie-stelki',
      parentId: 287,
    },
    {
      name: 'Корректоры ног и стопы',
      slug: 'korrektory-nog-i-stopy',
      parentId: 287,
    },
    {
      name: 'Бинты эластичные и шины',
      slug: 'binty-elastichnye-i-shiny',
      parentId: 287,
    },
    {
      name: 'Ортопедическая обувь',
      slug: 'ortopedicheskaya-obuv',
      parentId: 287,
    },
    {
      name: 'Текстиль',
      slug: 'tekstil',
      parentId: 288,
    },
    {
      name: 'Одежда медицинская и послеоперационная',
      slug: 'odezhda-meditsinskaya-i-posleoperatsionaya',
      parentId: 288,
    },
    {
      name: 'Адаптивная одежда',
      slug: 'adaptivnaya-odezhda',
      parentId: 288,
    },
    {
      name: 'Инструмент для биопсии',
      slug: 'instrument-dlya-biopsii',
      parentId: 289,
    },
    {
      name: 'Инструмент гинекологический',
      slug: 'instrument-ginekologicheskiy',
      parentId: 289,
    },
    {
      name: 'Инструмент для оториноларингологии',
      slug: 'instrument-dlya-otorinolaringologii',
      parentId: 289,
    },
    {
      name: 'Инструмент для неврологии',
      slug: 'instrument-dlya-nevrologii',
      parentId: 289,
    },
    {
      name: 'Инструмент для хирургии',
      slug: 'instrument-dlya-khirurgii',
      parentId: 289,
    },
    {
      name: 'Инструмент стоматологический',
      slug: 'instrument-stomatologicheskiy',
      parentId: 289,
    },
    {
      name: 'Массажеры и банки',
      slug: 'massazhery-i-banki',
      parentId: 290,
    },
    {
      name: 'Массажные и ортопедические коврики',
      slug: 'massazhnye-i-ortopedicheskie-kovriki',
      parentId: 290,
    },
    {
      name: 'Рефлекторные тапочки',
      slug: 'reflektornye-tapochki',
      parentId: 290,
    },
    {
      name: 'Акупунктурные иглы и браслеты',
      slug: 'akupunkturnye-igly-i-braslety',
      parentId: 290,
    },
    {
      name: 'Материалы и средства',
      slug: 'materialy-i-sredstva',
      parentId: 291,
    },
    {
      name: 'Имплантаты и компоненты',
      slug: 'implantaty-i-komponenty',
      parentId: 291,
    },
    {
      name: 'Капа, трейнер',
      slug: 'kapa-treyner',
      parentId: 291,
    },
    {
      name: 'Тонометры, пульсоксиметры и термометры',
      slug: 'tonometry-pulsoksimetry-i-termometry',
      parentId: 292,
    },
    {
      name: 'Стетоскопы',
      slug: 'stetoskopy',
      parentId: 292,
    },
    {
      name: 'Термометры медицинские',
      slug: 'termometry-meditsinskie',
      parentId: 292,
    },
    {
      name: 'Глюкометры и анализаторы',
      slug: 'glyukometry-i-analizatory',
      parentId: 292,
    },
    {
      name: 'Инфузионные и инсулиновые помпы',
      slug: 'infuzionnye-i-insulinovye-pompy',
      parentId: 292,
    },
    {
      name: 'Ингаляторы, устройства от насморка и аллергии',
      slug: 'ingalyatory-ustroystva-ot-nasmorka-i-allergii',
      parentId: 292,
    },
    {
      name: 'Слуховые аппараты и усилители звука',
      slug: 'slukhovye-apparaty-i-usiliteli-zvuka',
      parentId: 292,
    },
    {
      name: 'Кварцевые лампы, рециркуляторы и облучатели',
      slug: 'kvartsevye-lampy-retsirkulyatory-i-obluchateli',
      parentId: 292,
    },
    {
      name: 'Концентраторы кислорода',
      slug: 'kontsentratory-kisloroda',
      parentId: 292,
    },
    {
      name: 'Активаторы воды',
      slug: 'aktivatory-vody',
      parentId: 292,
    },
    {
      name: 'Стерилизаторы и дезинфекторы',
      slug: 'sterilizatory-i-dezinfektory',
      parentId: 292,
    },
    {
      name: 'Весы медицинские',
      slug: 'vesy-meditsinskie',
      parentId: 292,
    },
    {
      name: 'Очки, осветители и рефлекторы',
      slug: 'ochki-osvetiteli-i-reflektory',
      parentId: 292,
    },
    {
      name: 'Приборы для контроля сна, антихрап',
      slug: 'pribory-dlya-kontrolya-sna-antikhrap',
      parentId: 292,
    }
  ])
}
apteka();