import { db } from './index';
import { product_attributes } from './schema';

async function products_attributes() {
  await db.delete(product_attributes);
  await db.insert(product_attributes).values([
    {
      product_id: '1',
      title: 'Тип',
      value: 'БАД моно-и-мульти-аминокислота',
    },
    {
      product_id: '1',
      title: 'Основной компонент',
      value: 'L-аргинин',
    },
    {
      product_id: '1',
      title: 'Номер СГР',
      value: 'RU.77.99.88.003.R.002473.08.23',
    },
    {
      product_id: '1',
      title: 'Страна-изготовитель',
      value: 'Россия',
    },
    {
      product_id: '1',
      title: 'Вес товара, г',
      value: '45',
    },
    {
      product_id: '2',
      title: 'Тип',
      value: 'Канат',
    },
    {
      product_id: '2',
      title: 'Длина, м',
      value: '150',
    },
    {
      product_id: '2',
      title: 'Разрывная нагрузка, кгс',
      value: '410',
    },
    {
      product_id: '2',
      title: 'Материал',
      value: 'Джут',
    },
    {
      product_id: '2',
      title: 'Единиц в одном товаре',
      value: '1',
    },
    {
      product_id: '3',
      title: 'Тип',
      value: 'Диван раскладной',
    },
    {
      product_id: '3',
      title: 'Вид раскладывания',
      value: 'Еврокнижка',
    },
    {
      product_id: '3',
      title: 'Высота, см',
      value: '92',
    },
    {
      product_id: '3',
      title: 'Глубина, см',
      value: '70',
    },
    {
      product_id: '3',
      title: 'Материал обивки',
      value: 'Велюр искусственный',
    },
    {
      product_id: '4',
      title: 'Сезон',
      value: 'На любой сезон',
    },
    {
      product_id: '4',
      title: 'Материал',
      value: 'TPU soft',
    },
    {
      product_id: '4',
      title: 'Состав материала',
      value: 'Полиуретановое покрытие из полиэфирной тафты;',
    },
    {
      product_id: '4',
      title: 'Коллекция',
      value: 'Весна-лето 2026',
    },
    {
      product_id: '4',
      title: 'Рост',
      value: '150-190',
    },
    {
      product_id: '5',
      title: 'Материал стельки',
      value: 'ПВХ (поливинилхлорид)',
    },
    {
      product_id: '5',
      title: 'Материал подошвы обуви',
      value: 'ПВХ (поливинилхлорид)',
    },
    {
      product_id: '5',
      title: 'Полнота',
      value: 'R (средняя)',
    },
    {
      product_id: '5',
      title: 'Сезон',
      value: 'На любой сезон',
    },
    {
      product_id: '5',
      title: 'Сттана бренда',
      value: 'Россия',
    },
    {
      product_id: '6',
      title: 'Тип',
      value: 'Игрушка для животных',
    },
    {
      product_id: '6',
      title: 'Вид игрушки для животных',
      value: 'Лазерная указка',
    },
    {
      product_id: '6',
      title: 'Предназначено для',
      value: 'Для кошек, Для собак, Для грызунов',
    },
    {
      product_id: '6',
      title: 'Цвет',
      value: 'Серебристый',
    },
    {
      product_id: '6',
      title: 'Единиц в одном товаре',
      value: '1',
    },
    {
      product_id: '7',
      title: 'Тип',
      value: 'Вешалка настенная',
    },
    {
      product_id: '7',
      title: 'Ширина, см',
      value: '74',
    },
    {
      product_id: '7',
      title: 'Материал крючков',
      value: 'Металл',
    },
    {
      product_id: '7',
      title: 'Высота, см',
      value: '98',
    },
    {
      product_id: '7',
      title: 'Количество крючков, шт.',
      value: '8',
    },
    {
      product_id: '8',
      title: 'Тип',
      value: 'Ручка для двери',
    },
    {
      product_id: '8',
      title: 'Вид замка',
      value: 'Врезной',
    },
    {
      product_id: '8',
      title: 'Единиц в одном товаре',
      value: '1',
    },
    {
      product_id: '8',
      title: 'Максимальная толщина двери, мм',
      value: '76',
    },
    {
      product_id: '8',
      title: 'Длина, мм',
      value: '120',
    },
    {
      product_id: '9',
      title: 'Тип',
      value: 'Аксессуары для туризма',
    },
    {
      product_id: '9',
      title: 'Вид туристического аксессуара',
      value: 'Накомарник',
    },
    {
      product_id: '9',
      title: 'Единиц в одном товаре',
      value: '1',
    },
    {
      product_id: '9',
      title: 'Функции',
      value: 'Защита от насекомых',
    },
    {
      product_id: '9',
      title: 'Длина, м',
      value: '0.5',
    },
    {
      product_id: '10',
      title: 'Тип',
      value: 'Шапка для бани',
    },
    {
      product_id: '10',
      title: 'Материал',
      value: 'Войлок, Искусственный войлок, Фетр',
    },
    {
      product_id: '10',
      title: 'Пол',
      value: 'Женский',
    },
    {
      product_id: '10',
      title: 'Цвет',
      value: 'Лисичка',
    },
    {
      product_id: '10',
      title: 'Страна-изготовитель',
      value: 'Россия',
    },
    {
      product_id: '11',
      title: 'Тип',
      value: 'Ваза',
    },
    {
      product_id: '11',
      title: 'Высота, см',
      value: '30',
    },
    {
      product_id: '11',
      title: 'Размещение вазы',
      value: 'Напольное, Настольное',
    },
    {
      product_id: '11',
      title: 'Единиц в одном товаре',
      value: '1',
    },
    {
      product_id: '11',
      title: 'Материал',
      value: 'Стекло',
    },
    {
      product_id: '12',
      title: 'Тип',
      value: 'Гель для бровей',
    },
    {
      product_id: '12',
      title: 'Цвет',
      value: 'Коричнево-пепельный, тон 03',
    },
    {
      product_id: '12',
      title: 'Особенности товара',
      value: 'Не тестируется на животных',
    },
    {
      product_id: '12',
      title: 'Водостойкость',
      value: 'нет',
    },
    {
      product_id: '12',
      title: 'Целевая аудитория',
      value: 'Взрослая',
    },
    {
      product_id: '13',
      title: 'Тип',
      value: 'Подушка',
    },
    {
      product_id: '13',
      title: 'Размерность',
      value: '50х70',
    },
    {
      product_id: '13',
      title: 'Материал чехла',
      value: 'Хлопок, Полиэстер',
    },
    {
      product_id: '13',
      title: 'Жёсткость подушки',
      value: 'Мягкая',
    },
    {
      product_id: '13',
      title: 'Материал наполнителя',
      value: 'Микрогель, Шёлк',
    },
    {
      product_id: '14',
      title: 'Тип',
      value: 'Сыворотка для волос',
    },
    {
      product_id: '14',
      title: 'Солнцезащитная косметика',
      value: 'Нет',
    },
    {
      product_id: '14',
      title: 'Бьюти-ингредиент',
      value: 'Растительный экстракт, Экстракт мёда',
    },
    {
      product_id: '14',
      title: 'Тип волос',
      value: 'Для всех типов волос, Смешанный тип волос, Для чувствительной кожи головы',
    },
    {
      product_id: '14',
      title: 'Эффект',
      value: 'От перхоти, Утолщение, Фиксация',
    },
    {
      product_id: '15',
      title: 'Тип',
      value: 'Свеча',
    },
    {
      product_id: '15',
      title: 'Единиц в одном товаре',
      value: '30',
    },
    {
      product_id: '15',
      title: 'Название аромата',
      value: 'Свечи 55 гр. -30шт.',
    },
    {
      product_id: '15',
      title: 'Аромат',
      value: 'Без отдушки',
    },
    {
      product_id: '15',
      title: 'Время горения, ч',
      value: '9',
    },
  ]);
}

products_attributes();