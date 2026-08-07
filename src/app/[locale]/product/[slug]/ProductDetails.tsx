'use client';
import { useProductDetails } from '@/components/elements/product-item/useProductItem';
import { TCategory, TProductAttribute, TProductWithReviews } from '@/lib/db/types';
import { declensionReview } from '@/utils/declension-review';
import { MessageCircle, Star } from 'lucide-react';
import Galoshka from '@/assets/галочка.svg';
import { BreadCrumbs } from './BreadCrumbs';
import { ProductDetailsGallery } from './ProductDetailsGallery';
import { ProductPurchaseSection } from './ProductPurchaseSection';
import { useRef } from 'react';

interface Props {
  product: TProductWithReviews;
  specifications: TProductAttribute[];
  categories: TCategory[];
  quantityCart: number;
}

export function ProductDetails({ product, specifications, categories, quantityCart }: Props) {
  const details = useProductDetails(product);
  const descriptionRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <BreadCrumbs product={product} categories={categories} />
      <div className="bg-white mb-20 rounded-3xl p-1 pb-5 mt-2">
        <div className=" grid grid-cols-[2fr_1.5fr_1.5fr] gap-5">
          <div className="flex items-start gap-2">
            <ProductDetailsGallery product={product} />
          </div>
          <div className="mt-2 flex flex-col gap-3">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-3 mt-0.5">
              <div className="flex items-center gap-1">
                <Star size={15} className="fill-amber-400 stroke-amber-400" />
                <span className="font-semibold">{details.reviewAverage}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle size={13} className="fill-[#001A3466] stroke-none" />
                <span className="font-bold text-[#001A3399]">
                  {`${details.formattedReviews} ${declensionReview(details.totalReviewsCount, ['отзыв', 'отзыва', 'отзывов'])}`}
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-xl">О товаре</span>
              <button className="hover:bg-[#003078]/10 bg-[#003078]/4 pl-2 flex items-center justify-center gap-2 rounded-xl">
                <span
                  onClick={() =>
                    descriptionRef.current?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                  }
                  className="font-semibold text-sm">
                  Перейти к описанию
                </span>
                <Galoshka className="mt-0.5 flex items-center justify-center" />
              </button>
            </div>
            <div className="divide-y divide-gray-200">
              {specifications.map((spec) => (
                <div key={spec.id} className="grid grid-cols-[1fr_1fr] items-center py-4">
                  <span className="text-[#001a33]/60 font-normal text-sm">{spec.title}</span>
                  <div className="flex items-center justify-between">
                    <span className="font-normal text-sm text-[#070707]">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ProductPurchaseSection product={product} quantityCart={quantityCart}/>
          <div ref={descriptionRef} className="scroll-mt-22 col-span-2 flex flex-col gap-3 p-3">
            <span className="#070707] font-bold text-2xl">Описание</span>
            <span className="font-normal whitespace-pre-wrap text-[#001a34] text-sm">
              {product.description}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
