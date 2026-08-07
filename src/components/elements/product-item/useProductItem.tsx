import { TProductWithReviews } from '@/lib/db/types';
import { useMemo } from 'react';
export function useProductDetails(product: TProductWithReviews) {
  const discountPercent = useMemo(() => {
      if (!product.discountPrice) return null;
      return Math.round(((product.price - product.discountPrice) / product.price) * 100);
    }, [product.price, product.discountPrice]);
  const reviewCount = product.reviews.length;
  const reviewAverage = useMemo(() => {
    if (reviewCount == 0) return 0;
    const total = product.reviews.reduce((acc, review) => acc + review.rating, 0);
    return (total / reviewCount).toFixed(1);
  }, [product.reviews, reviewCount]);
  const [formattedReviews, totalReviewsCount] = useMemo(() => {
    const seed = Number(product.id);
    const random = Math.abs(Math.sin(seed * 9283.73) * 1000000) % 1;
    const result = Math.floor(1000 + random * 49000) + reviewCount;
    return [new Intl.NumberFormat('ru-RU').format(result).replace(/\s/g, ','), result];
  }, [product.id, reviewCount]);
  const withOutCardPrice = product.discountPrice ? Math.ceil((product.discountPrice * 10) / 9) : Math.ceil((product.price * 10) / 9)
  const dataDelivery = useMemo(() => {
    const date = new Date();
    let charSum = 0;
    for (let i = 0; i < product.id.length; i++) {
      charSum += product.id.charCodeAt(i);
    }
    const pseudoRandomDays = (charSum % 14) + 1;
    date.setDate(date.getDate() + pseudoRandomDays);
    return new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long' }).format(date)
  }, [product.id])
  return {
      discountPercent,
      reviewAverage,
      formattedReviews, 
      totalReviewsCount,
      withOutCardPrice,
      dataDelivery
    }
}