'use client';
import { TCartItem } from '@/lib/db/types';
import { addCurrency } from '@/utils/add-currency';
import Image from 'next/image';
import PaymentCard from '@/assets/paymentCard.svg';
import Galoshka from '@/assets/галочка.svg';
import Basket from '@/assets/basket.svg';
import Warning from '@/assets/warning.svg';
import { CheckoutButton } from './ChekoutButton';

interface Props {
  items: TCartItem[];
  selectedItems: string[];
}

export function Pay({ items, selectedItems }: Props) {
  const productsPrice = items.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);

  const totalWithBanks = items.reduce((sum, item) => {
    return sum + (item.product.discountPrice ?? item.product.price) * item.quantity;
  }, 0);

  const totalWithoutBanks = items.reduce((sum, item) => {
    const price = item.product.discountPrice
      ? Math.ceil((item.product.discountPrice * 10) / 9)
      : Math.ceil((item.product.price * 10) / 9);

    return sum + price * item.quantity;
  }, 0);

  const discount = productsPrice - totalWithoutBanks;
  const hasSelectedItems = items.length > 0;
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="flex flex-col gap-3 ">
      <div className="bg-background rounded-3xl flex flex-col">
        <div className="p-6 flex flex-col gap-3">
          <CheckoutButton items={items} selectedItems={selectedItems}/>
          {hasSelectedItems && (
            <span className="text-sm text-[#001a33]/60 font-normal">
              Доступные способы и время доставки можно выбрать при оформлении заказа
            </span>
          )}
          {!hasSelectedItems && (
            <button className="bg-[#003078]/4 text-[#070707]/40 rounded-2xl gap-2 flex items-start p-4 justify-start">
              <Warning className="w-6 h-6 text-[#001a34]/40" />
              <span className="text-[#001a33]/60 text-sm text-left">
                Выберите товары, чтобы перейти к оформлению заказа
              </span>
            </button>
          )}
        </div>
        {hasSelectedItems && (
          <>
            <div className="h-px bg-gray-200" />
            <div className="p-6 flex flex-col gap-4">
              <span className="font-bold text-xl">Ваша корзина</span>
              <div className="flex justify-between items-center">
                <span className="text-sm">{`Товары (${count})`}</span>
                <span className="text-sm font-bold">{addCurrency(productsPrice)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Скидка</span>
                <span className="text-sm font-bold text-pink-600">{`${addCurrency(discount)}`}</span>
              </div>
            </div>
          </>
        )}
        {hasSelectedItems && (
          <>
            <div className="mx-6 h-px bg-gray-200" />
            <div className="p-6 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">Итого</span>
                <span className="text-green-500 font-bold text-xl">
                  {addCurrency(totalWithBanks)}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-base font-normal text-[#001a33]/60">С банками</span>
                <div className="flex items-center gap-1">
                  <Image
                    src="/ozon_card.webp"
                    alt="ozon_card"
                    width={20}
                    height={20}
                    className="object-cover"
                    draggable={false}
                  />
                  <Image
                    src="/sovkombank_card.webp"
                    alt="sovkombank_card"
                    width={20}
                    height={20}
                    className="object-cover"
                    draggable={false}
                  />
                  <Image
                    src="/royal_blac_card.webp"
                    alt="royal_blac_card"
                    width={20}
                    height={20}
                    className="object-cover"
                    draggable={false}
                  />
                  <Image
                    src="/otp_light_card.webp"
                    alt="otp_light_card"
                    width={20}
                    height={20}
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base text-[#001a33]/60 font-normal">
                  Другие способы оплаты
                </span>
                <span className="font-semibold text-sm text-[#001a33]/60">
                  {addCurrency(totalWithoutBanks)}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      {hasSelectedItems && (
        <div className="bg-background rounded-3xl flex gap-3 py-4 pl-6 pr-2 items-center">
          <div className="bg-[#5b51de] rounded-2xl flex items-center justify-center p-3">
            <PaymentCard className="text-[#cbf778] w-7 h-7" />
          </div>
          <div className="flex flex-col w-full">
            <span className="font-normal text-base text-[#070707]">С кредитной Ozon картой</span>
            <span className="font-normal text-sm text-[#001a33]/60">0% до 40 дней</span>
          </div>
          <Galoshka className="text-[#001a34]/20 w-8 h-8 font-bold" />
        </div>
      )}
      <div className="bg-background rounded-3xl flex gap-3 py-4 pl-6 pr-2 items-center">
        <div className="bg-[#37bfff]/10 rounded-2xl flex items-center justify-center p-3">
          <Basket className="text-[#003078] w-7 h-7" />
        </div>
        <div className="flex flex-col w-full">
          <span className="font-medium text-base text-[#070707]">Покупайте как юрлицо</span>
          <span className="font-normal text-sm text-[#001a33]/60">
            Возврат НДС до 22% и отсрочка платежа
          </span>
        </div>
        <Galoshka className="text-[#001a34]/20 w-8 h-8 font-bold" />
      </div>
    </div>
  );
}
