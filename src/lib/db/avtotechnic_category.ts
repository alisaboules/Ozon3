import { db } from './index';
import { categories } from './schema';

async function avtotechnic() {
  await db.insert(categories).values([
    {
      name: 'Запчасти для легковых авто',
      slug: 'zapchasti-dlya-legkovyx-avto',
      parentId: 2,
    },
    {
      name: 'Автозвук',
      slug: 'avtozvuk',
      parentId: 2,
    },
    {
      name: 'Гараж и автосервис',
      slug: 'zarazh-i-avtoservic',
      parentId: 2,
    },
    {
      name: 'Автоаксессуары и принадлежности',
      slug: 'avtoakseccuary-i-prinadlezhnosti',
      parentId: 2,
    },
    {
      name: 'Масла и автохимия',
      slug: 'Masla-i-avtoximiya',
      parentId: 2,
    },
    {
      name: 'Шины и диски',
      slug: 'shini-i-diski',
      parentId: 2,
    },
    {
      name: 'Инструменты и оборудование',
      slug: 'Instrumenty-i-oborudovanie',
      parentId: 2,
    },
    {
      name: 'Уход за автомобилем',
      slug: 'uxod-za-avto',
      parentId: 2,
    },
    {
      name: 'Запчасти для грузовиков и спецтехники',
      slug: 'zapchasti-dlya-gruzovikov-i-speztexniki',
      parentId: 2,
    },
    {
      name: 'Электроника для автомобиля',
      slug: 'electronika-dlya-avto',
      parentId: 2,
    },
    {
      name: 'Автолитература',
      slug: 'avtoliteratura',
      parentId: 2,
    },
    {
      name: 'Запчасти авиационные',
      slug: 'zapchasti-aviazionye',
      parentId: 2,
    },
    {
      name: 'Мототовары',
      slug: 'mototovary',
      parentId: 2,
    },
    {
      name: 'Транспортные средства',
      slug: 'transportye-sredstva',
      parentId: 2,
    },
    {
      name: 'Аккумуляторы и аксессуары',
      slug: 'akumulyatory-i-akseccyary',
      parentId: 2,
    },
    {
      name: 'Запчасти для ТО',
      slug: 'zapchasti-dlya-TO',
      parentId: 31,
    },
    {
      name: 'Автосвет',
      slug: 'avtosvet',
      parentId: 31,
    },
    {
      name: 'Двигатель',
      slug: 'dvigatel',
      parentId: 31,
    },
    {
      name: 'Подвеска',
      slug: 'podveska',
      parentId: 31,
    },
    {
      name: 'Трансмиссия',
      slug: 'transmissiya',
      parentId: 31,
    },
    {
      name: 'Тормозная система',
      slug: 'tormoznaya-sistema',
      parentId: 31,
    },
    {
      name: 'Система очистки стекол и фар',
      slug: 'sistema-ochistki-stekol-i-far',
      parentId: 31,
    },
    {
      name: 'Топливная система',
      slug: 'toplivnaya-sistema',
      parentId: 31,
    },
    {
      name: 'Система выпуска',
      slug: 'sistema-vypuska',
      parentId: 31,
    },
    {
      name: 'Система питания',
      slug: 'sistema-pitaniya',
      parentId: 31,
    },
    {
      name: 'Система зажигания',
      slug: 'sistema-zazhiganiya',
      parentId: 31,
    },
    {
      name: 'Рулевое управление',
      slug: 'rulevoe-upravlenie',
      parentId: 31,
    },
    {
      name: 'Электрооборудование',
      slug: 'elektrooborudovanie',
      parentId: 31,
    },
    {
      name: 'Кузовные запчасти',
      slug: 'kuzovnye-zapchasti',
      parentId: 31,
    },
    {
      name: 'Отопители и кондиционирование',
      slug: 'otopiteli-i-konditsionirovanie',
      parentId: 31,
    },
    {
      name: 'Подшипники',
      slug: 'podshipniki',
      parentId: 31,
    },
    {
      name: 'Детали салона',
      slug: 'detali-salona',
      parentId: 31,
    },
    {
      name: 'Прочие запчасти',
      slug: 'prochie-zapchasti',
      parentId: 31,
    },
    {
      name: 'Автомагнитолы',
      slug: 'avtomagnitoly',
      parentId: 32,
    },
    {
      name: 'Головные устройства',
      slug: 'golovnye-ustroystva',
      parentId: 32,
    },
    {
      name: 'Колонки',
      slug: 'kolonki',
      parentId: 32,
    },
    {
      name: 'Сабвуферы для автомобиля',
      slug: 'sabvufery-dlya-avtomobilya',
      parentId: 32,
    },
    {
      name: 'Усилители',
      slug: 'usiliteli',
      parentId: 32,
    },
    {
      name: 'FM-трансмиттеры',
      slug: 'fm-transmittery',
      parentId: 32,
    },
    {
      name: 'Антенны',
      slug: 'antenny',
      parentId: 32,
    },
    {
      name: 'Установка автозвука',
      slug: 'ustanovka-avtozvuka',
      parentId: 32,
    },
    {
      name: 'Специнструменты для слесарных работ',
      slug: 'spetsinstrumenty-dlya-slesarnykh-rabot',
      parentId: 33,
    },
    {
      name: 'Инструменты для кузовных работ',
      slug: 'instrumenty-dlya-kuzovnykh-rabot',
      parentId: 33,
    },
    {
      name: 'Диагностическое оборудование',
      slug: 'diagnosticheskoe-oborudovanie',
      parentId: 33,
    },
    {
      name: 'Оборудование для авторемонта',
      slug: 'oborudovanie-dlya-avtoremonta',
      parentId: 33,
    },
    {
      name: 'Замена жидкостей автомобиля',
      slug: 'zamena-zhidkostey-avtomobilya',
      parentId: 33,
    },
    {
      name: 'Оборудование для парковки',
      slug: 'oborudovanie-dlya-parkovki',
      parentId: 33,
    },
    {
      name: 'Оборудование для автомойки',
      slug: 'oborudovanie-dlya-avtomoyki',
      parentId: 33,
    },
    {
      name: 'Оборудование для отвода выхлопных газов',
      slug: 'oborudovanie-dlya-otvoda-vykhlopnykh-gazov',
      parentId: 33,
    },
    {
      name: 'Подъемники для моторемонта',
      slug: 'podyemniki-dlya-motoremonta',
      parentId: 33,
    },
    {
      name: 'Аппараты для химчистки',
      slug: 'apparaty-dlya-khimchistki',
      parentId: 33,
    },
    {
      name: 'Ремонтные лежаки и сиденья',
      slug: 'remontnye-lezhaki-i-sidenya',
      parentId: 33,
    },
    {
      name: 'Хранение колес',
      slug: 'khranenie-koles',
      parentId: 33,
    },
    {
      name: 'Пасты для ремонтных работ',
      slug: 'pasty-dlya-remontnykh-rabot',
      parentId: 33,
    },
    {
      name: 'Интерьер автомобиля',
      slug: 'interyer-avtomobilya',
      parentId: 34,
    },
    {
      name: 'Чехлы и накидки на сиденья',
      slug: 'chekhly-i-nakidki-na-sidenya',
      parentId: 34,
    },
    {
      name: 'Ковры автомобильные',
      slug: 'kovry-avtomobilnye',
      parentId: 34,
    },
    {
      name: 'Экстерьер автомобиля',
      slug: 'eksterier-avtomobilya',
      parentId: 34,
    },
    {
      name: 'Изоляционные материалы',
      slug: 'izolyatsionnye-materialy',
      parentId: 34,
    },
    {
      name: 'Защита кузова',
      slug: 'zashchita-kuzova',
      parentId: 34,
    },
    {
      name: 'Перевозка багажа',
      slug: 'perevozka-bagazha',
      parentId: 34,
    },
    {
      name: 'Органайзеры и сумки в багажник',
      slug: 'organayzery-i-sumki-v-bagazhnik',
      parentId: 34,
    },
    {
      name: 'Автохолодильники',
      slug: 'avtokholodilniki',
      parentId: 34,
    },
    {
      name: 'Сувениры для автомобилистов',
      slug: 'suveniry-dlya-avtomobilistov',
      parentId: 34,
    },
    {
      name: 'Аварийные принадлежности',
      slug: 'avariynye-prinadlezhnosti',
      parentId: 34,
    },
    {
      name: 'Противоугонные устройства и блокираторы',
      slug: 'protivougonnye-ustroystva-i-blokiratory',
      parentId: 34,
    },
    {
      name: 'Подстаканники',
      slug: 'podstakanniki',
      parentId: 34,
    },
    {
      name: 'Моторные масла',
      slug: 'motornye-masla',
      parentId: 35,
    },
    {
      name: 'Трансмиссионные масла',
      slug: 'transmissionnye-masla',
      parentId: 35,
    },
    {
      name: 'Специальные масла',
      slug: 'spetsialnye-masla',
      parentId: 35,
    },
    {
      name: 'Смазки',
      slug: 'smazki',
      parentId: 35,
    },
    {
      name: 'Антикоры',
      slug: 'antikory',
      parentId: 35,
    },
    {
      name: 'Присадки и добавки',
      slug: 'prasadki-i-dobavki',
      parentId: 35,
    },
    {
      name: 'Антифризы',
      slug: 'antifrizy',
      parentId: 35,
    },
    {
      name: 'Промывки и очистители',
      slug: 'promyvki-i-ochistiteli',
      parentId: 35,
    },
    {
      name: 'Клей и герметики',
      slug: 'kley-i-germetiki',
      parentId: 35,
    },
    {
      name: 'Жидкости омывателя',
      slug: 'zhidkosti-omyvatelya',
      parentId: 35,
    },
    {
      name: 'Тормозные жидкости',
      slug: 'tormoznye-zhidkosti',
      parentId: 35,
    },
    {
      name: 'Дистиллированная вода и электролиты',
      slug: 'distillirovannaya-voda-i-elektrolity',
      parentId: 35,
    },
    {
      name: 'Жидкости для гидроусилителя',
      slug: 'zhidkosti-dlya-gidrousilitelya',
      parentId: 35,
    },
    {
      name: 'Средства для очистки рук',
      slug: 'sredstva-dlya-ochistki-ruk',
      parentId: 35,
    },
    {
      name: 'Наборы автохимии',
      slug: 'nabory-avtokhimii',
      parentId: 35,
    },
    {
      name: 'Шины',
      slug: 'shiny',
      parentId: 36,
    },
    {
      name: 'Мотошины',
      slug: 'motoshiny',
      parentId: 36,
    },
    {
      name: 'Диски',
      slug: 'diski',
      parentId: 36,
    },
    {
      name: 'Камеры',
      slug: 'kamery',
      parentId: 36,
    },
    {
      name: 'Колпаки на диски',
      slug: 'kolpaki-na-diski',
      parentId: 36,
    },
    {
      name: 'Ниппели, вентили и секретки',
      slug: 'nippeli-ventili-i-sekretki',
      parentId: 36,
    },
    {
      name: 'Заглушки для дисков',
      slug: 'zaglushki-dlya-diskov',
      parentId: 36,
    },
    {
      name: 'Центровочные кольца и проставки',
      slug: 'tsentrovocnye-koltsa-i-prostavki',
      parentId: 36,
    },
    {
      name: 'Уход за шинами и дисками',
      slug: 'ukhod-za-shinami-i-diskami',
      parentId: 36,
    },
    {
      name: 'Чехлы для колес',
      slug: 'chekhly-dlya-koles',
      parentId: 36,
    },
    {
      name: 'Цепи и ленты антипробуксовочные',
      slug: 'tsepi-i-lenty-antiprobuksovochnye',
      parentId: 36,
    },
    {
      name: 'Домкраты',
      slug: 'domkraty',
      parentId: 37,
    },
    {
      name: 'Лебедки',
      slug: 'lebedki',
      parentId: 37,
    },
    {
      name: 'Ручные инструменты',
      slug: 'ruchnye-instrumenty',
      parentId: 37,
    },
    {
      name: 'Компрессоры и комплектующие',
      slug: 'kompressory-i-komplektuyushchie',
      parentId: 37,
    },
    {
      name: 'Манометры',
      slug: 'manometry',
      parentId: 37,
    },
    {
      name: 'Пневмоинструменты',
      slug: 'pnevmoinstrumenty',
      parentId: 37,
    },
    {
      name: 'Крепеж',
      slug: 'krepezh',
      parentId: 37,
    },
    {
      name: 'Аксессуары для автоинструмента',
      slug: 'aksessuary-dlya-avtoinstrumenta',
      parentId: 37,
    },
    {
      name: 'Фаркопы',
      slug: 'farkopy',
      parentId: 37,
    },
    {
      name: 'Ароматизаторы автомобильные',
      slug: 'aromatizatory-avtomobilnye',
      parentId: 38,
    },
    {
      name: 'Воски и полироли',
      slug: 'voski-i-polioli',
      parentId: 38,
    },
    {
      name: 'Краски и грунтовки',
      slug: 'kraski-i-gruntovki',
      parentId: 38,
    },
    {
      name: 'Средства для ремонта царапин',
      slug: 'sredstva-dlya-remonta-tsarapin',
      parentId: 38,
    },
    {
      name: 'Чистящие средства для автомобиля',
      slug: 'chistyashchie-sredstva-dlya-avtomobilya',
      parentId: 38,
    },
    {
      name: 'Щетки, губки и салфетки',
      slug: 'shchetki-gubki-i-salfetki',
      parentId: 38,
    },
    {
      name: 'Пылесосы автомобильные',
      slug: 'pylesosy-avtomobilnye',
      parentId: 38,
    },
    {
      name: 'Мойки высокого давления и аксессуары',
      slug: 'moyki-vysokogo-davleniya-i-aksessuary',
      parentId: 38,
    },
    {
      name: 'Чехлы и утеплители',
      slug: 'chekhly-i-utepliteli',
      parentId: 38,
    },
    {
      name: 'Уход за стеклами и фарами',
      slug: 'ukhod-za-steklami-i-farami',
      parentId: 38,
    },
    {
      name: 'Антигравий',
      slug: 'antigraviy',
      parentId: 38,
    },
    {
      name: 'Размораживатели замков и стекол',
      slug: 'razmorazhivateli-zamkov-i-stekol',
      parentId: 38,
    },
    {
      name: 'Оптика для грузовиков',
      slug: 'optika-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Двигатели для грузовиков',
      slug: 'dvigateli-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Крепежные детали для грузовиков',
      slug: 'krepezhnye-detali-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Кузовные детали для грузовиков',
      slug: 'kuzovnye-detali-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Подвеска для грузовиков',
      slug: 'podveska-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Рулевое управление для грузовиков',
      slug: 'rulevoe-upravlenie-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Система выпуска для грузовиков',
      slug: 'sistema-vypuska-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Система зажигания для грузовиков',
      slug: 'sistema-zazhiganiya-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Система отопления, охлаждения для грузовиков',
      slug: 'sistema-otopleniya-okhlazhdeniya-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Система очистки стекол и фар для грузовиков',
      slug: 'sistema-ochistki-stekol-i-far-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Система питания для грузовиков',
      slug: 'sistema-pitaniya-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Тормозная система для грузовиков',
      slug: 'tormoznaya-sistema-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Трансмиссия для грузовиков',
      slug: 'transmissiya-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Универсальные детали для грузовиков',
      slug: 'universalnye-detali-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Фильтры для грузовиков',
      slug: 'filtry-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Электрооборудование для грузовиков',
      slug: 'elektrooborudovanie-dlya-gruzovikov',
      parentId: 39,
    },
    {
      name: 'Запчасти для спецтехники',
      slug: 'zapchasti-dlya-spetstekhniki',
      parentId: 39,
    },
    {
      name: 'Видеорегистраторы',
      slug: 'videoregistratory',
      parentId: 40,
    },
    {
      name: 'Аксессуары и запчасти для видеорегистраторов',
      slug: 'aksessuary-i-zapchasti-dlya-videoregistratorov',
      parentId: 40,
    },
    {
      name: 'Камеры обзора',
      slug: 'kamery-obzora',
      parentId: 40,
    },
    {
      name: 'Автосигнализации и брелоки',
      slug: 'avtosignalizatsii-i-breoloki',
      parentId: 40,
    },
    {
      name: 'Радар-детекторы',
      slug: 'radar-detektory',
      parentId: 40,
    },
    {
      name: 'Розетки и разветвители прикуривателя',
      slug: 'rozetki-i-razvetviteli-prikurivatelya',
      parentId: 40,
    },
    {
      name: 'Выключатели зажигания',
      slug: 'vyklyuchateli-zazhiganiya',
      parentId: 40,
    },
    {
      name: 'Алкотестеры',
      slug: 'alkotestery',
      parentId: 40,
    },
    {
      name: 'Парктроники и комплектующие',
      slug: 'parktroniki-i-komplektuyushchie',
      parentId: 40,
    },
    {
      name: 'Транспондеры',
      slug: 'transpondery',
      parentId: 40,
    },
    {
      name: 'Вентиляторы и увлажнители воздуха',
      slug: 'ventilyatory-i-uvlazhniteli-vozdukha',
      parentId: 40,
    },
    {
      name: 'Бытовая техника для автомобиля',
      slug: 'bytovaya-tekhnika-dlya-avtomobilya',
      parentId: 40,
    },
    {
      name: 'Бортовые компьютеры',
      slug: 'bortovye-kompyutery',
      parentId: 40,
    },
    {
      name: 'Мониторы для салона автомобиля',
      slug: 'monitory-dlya-salona-avtomobilya',
      parentId: 40,
    },
    {
      name: 'Тахографы и аксессуары',
      slug: 'takhografy-i-aksessuary',
      parentId: 40,
    },
    {
      name: 'Устройства ограничения скорости',
      slug: 'ustroystva-ogranicheniya-skorosti',
      parentId: 40,
    },
    {
      name: 'Нагревательные элементы',
      slug: 'nagrevatelnye-elementy',
      parentId: 40,
    },
    {
      name: 'Мотозапчасти',
      slug: 'motozapchasti',
      parentId: 43,
    },
    {
      name: 'Мотошины',
      slug: 'motoshini',
      parentId: 43,
    },
    {
      name: 'Мотоэкипировка',
      slug: 'motoekipirovka',
      parentId: 43,
    },
    {
      name: 'Экипировка для снегоходов',
      slug: 'ekipirovka-dlya-snegoxodov',
      parentId: 43,
    },
    {
      name: 'Мотоаксессуары',
      slug: 'motoakseccyary',
      parentId: 43,
    },
    {
      name: 'Мотохимия',
      slug: 'motoximia',
      parentId: 43,
    },
    {
      name: 'Мототехника',
      slug: 'mototexnika',
      parentId: 44,
    },
    {
      name: 'Спецтехника',
      slug: 'speztexnika',
      parentId: 44,
    },
    {
      name: 'Прицепы',
      slug: 'prizepy',
      parentId: 44,
    },
    {
      name: 'Аккумуляторные батареи',
      slug: 'akkumulyatornye-batarei',
      parentId: 45,
    },
    {
      name: 'Зарядные устройства для АКБ',
      slug: 'zaryadnye-ustroystva-dlya-akb',
      parentId: 45,
    },
    {
      name: 'Принадлежности для АКБ',
      slug: 'prinadlezhnosti-dlya-akb',
      parentId: 45,
    },
    {
      name: 'Аккумуляторные клеммы',
      slug: 'akkumulyatornye-klemmy',
      parentId: 45,
    },
    {
      name: 'Провода прикуривания',
      slug: 'provoda-prikurivaniya',
      parentId: 45,
    },
    {
      name: 'Зарядные станции для электромобилей',
      slug: 'zaryadnye-stantsii-dlya-elektromobiley',
      parentId: 45,
    }    
  ]);
}

avtotechnic();