import { db } from './index';
import { categories } from './schema';

async function building() {
  await db.insert(categories).values([
    {
      name: 'Инструменты',
      slug: 'instrumenty',
      parentId: 22,
    },
    {
      name: 'Отделочные материалы',
      slug: 'otdelochnye-materialy',
      parentId: 22,
    },
    {
      name: 'Отопление',
      slug: 'otoplenie',
      parentId: 22,
    },
    {
      name: 'Расходные материалы и оснастка',
      slug: 'raskhodnye-materialy-i-osnastka',
      parentId: 22,
    },
    {
      name: 'Строительные материалы',
      slug: 'stroitelnye-materialy',
      parentId: 22,
    },
    {
      name: 'Вентиляция',
      slug: 'ventilyatsiya',
      parentId: 22,
    },
    {
      name: 'Сантехника',
      slug: 'santekhnika',
      parentId: 22,
    },
    {
      name: 'Двери, окна, лестницы и комплектующие',
      slug: 'dveri-okna-lestnitsy-i-komplektuyushchie',
      parentId: 22,
    },
    {
      name: 'Средства защиты и пожаротушения',
      slug: 'sredstva-zashchity-i-pozharotusheniya',
      parentId: 22,
    },
    {
      name: 'Водоснабжение',
      slug: 'vodosnabzhenie',
      parentId: 22,
    },
    {
      name: 'Крепеж и фурнитура',
      slug: 'krepezh-i-furnitura',
      parentId: 22,
    },
    {
      name: 'Силовая техника и оборудование',
      slug: 'silovaya-tekhnika-i-oborudovanie',
      parentId: 22,
    },
    {
      name: 'Лакокрасочные материалы',
      slug: 'lakokrasochnye-materialy',
      parentId: 22,
    },
    {
      name: 'Электрика',
      slug: 'elektrika',
      parentId: 22,
    },
    {
      name: 'Сауны и бани',
      slug: 'sauny-i-bani',
      parentId: 22,
    },
    {
      name: 'Дома, бани и гаражи',
      slug: 'doma-bani-i-garazhi',
      parentId: 22,
    },
    {
      name: 'Промышленное оборудование и комплектующие',
      slug: 'promyshlennoe-oborudovanie-i-komplektuyushchie',
      parentId: 22,
    },
    {
      name: 'Газоснабжение',
      slug: 'gazosnabzhenie',
      parentId: 22,
    },
    {
      name: 'Электроинструменты',
      slug: 'elektroinstrumenty',
      parentId: 928,
    },
    {
      name: 'Пневмоинструменты',
      slug: 'pnevmoinstrumenty',
      parentId: 928,
    },
    {
      name: 'Сварочное оборудование',
      slug: 'svarochnoe-oborudovanie',
      parentId: 928,
    },
    {
      name: 'Паяльное оборудование',
      slug: 'payalnoe-oborudovanie',
      parentId: 928,
    },
    {
      name: 'Измерительные инструменты',
      slug: 'izmeritelnye-instrumenty',
      parentId: 928,
    },
    {
      name: 'Режущие и пильные инструменты',
      slug: 'rezhushchie-i-pilnye-instrumenty',
      parentId: 928,
    },
    {
      name: 'Малярные и отделочные инструменты',
      slug: 'malyarnye-i-otdelochnye-instrumenty',
      parentId: 928,
    },
    {
      name: 'Монтажные и крепежные инструменты',
      slug: 'montazhnye-i-krepezhnye-instrumenty',
      parentId: 928,
    },
    {
      name: 'Ключи и отвертки',
      slug: 'klyuchi-i-otvertki',
      parentId: 928,
    },
    {
      name: 'Ударные и рычажные инструменты',
      slug: 'udarnye-i-rychazhnye-instrumenty',
      parentId: 928,
    },
    {
      name: 'Слесарные инструменты',
      slug: 'slesarnye-instrumenty',
      parentId: 928,
    },
    {
      name: 'Специальные инструменты',
      slug: 'spetsialnye-instrumenty',
      parentId: 928,
    },
    {
      name: 'Наборы инструментов',
      slug: 'nabory-instrumentov',
      parentId: 928,
    },
    {
      name: 'Запчасти и аксессуары',
      slug: 'zapchasti-i-aksessuary',
      parentId: 928,
    },
    {
      name: 'Оборудование для мастерской',
      slug: 'oborudovanie-dlya-masterskoy',
      parentId: 928,
    },
    {
      name: 'Обои и сопутствующие материалы',
      slug: 'oboi-i-soputstvuyushchie-materialy',
      parentId: 929,
    },
    {
      name: 'Напольные покрытия',
      slug: 'napolnye-pokrytiya',
      parentId: 929,
    },
    {
      name: 'Стеновые панели',
      slug: 'stenovye-paneli',
      parentId: 929,
    },
    {
      name: 'Самоклеящаяся пленка',
      slug: 'samokleyashchayasya-plenka',
      parentId: 929,
    },
    {
      name: 'Плитка и керамогранит',
      slug: 'plitka-i-keramogranit',
      parentId: 929,
    },
    {
      name: 'Кирпичи и камень для отделки',
      slug: 'kirpichi-i-kamen-dlya-otdelki',
      parentId: 929,
    },
    {
      name: 'Декор и лепнина',
      slug: 'dekor-i-lepnina',
      parentId: 929,
    },
    {
      name: 'Подвесной потолок и комплектующие',
      slug: 'podvesnoy-potolok-i-komplektuyushchie',
      parentId: 929,
    },
    {
      name: 'Мебельные наполнители',
      slug: 'mebelnye-napolniteli',
      parentId: 929,
    },
    {
      name: 'Армирующие ленты',
      slug: 'armiruyushchie-lenty',
      parentId: 929,
    },
    {
      name: 'Радиаторы',
      slug: 'radiator',
      parentId: 930,
    },
    {
      name: 'Отопительные котлы',
      slug: 'otopitelnye-kotly',
      parentId: 930,
    },
    {
      name: 'Полотенцесушители',
      slug: 'polotentsesusiteli',
      parentId: 930,
    },
    {
      name: 'Теплые полы',
      slug: 'teplye-poly',
      parentId: 930,
    },
    {
      name: 'Камины и порталы',
      slug: 'kaminy-i-portaly',
      parentId: 930,
    },
    {
      name: 'Отопительные конвекторы',
      slug: 'otopitelnye-konvektory',
      parentId: 930,
    },
    {
      name: 'Тепловые пушки и аксессуары',
      slug: 'teplovye-pushki-i-aksessuary',
      parentId: 930,
    },
    {
      name: 'Греющие кабели',
      slug: 'greyushchie-kabeli',
      parentId: 930,
    },
    {
      name: 'Печи и комплектующие',
      slug: 'pechi-i-komplektuyushchie',
      parentId: 930,
    },
    {
      name: 'Запчасти для котлов',
      slug: 'zapchasti-dlya-kotlov',
      parentId: 930,
    },
    {
      name: 'Датчики и регуляторы',
      slug: 'datchiki-i-regulyatory',
      parentId: 930,
    },
    {
      name: 'Теплоносители, промывки и герметизаторы',
      slug: 'teplonositeli-promyvki-i-germetizatory',
      parentId: 930,
    },
    {
      name: 'Элементы систем отопления',
      slug: 'elementy-sistem-otopleniya',
      parentId: 930,
    },
    {
      name: 'Аксессуары',
      slug: 'aksessuary',
      parentId: 930,
    },
    {
      name: 'Оснастка',
      slug: 'osnastka',
      parentId: 931,
    },
    {
      name: 'Для дрелей, гравёров и шуруповертов',
      slug: 'dlya-dreley-graverov-i-shurupovertov',
      parentId: 931,
    },
    {
      name: 'Круги и диски',
      slug: 'krugi-i-diski',
      parentId: 931,
    },
    {
      name: 'Для шлифовальных машин',
      slug: 'dlya-shlifovalnykh-mashin',
      parentId: 931,
    },
    {
      name: 'Для ремонта',
      slug: 'dlya-remonta',
      parentId: 931,
    },
    {
      name: 'Строительные смеси',
      slug: 'stroitelnye-smesi',
      parentId: 932,
    },
    {
      name: 'Изоляционные покрытия и материалы',
      slug: 'izolyatsionnye-pokrytiya-i-materialy',
      parentId: 932,
    },
    {
      name: 'Кровля и комплектующие',
      slug: 'krovlya-i-komplektuyushchie',
      parentId: 932,
    },
    {
      name: 'Водосточные системы',
      slug: 'vodostochnye-sistemy',
      parentId: 932,
    },
    {
      name: 'Облицовочные материалы',
      slug: 'oblitsovochnye-materialy',
      parentId: 932,
    },
    {
      name: 'Металлопрокат и металлоконструкции',
      slug: 'metalloprokati-metallokonstruktsii',
      parentId: 932,
    },
    {
      name: 'Дымоходы и комплектующие',
      slug: 'dymokhody-i-komplektuyushchie',
      parentId: 933,
    },
    {
      name: 'Вентиляторы и дефлекторы',
      slug: 'ventilyatory-i-deflektory',
      parentId: 933,
    },
    {
      name: 'Вентиляционные',
      slug: 'ventilyatsionnye',
      parentId: 933,
    },
    {
      name: 'Вентиляционное оборудование',
      slug: 'ventilyatsionnoe-oborudovanie',
      parentId: 933,
    },
    {
      name: 'Комплектующие и запчасти',
      slug: 'komplektuyushchie-i-zapchasti',
      parentId: 933,
    },
    {
      name: 'Смесители и комплектующие',
      slug: 'smesiteli-i-komplektuyushchie',
      parentId: 934,
    },
    {
      name: 'Кухонные мойки',
      slug: 'kukhonnye-moyki',
      parentId: 934,
    },
    {
      name: 'Раковины, умывальники и пьедесталы',
      slug: 'rakoviny-umyvalniki-i-pedestaly',
      parentId: 934,
    },
    {
      name: 'Души и душевые кабины',
      slug: 'dushi-i-dushevye-kabiny',
      parentId: 934,
    },
    {
      name: 'Душевое оборудование',
      slug: 'dushevoe-oborudovanie',
      parentId: 934,
    },
    {
      name: 'Унитазы и инсталляции',
      slug: 'unitazy-i-installyatsii',
      parentId: 934,
    },
    {
      name: 'Ванны и комплектующие',
      slug: 'vanny-i-komplektuyushchie',
      parentId: 934,
    },
    {
      name: 'Арматура и аксессуары для сантехники',
      slug: 'armatura-i-aksessuary-dlya-santekhniki',
      parentId: 934,
    },
    {
      name: 'Комплекты сантехники',
      slug: 'komplekty-santekhniki',
      parentId: 934,
    },
    {
      name: 'Двери',
      slug: 'dveri',
      parentId: 935,
    },
    {
      name: 'Ручки, замки и фурнитура',
      slug: 'ruchki-zamki-i-furnitura',
      parentId: 935,
    },
    {
      name: 'Дверные звонки и комплектующие',
      slug: 'dvernye-zvonki-i-komplektuyushchie',
      parentId: 935,
    },
    {
      name: 'Окна',
      slug: 'okna',
      parentId: 935,
    },
    {
      name: 'Комплектующие к окнам и дверям',
      slug: 'komplektuyushchie-k-oknam-i-dveryam',
      parentId: 935,
    },
    {
      name: 'Рольставни',
      slug: 'rolstavni',
      parentId: 935,
    },
    {
      name: 'Крыльцо и козырьки',
      slug: 'kryltso-i-kozyrki',
      parentId: 935,
    },
    {
      name: 'Межэтажные лестницы и комплектующие',
      slug: 'mezhetazhnye-lestnitsy-i-komplektuyushchie',
      parentId: 935,
    },
    {
      name: 'Защита органов дыхания',
      slug: 'zashchita-organov-dykhaniya',
      parentId: 936,
    },
    {
      name: 'Защита органов зрения',
      slug: 'zashchita-organov-zreniya',
      parentId: 936,
    },
    {
      name: 'Защита органов слуха',
      slug: 'zashchita-organov-slukha',
      parentId: 936,
    },
    {
      name: 'Защита рук',
      slug: 'zashchita-ruk',
      parentId: 936,
    },
    {
      name: 'Защита ног',
      slug: 'zashchita-nog',
      parentId: 936,
    },
    {
      name: 'Каски строительные',
      slug: 'kaski-stroitelnye',
      parentId: 936,
    },
    {
      name: 'Химзащита',
      slug: 'khimzashchita',
      parentId: 936,
    },
    {
      name: 'Страховка на высоте',
      slug: 'strakhovka-na-vysote',
      parentId: 936,
    },
    {
      name: 'Пожарное оборудование',
      slug: 'pozharnoe-oborudovanie',
      parentId: 936,
    },
    {
      name: 'Аварийные ограждения',
      slug: 'avariynye-ograzhdeniya',
      parentId: 936,
    },
    {
      name: 'Водоочистка и фильтры',
      slug: 'vodoochistka-i-filtry',
      parentId: 937,
    },
    {
      name: 'Трубы и водоснабжение',
      slug: 'truby-i-vodosnabzhenie',
      parentId: 937,
    },
    {
      name: 'Водоотведение и канализация',
      slug: 'vodootvedenie-i-kanalizatsiya',
      parentId: 937,
    },
    {
      name: 'Запорная и регулирующая арматура',
      slug: 'zapornaya-i-reguliruyushchaya-armatura',
      parentId: 937,
    },
    {
      name: 'Предохранительная арматура',
      slug: 'predokhranitelnaya-armatura',
      parentId: 937,
    },
    {
      name: 'Счетчики воды и монтажные комплекты',
      slug: 'schetchiki-vody-i-montazhnye-komplekty',
      parentId: 937,
    },
    {
      name: 'Гидроаккумуляторы',
      slug: 'gidroakkumulyatory',
      parentId: 937,
    },
    {
      name: 'Насосные группы',
      slug: 'nasosnye-gruppy',
      parentId: 937,
    },
    {
      name: 'Ревизионные люки',
      slug: 'revizionnye-lyuki',
      parentId: 937,
    },
    {
      name: 'Расходные материалы для сантехники',
      slug: 'raskhodnye-materialy-dlya-santekhniki',
      parentId: 937,
    },
    {
      name: 'Инструменты для труб',
      slug: 'instrumenty-dlya-trub',
      parentId: 937,
    },
    {
      name: 'Фурнитура и комплектующие для мебели',
      slug: 'furnitura-i-komplektuyushchie-dlya-mebeli',
      parentId: 938,
    },
    {
      name: 'Крепежные изделия и метизы',
      slug: 'krepezhnye-izdeliya-i-metizy',
      parentId: 938,
    },
    {
      name: 'Такелаж',
      slug: 'takelazh',
      parentId: 938,
    },
    {
      name: 'Кованые элементы',
      slug: 'kovanye-elementy',
      parentId: 938,
    },
    {
      name: 'Опечатывание и пломбирование',
      slug: 'opechatyvanie-i-plombirovanie',
      parentId: 938,
    },
    {
      name: 'Неодимовые магниты',
      slug: 'neodimovye-magnity',
      parentId: 938,
    },
    {
      name: 'Система Джокер',
      slug: 'sistema-dzhoker',
      parentId: 938,
    },
    {
      name: 'Тарная фурнитура',
      slug: 'tarnaya-furnitura',
      parentId: 938,
    },
    {
      name: 'Почтовые ящики',
      slug: 'pochtovye-yashchiki',
      parentId: 938,
    },
    {
      name: 'Электрогенераторы',
      slug: 'elektrogeneratory',
      parentId: 939,
    },
    {
      name: 'Станки',
      slug: 'stanki',
      parentId: 939,
    },
    {
      name: 'Комплектующие для ЧПУ',
      slug: 'komplektuyushchie-dlya-chpu',
      parentId: 939,
    },
    {
      name: 'Оборудование для клининга',
      slug: 'oborudovanie-dlya-klininga',
      parentId: 939,
    },
    {
      name: 'Бетономешалки и растворосмесители',
      slug: 'betonomeshalki-i-rastvorosmesiteli',
      parentId: 939,
    },
    {
      name: 'Виброоборудование',
      slug: 'vibrooborudovanie',
      parentId: 939,
    },
    {
      name: 'Малая строительная техника',
      slug: 'malaya-stroitelnaya-tekhnika',
      parentId: 939,
    },
    {
      name: 'Малярно-отделочное оборудование',
      slug: 'malyarno-otdelochnoe-oborudovanie',
      parentId: 939,
    },
    {
      name: 'Промышленные электродвигатели',
      slug: 'promyshlennye-elektrodvigateli',
      parentId: 939,
    },
    {
      name: 'Промышленные насосы',
      slug: 'promyshlennye-nasosy',
      parentId: 939,
    },
    {
      name: 'Клеи и герметики',
      slug: 'klei-i-germetiki',
      parentId: 940,
    },
    {
      name: 'Краски',
      slug: 'kraski',
      parentId: 940,
    },
    {
      name: 'Краска колерованная',
      slug: 'kraska-kolerovannaya',
      parentId: 940,
    },
    {
      name: 'Эмали',
      slug: 'emali',
      parentId: 940,
    },
    {
      name: 'Лаки строительные',
      slug: 'laki-stroitelnye',
      parentId: 940,
    },
    {
      name: 'Аэрозольные краски',
      slug: 'aerozolnye-kraski',
      parentId: 940,
    },
    {
      name: 'Покрытия для дерева',
      slug: 'pokrytiya-dlya-dereva',
      parentId: 940,
    },
    {
      name: 'Пропитки',
      slug: 'propitki',
      parentId: 940,
    },
    {
      name: 'Грунтовки',
      slug: 'gruntovki',
      parentId: 940,
    },
    {
      name: 'Растворители и очистители',
      slug: 'rastvoriteli-i-ochistiteli',
      parentId: 940,
    },
    {
      name: 'Колеры',
      slug: 'kolery',
      parentId: 940,
    },
    {
      name: 'Функциональные добавки к ЛКМ',
      slug: 'funktsionalnye-dobavki-k-lkm',
      parentId: 940,
    },
    {
      name: 'Малярные ленты',
      slug: 'malyarnye-lenty',
      parentId: 940,
    },
    {
      name: 'Материалы для реставрации',
      slug: 'materialy-dlya-restavratsii',
      parentId: 940,
    },
    {
      name: 'Каталоги, тестеры и комплекты ЛКМ',
      slug: 'katalogi-testery-i-komplekty-lkm',
      parentId: 940,
    },
    {
      name: 'Розетки, вилки и выключатели',
      slug: 'rozetki-vilki-i-vyklyuchateli',
      parentId: 941,
    },
    {
      name: 'Кабели и провода',
      slug: 'kabeli-i-provoda',
      parentId: 941,
    },
    {
      name: 'Кабеленесущие системы',
      slug: 'kabelenesushchie-sistemy',
      parentId: 941,
    },
    {
      name: 'Распределительные щиты и боксы',
      slug: 'raspredelitelnye-shchity-i-boksy',
      parentId: 941,
    },
    {
      name: 'Стабилизаторы напряжения',
      slug: 'stabilizatory-napryazheniya',
      parentId: 941,
    },
    {
      name: 'Автоматика',
      slug: 'avtomatika',
      parentId: 941,
    },
    {
      name: 'Коммутационное оборудование',
      slug: 'kommutatsionnoe-oborudovanie',
      parentId: 941,
    },
    {
      name: 'Трансформаторы',
      slug: 'transformatory',
      parentId: 941,
    },
    {
      name: 'Изоляционные материалы',
      slug: 'izolyatsionnye-materialy',
      parentId: 941,
    },
    {
      name: 'Солнечные панели',
      slug: 'solnechnye-paneli',
      parentId: 941,
    },
    {
      name: 'Дровяные печи',
      slug: 'drovinye-pechi',
      parentId: 942,
    },
    {
      name: 'Электрокаменки',
      slug: 'elektrokamenki',
      parentId: 942,
    },
    {
      name: 'Аксессуары',
      slug: 'aksessuary',
      parentId: 942,
    },
    {
      name: 'Камни',
      slug: 'kamni',
      parentId: 942,
    },
    {
      name: 'Двери',
      slug: 'dveri',
      parentId: 942,
    },
    {
      name: 'Проекты',
      slug: 'proekty',
      parentId: 943,
    },
    {
      name: 'Дома',
      slug: 'doma',
      parentId: 943,
    },
    {
      name: 'Гаражи',
      slug: 'garazhi',
      parentId: 943,
    },
    {
      name: 'Сауны и бани',
      slug: 'sauny-i-bani',
      parentId: 943,
    },
  ]);
}
building();
