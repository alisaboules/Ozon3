import { useProductDetails } from '@/components/elements/product-item/useProductItem';
import Image from 'next/image';
import WowPriceIcon from '@/assets/вауцены.svg';
import Rasprodazha from '@/assets/распродажа.svg';
import PaymentCard from '@/assets/paymentCard.svg';
import { TCartItem } from '@/lib/db/types';
import { cn } from '@/utils/cn';
import { addCurrency } from '@/utils/add-currency';

interface Props {
  item: TCartItem;
}

export function ShareItem({ item }: Props) {
  const details = useProductDetails(item.product);
  return (
    <div className="grid grid-cols-[0.5fr_3fr_1fr] gap-3">
      <Image src={item.product.imageUrl} alt="" width={75} height={75} className="rounded-2xl" />

      <div className="flex flex-col gap-1 w-full">
        <div className="font-medium text-base">{item.product.name}</div>

        {details.discountPercent ? (
          <div className="cursor-pointer rounded-lg bg-pink-600 px-1 py-0.5 w-27 flex items-center gap-1.5 text-white text-xs font-semibold">
            <Rasprodazha className="w-4 h-4" />
            <span>Распродажа</span>
          </div>
        ) : (
          <div className="cursor-pointer rounded-lg bg-black px-1 py-0.5 w-23 flex items-center gap-1.5 text-white text-xs font-semibold">
            <WowPriceIcon className="w-5 h-5 text-pink-600" />
            <span>Вау-цены</span>
          </div>
        )}

        <div className="text-sm text-[#001a33]/60">{item.quantity} ед</div>
      </div>
      <div className="mt-1 flex items-start px-5 flex-col">
        <button
          className={cn(
            'text-base font-bold flex items-center gap-1',
            item.product.discountPrice ? 'text-pink-600' : 'text-green-500',
          )}>
          <span>
            {item.product.discountPrice
              ? addCurrency(item.product.discountPrice * item.quantity)
              : addCurrency(item.product.price * item.quantity)}
          </span>
          <PaymentCard />
        </button>
        <span className="font-bold text-xs text-[#001a34]/40">
          {addCurrency(details.withOutCardPrice * item.quantity)}
        </span>
      </div>
    </div>
  );
}
