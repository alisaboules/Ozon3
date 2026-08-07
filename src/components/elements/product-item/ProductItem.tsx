'use client'
import { TProductWithReviews } from '@/lib/db/types';
import { addCurrency } from '@/utils/add-currency';
import { cn } from '@/utils/cn';
import { Heart, MessageCircle, Star } from 'lucide-react';
import Image from 'next/image';
import WowPriceIcon from '@/assets/вауцены.svg';
import Rasprodazha from '@/assets/распродажа.svg';
import { declensionReview } from '@/utils/declension-review';
import { useAtom } from 'jotai';
import { favouritesProductIdAtom } from '@/store';
import { PagesConfig } from '@/config/pages.config';
import { Link } from '@/i18n/navigation';
import { useProductDetails } from './useProductItem';

interface Props {
  product: TProductWithReviews;
}

export function ProductItem({ product }: Props) {
  const [favouriteProductId, setFavouriteProductId] = useAtom(favouritesProductIdAtom)
  const isFavourite = favouriteProductId.includes(product.id)
  const toggleFavourite = () => {
    if (isFavourite) {
      setFavouriteProductId((ids) => ids.filter((id) => id != product.id))
    } else {
      setFavouriteProductId((ids) => [...ids, product.id])
    }
  }
  const details = useProductDetails(product);
  return (
    <div className="bg-background rounded-2xl p-1 zoomIn">
      <div className="relative">
        <Link href={PagesConfig.PRODUCT_DETAILS(product.slug)}>
          <Image
            className="object-cover h-[93.25] rounded-t-2xl"
            width={280}
            height={375}
            alt={product.name}
            src={product.imageUrl}
            draggable={false}
          />
        </Link>
        <button className="absolute top-2 right-2" onClick={toggleFavourite}>
          <Heart className='transition-colors' fill={isFavourite ? "red" : "white"} stroke={isFavourite ? 'red' : 'black' } />
        </button>
        {details.discountPercent ? (
          <div className="rounded-lg bg-pink-600 absolute left-2 bottom-1.5 px-2 py-0.5 flex items-center text-white text-sm font-semibold">
            <Rasprodazha className="w-5 h-5 text-white" />
            <span>Распродажа</span>
          </div>
        ) : (
          <div className="rounded-lg bg-black absolute left-2 bottom-1.5 px-2 py-0.5 flex items-center gap-1.5 text-white text-sm font-semibold">
            <WowPriceIcon className="w-5 h-5 text-pink-600" />
            <span>Вау-цены</span>
          </div>
        )}
      </div>
      <div className="p-1">
        <div className="mt-1 flex items-center">
          <span
            className={cn(
              'text-xl font-bold',
              product.discountPrice ? 'text-pink-600' : 'text-green-500',
            )}>
            {product.discountPrice
              ? addCurrency(product.discountPrice)
              : addCurrency(product.price)}
          </span>
          {product.discountPrice && (
            <span className="line-through ml-2 mt-0.5 font-bold text-sm text-[#99a3ae]">
              {addCurrency(product.price)}
            </span>
          )}

          {details.discountPercent && (
            <span className="text-pink-600 mt-0.5 font-semibold text-sm ml-2">
              -{details.discountPercent}%
            </span>
          )}
        </div>
        <div className="text-[#070707] text-base font-normal tracking-normal leading-6 line-clamp-2">
          <Link href={PagesConfig.PRODUCT_DETAILS(product.slug)}>
            {product.name}
          </Link>
        </div>
        <div className="flex items-center gap-3 mt-0.5">
          <div className="flex items-center gap-1">
            <Star size={15} className="fill-amber-400 stroke-amber-400" />
            <span className="font-semibold text-sm">{details.reviewAverage}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={13} className="fill-[#001A3466] stroke-none" />
            <span className="font-bold text-xs text-[#001A3399]">
              {`${details.formattedReviews} ${declensionReview(details.totalReviewsCount, ['отзыв', 'отзыва', 'отзывов'])}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
