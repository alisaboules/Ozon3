'use client';
import { useProductDetails } from '@/components/elements/product-item/useProductItem';
import { TCartItem } from '@/lib/db/types';
import { addCurrency } from '@/utils/add-currency';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import WowPriceIcon from '@/assets/вауцены.svg';
import Rasprodazha from '@/assets/распродажа.svg';
import PaymentCard from '@/assets/paymentCard.svg';
import { favouritesProductIdAtom } from '@/store';
import { useAtom } from 'jotai';
import { Heart, Trash2 } from 'lucide-react';
import { ProductsQuantity } from '@/components/elements/product-quantity/ProductQuantity';
import { useChangeQuantity } from '@/components/elements/product-quantity/useChangeQuantity';
import { useEffect, useState } from 'react';
import { Checkbox } from '@/components/elements/product-item/Checkbox';
import { ConfirmModal } from '@/components/ui/ConfirmModal';
import { Link } from '@/i18n/navigation';
import { PagesConfig } from '@/config/pages.config';
import { createOrder } from '@/lib/actions/order';
import { useRouter } from 'next/navigation';

interface Props {
  cartItem: TCartItem;
  quantityCart: number;
  checked: boolean;
  onToggle: () => void;
}

export function CartItem({ cartItem, quantityCart, checked, onToggle }: Props) {
  const details = useProductDetails(cartItem.product);
  const [favouriteProductId, setFavouriteProductId] = useAtom(favouritesProductIdAtom);
  const isFavourite = favouriteProductId.includes(cartItem.product.id);
  const toggleFavourite = () => {
    if (isFavourite) {
      setFavouriteProductId((ids) => ids.filter((id) => id != cartItem.product.id));
    } else {
      setFavouriteProductId((ids) => [...ids, cartItem.product.id]);
    }
  };
  const [inCart, setInCart] = useState(quantityCart > 0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { quantity, setQuantity, increase, decrease, isPendingQuantity, removeProduct } =
    useChangeQuantity({
      productId: cartItem.product.id,
      quantityCart,
      onRemove: () => setInCart(false),
    });
  useEffect(() => {
    setQuantity(quantityCart);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInCart(quantityCart > 0);
  }, [quantityCart, setQuantity]);
  const router = useRouter();
  const handleCheckout = async () => {
    const result = await createOrder([cartItem.product.id]);
    if (result?.success) {
      router.push(PagesConfig.ORDERS);
  }}
  return (
    <div className="grid grid-cols-[1fr_3fr_3fr_1fr] gap-1 items-start relative overflow-hidden">
      <div>
        <Link href={PagesConfig.PRODUCT_DETAILS(cartItem.product.slug)}>
          <Image
            src={cartItem.product.imageUrl}
            alt={cartItem.product.name}
            width={100}
            height={100}
            className="rounded-2xl shrink-0"
          />
        </Link>
        <div className="checkbox-wrapper absolute left-0 top-0 bg-white rounded-br-[14px] p-2">
          <div className=" ">
            <Checkbox checked={checked} onChange={onToggle} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-normal text-base text-[#070707]">{cartItem.product.name}</span>
        {details.discountPercent ? (
          <div className="cursor-pointer rounded-lg bg-pink-600 px-1 py-0.5 w-27 flex items-center gap-1.5 text-white text-xs font-semibold">
            <Rasprodazha className="w-4 h-4 text-white" />
            <span>Распродажа</span>
          </div>
        ) : (
          <div className="cursor-pointer rounded-lg bg-black px-1 py-0.5 flex w-23 items-center gap-1.5 text-white text-xs font-semibold">
            <WowPriceIcon className="w-4 h-4 text-pink-600" />
            <span>Вау-цены</span>
          </div>
        )}
        <div className="flex mt-2 gap-1">
          <button
            onClick={toggleFavourite}
            className={cn(
              'p-2 rounded-[10px] gap-1 flex items-center',
              isFavourite
                ? 'bg-[#ff91af]/10 hover:bg-[#f1117e]/10'
                : 'bg-[#0030780a] hover:bg-[#003078]/10',
            )}>
            <Heart
              className="transition-colors"
              size={20}
              fill={isFavourite ? 'red' : 'white'}
              stroke={isFavourite ? 'red' : 'black'}
            />
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="bg-[#0030780a] hover:bg-[#003078]/10 p-2 rounded-[10px] gap-1 flex items-center text-black">
            <Trash2 size={20} />
          </button>
          <button
            onClick={handleCheckout}
            className="bg-[#0030780a] hover:bg-[#003078]/10 px-3 rounded-[10px] gap-1 flex items-center text-black">
            <span className="font-semibold text-sm">Купить</span>
          </button>
        </div>
      </div>
      <div className="mt-1 flex items-start px-5 flex-col">
        <button
          className={cn(
            'text-base font-bold flex items-center gap-1',
            cartItem.product.discountPrice ? 'text-pink-600' : 'text-green-500',
          )}>
          <span>
            {cartItem.product.discountPrice
              ? addCurrency(cartItem.product.discountPrice * quantity)
              : addCurrency(cartItem.product.price * quantity)}
          </span>
          <PaymentCard />
        </button>
        <span className="font-bold text-xs text-[#001a34]/40">
          {addCurrency(details.withOutCardPrice * quantity)}
        </span>
      </div>
      <ProductsQuantity
        isPendingQuantity={isPendingQuantity}
        quantity={quantity}
        decrease={decrease}
        increase={increase}
      />
      <ConfirmModal
        open={showDeleteModal}
        title="Удалить товар"
        description="Вы точно хотите удалить выбранный товар? Отменить данное действие будет невозможно."
        confirmText="Удалить"
        cancelText="Отмена"
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          removeProduct();
          setShowDeleteModal(false);
        }}
      />
    </div>
  )
}