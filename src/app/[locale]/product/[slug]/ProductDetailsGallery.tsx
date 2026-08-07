'use client';
import { TProductWithReviews } from '@/lib/db/types';
import Image from 'next/image';
import WowPriceIcon from '@/assets/вауцены.svg';
import Rasprodazha from '@/assets/распродажа.svg';
import { useState } from 'react';
import { useProductDetails } from '@/components/elements/product-item/useProductItem';

interface Props {
  product: TProductWithReviews;
}

export function ProductDetailsGallery({ product }: Props) {
  const details = useProductDetails(product);
  const [activeImage, setActiveImage] = useState(product.images[0].imageUrl);
  return (
    <>
      <div className="flex flex-col gap-3 ml-2 mt-3">
        {product.images.map((image) => (
          <button
            onClick={() => setActiveImage(image.imageUrl)}
            key={image.id}
            className={`
      border-3 rounded-sm transition-colors
      ${
        activeImage === image.imageUrl
          ? 'border-primary'
          : 'border-zinc-300 hover:border-primary/50'
      }
    `}>
            <Image
              src={image.imageUrl}
              alt={product.name}
              width={70}
              height={70}
              className="object-cover"
            />
          </button>))}
      </div>
      <div className="relative w-112.5 aspect-3/4 bg-white rounded-2xl mt-1">
        <Image
          src={activeImage}
          alt={product.name}
          fill
          className="object-contain rounded-2xl"
        />
        {details.discountPercent ? (
          <div className="rounded-lg bg-pink-600 absolute top-2 right-2 px-2 py-0.5 flex items-center gap-1.5 text-white text-sm font-semibold">
            <Rasprodazha className="w-4 h-4 text-white" />
            <span>Распродажа</span>
          </div>
        ) : (
          <div className="rounded-lg bg-black absolute top-2 right-2 px-2 py-0.5 flex items-center gap-1.5 text-white text-sm font-semibold">
            <WowPriceIcon className="w-4 h-4 text-pink-600" />
            <span>Вау-цены</span>
          </div>
        )}
      </div>
    </>
  );
}
