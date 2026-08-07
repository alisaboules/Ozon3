'use client';
import { favouritesProductIdAtom } from '@/store';
import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { SkeletonLoader } from '@/components/ui/SkeletonLoader';
import { ProductItem } from '@/components/elements/product-item/ProductItem';
import { getProductByIds } from '@/lib/actions/product';

export default function Favourites() {
  const favouritesProductId = useAtomValue(favouritesProductIdAtom);
  const { data, isPending } = useQuery({
    queryKey: ['favourites', favouritesProductId],
    queryFn: () => getProductByIds(favouritesProductId),
    enabled: !!favouritesProductId.length,
  });

  return (
    <div className="mt-10 mb-20">
      <h1 className="font-bold text-4xl">Избранное</h1>
      <div className="mt-5">
        {favouritesProductId.length ? (
          <div className='grid grid-cols-5 gap-5 mt-10'>
          {isPending ? (
            <SkeletonLoader className='h-125.75' count={favouritesProductId.length}/>
          ) : (data?.length && (
            data.map((product) => <ProductItem key={product.id} product={product} />)
          ))
          }</div>): (
            <div>No favourite products found.</div>
          )}
      </div>
    </div>
  );
}
