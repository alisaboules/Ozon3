import { getUserOrders } from '@/lib/actions/order';
import { addCurrency } from '@/utils/add-currency';
import { cn } from '@/utils/cn';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Мои заказы',
};
export const dynamic = 'force-dynamic';
const statusLabels: Record<string, string> = {
  pending: 'В обработке',
  paid: 'Оплачен',
  shipped: 'Отправлен',
  delivered: 'Доставлен',
  canceled: 'Отменён',
};

export default async function Page() {
  const orders = await getUserOrders();
  return (
    <div className="mt-10">
      <h1 className="font-bold text-4xl">Мои заказы</h1>
      {orders.length ? (
        <div className="my-10">
          {orders.map((order) => (
            <div key={order.id} className="border border-gray-200 rounded-3xl p-6 bg-background mb-3">
              <div className="grid grid-cols-[1.5fr_3fr] divide-gray-200 divide-x mb-4 ">
                <div className="flex flex-col gap-1 pr-5">
                  <h3 className="text-[#001A33]/60 font-bold text-2xl">
                    Получен{' '}
                    {new Date(order.createdAt).toLocaleDateString('ru-RU', {
                      day: 'numeric',
                      month: 'long',
                    })}
                  </h3>
                  <span className="text-base text-[#001A33]/60 font-normal">
                    Доставка в пункт выдачи
                  </span>
                  <div
                    className={cn(
                      'font-medium mt-5',
                      order.status == 'paid'
                        ? 'text-green-600'
                        : order.status == 'canceled'
                          ? 'text-red-600'
                          : order.status == 'delivered'
                            ? 'text-blue-600'
                            : order.status == 'shipped'
                              ? 'text-purple-600'
                              : order.status == 'pending'
                                ? 'text-orange-600'
                                : '',
                    )}>
                    {statusLabels[order.status] || 'Неизвестен'}
                    <div className="text-xl font-bold">{addCurrency(order.total)}</div>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button className="flex-1 rounded-2xl bg-primary hover:bg-primary/90 text-white font-semibold py-4 transition-colors">
                      Оставить чаевые
                    </button>

                    <button className="flex-1 rounded-2xl bg-[#e6f2ff] hover:bg-[#d9ebff] text-primary font-semibold py-4 transition-colors">
                      Оценить товары
                    </button>
                  </div>
                </div>
                <div className="flex flex-col pl-5 gap-2">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex ">
                      <Image
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        width={75}
                        height={75}
                        className="object-cover rounded-md"
                      />
                      <div className="flex flex-col gap-1 items-start px-2">
                        <span className="font-medium">{item.product.name}</span>
                        <span className="text-sm opacity-50">{`Количество: ${item.quantity} (шт.) по ${addCurrency(item.price)} каждая`}</span>
                        <span className="font-bold">{addCurrency(item.quantity * item.price)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-6">У вас ещё нет заказов.</p>
      )}
    </div>
  );
}
