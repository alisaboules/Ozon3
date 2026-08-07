import { getCart } from '@/lib/actions/cart';
import type { Metadata } from 'next';
import { CartContent } from './cartContent';

export const metadata: Metadata = {
  title: 'Корзина',
};

export default async function Сart() {
  const cart = await getCart();
  const totalCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  console.log(cart);
  return (
    <div className="mt-10 mb-20">
      <div className="relative">
        <h1 className="font-bold text-4xl">Корзина{cart.items.length != 0 && (<sup className="align-top text-lg font-medium text-[#001a33]/60">{totalCount}</sup>)}</h1>
      </div>
      <div className="mt-6">
        {cart.items.length == 0 ? <p>Ваша корзина пуста.</p> : <CartContent items={cart.items} />}
      </div>
    </div>
  );
}
