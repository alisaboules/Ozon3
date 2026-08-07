import { ProductItem } from '@/components/elements/product-item/ProductItem';
import { Slider } from '@/components/screens/slider/Slider';
import { getAllProducts } from '@/lib/actions/product';

export default async function Home() {
  const Products = await getAllProducts();
  return (
    <>
      <Slider />
      {/* <div className="grid grid-cols-5 gap-5 mt-3 mb-20">
        {Products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div> */}
    </>
  );
}
