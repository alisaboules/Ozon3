'use client';
import Trash from '@/assets/trash.svg';
import { compareProductIdAtom } from '@/store';
import { useAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { SkeletonLoader } from '@/components/ui/SkeletonLoader';
import { getProductByIds } from '@/lib/actions/product';
import { ProductItem } from '@/components/elements/product-item/ProductItem';

export default function Compare() {
  const [compareProductId, setCompareProductId] = useAtom(compareProductIdAtom);

  const { data, isPending, error } = useQuery({
    queryKey: ['compare', compareProductId],
    queryFn: () => getProductByIds(compareProductId),
    enabled: !!compareProductId.length,
  });
  console.log(data);
  console.log(error);
  if (!compareProductId.length) {
    return (
      <div className="mt-10">
        <h1 className="text-4xl font-bold">Сравнение товаров</h1>
        <div className="mt-10">Нет товаров для сравнения.</div>
      </div>
    );
  }

  if (isPending || !data) {
    return <SkeletonLoader className="h-80" count={compareProductId.length} />;
  }

  const clearCompare = () => {
    setCompareProductId([]);
  };
  return (
    <div className="mt-10 mb-20">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Сравнение товаров</h1>
        <button
          onClick={clearCompare}
          className="px-4 py-2 text-md font-semibold text-primary flex items-center gap-2">
          <Trash className="mb-1" />
          <span>Очистить все сравнение</span>
        </button>
      </div>
      <div
        className="mt-10 bg-background rounded-2xl
        grid grid-cols-5 gap-5 pb-5">
        {data!.map((product) => (
          <div key={product.id}>
            <ProductItem key={product.id} product={product} />
            <div className="bg-background">
              {product.attributes?.map((attribute) => (
                <div key={attribute.id} className="flex flex-col p-2">
                  <span className="text-[#001a33]/60 text-md">{attribute.title}</span>

                  <span className="text-sm">{attribute.value}</span>
                </div>
              ))}

                {product.brand ? (
                  <div className="flex flex-col p-2">
                    <span className="text-[#001a33]/60 text-md">Бренд</span>
                    <span className="text-sm">{product.brand}</span>
                  </div>
                ) : (
                  <div className="flex flex-col p-2">
                    <span className="text-[#001a33]/60 text-md">Бренд</span>
                    <span className="text-sm">Отсутствует</span>
                  </div>
                )}

                {product.shop ? (
                  <div className="flex flex-col p-2">
                    <span className="text-[#001a33]/60 text-md">Магазин</span>
                    <span className="text-sm">{product.shop}</span>
                  </div>
                ) : (
                   <div className="flex flex-col p-2">
                    <span className="text-[#001a33]/60 text-md">Магазин</span>
                    <span className="text-sm">Отсутствует</span>
                  </div>
                )}
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}
