import Image from 'next/image';
import { useAtom } from 'jotai';
import { favouritesProductIdAtom } from '@/store';
import Sms from '@/assets/смс.svg';
import { addCurrency } from '@/utils/add-currency';
import { Heart } from 'lucide-react';
import { useProductDetails } from '@/components/elements/product-item/useProductItem';
import { TProductWithReviews } from '@/lib/db/types';
import Galoshka from '@/assets/галочка.svg';
import { useEffect, useState, useTransition } from 'react';
import { cn } from '@/utils/cn';
import { addToCart } from '@/lib/actions/cart';
import { useRouter } from 'next/navigation';
import { PagesConfig } from '@/config/pages.config';
import { ProductsQuantity } from '@/components/elements/product-quantity/ProductQuantity';
import { useChangeQuantity } from '@/components/elements/product-quantity/useChangeQuantity';
import { buyNow } from '@/lib/actions/order';
import { useCartSelectionStore } from '@/components/elements/product-quantity/cart-selection';

interface Props {
  product: TProductWithReviews;
  quantityCart: number;
}

export function ProductPurchaseSection({ product, quantityCart }: Props) {
  const [favouriteProductId, setFavouriteProductId] = useAtom(favouritesProductIdAtom);
  const isFavourite = favouriteProductId.includes(product.id);
  const toggleFavourite = () => {
    if (isFavourite) {
      setFavouriteProductId((ids) => ids.filter((id) => id != product.id));
    } else {
      setFavouriteProductId((ids) => [...ids, product.id]);
    }
  };
  const details = useProductDetails(product);
  const router = useRouter();
  
  const handleCheckout = async () => {
  const result = await buyNow(product.id, quantity);

  if (result.success) {
    router.push(PagesConfig.ORDERS);
  }
};
  const [inCart, setInCart] = useState(quantityCart > 0);
  const [isPending, startTransition] = useTransition();
  const { addItem } = useCartSelectionStore();
  const purchaseProduct = () => {
    setQuantity(1);
    setInCart(true);

    startTransition(async () => {
      await addToCart(product.id);
      addItem(product.id);
    });
  };
  const { quantity, setQuantity, increase, decrease, isPendingQuantity } = useChangeQuantity({
    productId: product.id,
    quantityCart,
    onRemove: () => setInCart(false),
  });
  useEffect(() => {
    setQuantity(quantityCart);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInCart(quantityCart > 0);
  }, [quantityCart, setQuantity]);
  const [showDelivery, setShowDelivery] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDelivery(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="mt-2 mr-2 flex flex-col gap-5">
      <div className="flex items-center justify-between py-2 px-3 border border-[#ccd6e4]/60 rounded-[20px]">
        <div className="group flex items-center gap-1 hover:text-[#1344b8]">
          <Image
            src="/percent.webp"
            alt="процент"
            width={40}
            height={40}
            className="object-cover"
            draggable={false}
          />
          <span className="text-sm font-semibold cursor-pointer">Распродажа</span>
          <Galoshka className="text-[#001a34]/20 group-hover:text-[#1344b8]" />
        </div>
        <div className="bg-[#003078]/4 px-3 rounded-xl cursor-pointer">
          <span className="text-xs font-semibold">4 дня до конца</span>
        </div>
      </div>
      <div className="flex flex-col rounded-[20px] p-4 shadow-[0_20px_12px_-16px_rgba(0,30,85,0.1),0_8px_24px_18px_rgba(0,30,85,0.05)]">
        <div className="mt-1 flex items-center mb-1">
          <div className="flex items-center gap-1">
            <div className="bg-green-500 rounded-md px-1">
              <span className="text-white font-bold text-3xl">
                {product.discountPrice
                  ? addCurrency(product.discountPrice)
                  : addCurrency(product.price)}
              </span>
            </div>
            <span className="text-sm font-medium">С банками</span>
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
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold text-[#001a33]/60">
            {addCurrency(details.withOutCardPrice)}
          </span>
          {product.discountPrice && (
            <span className="line-through mt-0.5 font-normal text-sm text-[#001a33]/60">
              {addCurrency(product.price)}
            </span>
          )}
          <span className="text-sm font-medium text-[#001a33]/60">С другими банками</span>
        </div>
        <div className="hover:bg-[#003078]/10 bg-[#003078]/4 relative mt-3 overflow-hidden flex gap-2 items-center p-3 rounded-[10px]">
          <div className="absolute top-0 bottom-0 w-25 blickIn pointer-events-none"></div>
          <button className="bg-[#5b51de] text-white py-1.5 px-2 rounded-md text-sm font-semibold">
            Оплатить позже
          </button>
          <span className="text-sm font-semibold z-10">без % до 14 октября</span>
        </div>
        <div className="hover:bg-[#003078]/10 bg-[#003078]/4 flex gap-2 mt-3 items-center p-3 rounded-[10px]">
          <Sms className="text-black" />
          <span className="text-sm font-normal text-black">Хочу скидку</span>
        </div>
        <div className="flex items-center justify-between gap-2 cursor-pointer mt-3">
          {!inCart ? (
            <button
              onClick={purchaseProduct}
              disabled={isPending}
              className={cn(
                'bg-primary hover:bg-[#0052e6] flex flex-1 flex-col items-center justify-center rounded-2xl text-white transition-all',
                showDelivery ? 'h-14' : 'h-14',
              )}>
              <span className="text-base font-semibold">В корзину</span>
              <span
                className={cn(
                  'overflow-hidden text-sm font-normal transition-all duration-500',
                  showDelivery
                    ? 'max-h-6 opacity-100 translate-y-0 mt-0.5'
                    : 'max-h-0 opacity-0 -translate-y-1',
                )}>
                Доставим {details.dataDelivery}
              </span>
            </button>
          ) : (
            <div className="flex flex-1 gap-2">
              <button
                onClick={() => {
                  router.push(PagesConfig.CART);
                }}
                className="bg-[#00c73c] py-6 px-8 hover:bg-[#00b336] flex-1 h-14 min-w-0 rounded-2xl text-white flex flex-col justify-center items-center">
                <span className="text-[16px] font-semibold whitespace-nowrap">В корзине</span>
                <span className="text-sm">{details.dataDelivery}</span>
              </button>

              <ProductsQuantity
                isPendingQuantity={isPendingQuantity}
                decrease={decrease}
                increase={increase}
                quantity={quantity}
              />
            </div>
          )}
          <div
            className="bg-[#37afff]/10 hover:bg-primary/10 h-14 w-14 flex justify-center items-center rounded-2xl"
            onClick={toggleFavourite}>
            <Heart size={24} className={isFavourite ? 'text-red-500' : 'text-primary'} />
          </div>
        </div>
      </div>
      <button onClick={handleCheckout} className="bg-[#37afff]/10 hover:bg-primary/10 flex justify-center items-center rounded-2xl text-primary text-base font-semibold py-3">
        Купить сейчас
      </button>
    </div>
  );
}
