import { db } from './index';
import { productImages } from './schema';

async function product_images() {
  await db.insert(productImages).values([
    {
      productId: '1',
      imageUrl: '/озон1.webp',
      order: 1,
    },
    {
      productId: '1',
      imageUrl: '/озон1_2.webp',
      order: 2,
    },
    {
      productId: '1',
      imageUrl: '/озон1_3.webp',
      order: 3,
    },
    {
      productId: '1',
      imageUrl: '/озон1_4.webp',
      order: 4,
    },
    {
      productId: '1',
      imageUrl: '/озон1_5.webp',
      order: 5,
    },
    { productId: '2', imageUrl: '/озон2.webp', order: 1 },
  { productId: '2', imageUrl: '/озон2_2.webp', order: 2 },
  { productId: '2', imageUrl: '/озон2_3.webp', order: 3 },
  { productId: '2', imageUrl: '/озон2_4.webp', order: 4 },
  { productId: '2', imageUrl: '/озон2_5.webp', order: 5 },

  { productId: '3', imageUrl: '/озон3.webp', order: 1 },
  { productId: '3', imageUrl: '/озон3_2.webp', order: 2 },
  { productId: '3', imageUrl: '/озон3_3.webp', order: 3 },
  { productId: '3', imageUrl: '/озон3_4.webp', order: 4 },
  { productId: '3', imageUrl: '/озон3_5.webp', order: 5 },

  { productId: '4', imageUrl: '/озон4.webp', order: 1 },
  { productId: '4', imageUrl: '/озон4_2.webp', order: 2 },
  { productId: '4', imageUrl: '/озон4_3.webp', order: 3 },
  { productId: '4', imageUrl: '/озон4_4.webp', order: 4 },
  { productId: '4', imageUrl: '/озон4_5.webp', order: 5 },

  { productId: '5', imageUrl: '/озон5.webp', order: 1 },
  { productId: '5', imageUrl: '/озон5_2.webp', order: 2 },
  { productId: '5', imageUrl: '/озон5_3.webp', order: 3 },
  { productId: '5', imageUrl: '/озон5_4.webp', order: 4 },
  { productId: '5', imageUrl: '/озон5_5.webp', order: 5 },

  { productId: '6', imageUrl: '/озон6.webp', order: 1 },
  { productId: '6', imageUrl: '/озон6_2.webp', order: 2 },
  { productId: '6', imageUrl: '/озон6_3.webp', order: 3 },
  { productId: '6', imageUrl: '/озон6_4.webp', order: 4 },

  { productId: '7', imageUrl: '/озон7.webp', order: 1 },
  { productId: '7', imageUrl: '/озон7_2.webp', order: 2 },
  { productId: '7', imageUrl: '/озон7_3.webp', order: 3 },
  { productId: '7', imageUrl: '/озон7_4.webp', order: 4 },
  { productId: '7', imageUrl: '/озон7_5.webp', order: 5 },

  { productId: '8', imageUrl: '/озон8.webp', order: 1 },
  { productId: '8', imageUrl: '/озон8_2.webp', order: 2 },
  { productId: '8', imageUrl: '/озон8_3.webp', order: 3 },
  { productId: '8', imageUrl: '/озон8_4.webp', order: 4 },
  { productId: '8', imageUrl: '/озон8_5.webp', order: 5 },

  { productId: '9', imageUrl: '/озон9.webp', order: 1 },
  { productId: '9', imageUrl: '/озон9_2.webp', order: 2 },
  { productId: '9', imageUrl: '/озон9_3.webp', order: 3 },
  { productId: '9', imageUrl: '/озон9_4.webp', order: 4 },

  { productId: '10', imageUrl: '/озон10.webp', order: 1 },
  { productId: '10', imageUrl: '/озон10_2.webp', order: 2 },
  { productId: '10', imageUrl: '/озон10_3.webp', order: 3 },
  { productId: '10', imageUrl: '/озон10_4.webp', order: 4 },
  { productId: '10', imageUrl: '/озон10_5.webp', order: 5 },

  { productId: '11', imageUrl: '/озон11.webp', order: 1 },
  { productId: '11', imageUrl: '/озон11_2.webp', order: 2 },
  { productId: '11', imageUrl: '/озон11_3.webp', order: 3 },
  { productId: '11', imageUrl: '/озон11_4.webp', order: 4 },
  { productId: '11', imageUrl: '/озон11_5.webp', order: 5 },

  { productId: '12', imageUrl: '/озон12.webp', order: 1 },
  { productId: '12', imageUrl: '/озон12_2.webp', order: 2 },
  { productId: '12', imageUrl: '/озон12_3.webp', order: 3 },
  { productId: '12', imageUrl: '/озон12_4.webp', order: 4 },
  { productId: '12', imageUrl: '/озон12_5.webp', order: 5 },

  { productId: '13', imageUrl: '/озон13.webp', order: 1 },
  { productId: '13', imageUrl: '/озон13_2.webp', order: 2 },
  { productId: '13', imageUrl: '/озон13_3.webp', order: 3 },
  { productId: '13', imageUrl: '/озон13_4.webp', order: 4 },
  { productId: '13', imageUrl: '/озон13_5.webp', order: 5 },

  { productId: '14', imageUrl: '/озон14.webp', order: 1 },
  { productId: '14', imageUrl: '/озон14_2.webp', order: 2 },
  { productId: '14', imageUrl: '/озон14_3.webp', order: 3 },
  { productId: '14', imageUrl: '/озон14_4.webp', order: 4 },
  { productId: '14', imageUrl: '/озон14_5.webp', order: 5 },

  { productId: '15', imageUrl: '/озон15.webp', order: 1 },
  { productId: '15', imageUrl: '/озон15_2.webp', order: 2 },
  { productId: '15', imageUrl: '/озон15_3.webp', order: 3 },
  { productId: '15', imageUrl: '/озон15_4.webp', order: 4 },
  ])
}
product_images();