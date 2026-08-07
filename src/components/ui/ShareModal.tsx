'use client';
import { X } from 'lucide-react';
import { TCartItem } from '@/lib/db/types';
import { ShareItem } from '@/app/[locale]/cart/ShareItem';
import { addCurrency } from '@/utils/add-currency';
import { declensionReview } from '@/utils/declension-review';

interface Props {
  open: boolean;
  onClose: () => void;
  items: TCartItem[];
  onCopied: (message: string) => void;
}

export function ShareModal({ open, onClose, items, onCopied }: Props) {
  if (!open) return null;
  const handleShare = async () => {
    const slugs = items.map(item => item.product.slug).join(',');
    const link = `${window.location.origin}/share?items=${encodeURIComponent(slugs)}`;
    await navigator.clipboard.writeText(link);
    onCopied('Ссылка скопирована');
    onClose();
};
  const totalWithBanks = items.reduce((sum, item) => {
    return sum + (item.product.discountPrice ?? item.product.price) * item.quantity;
  }, 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalWithoutBanks = items.reduce((sum, item) => {
    const price = item.product.discountPrice
      ? Math.ceil((item.product.discountPrice * 10) / 9)
      : Math.ceil((item.product.price * 10) / 9);

    return sum + price * item.quantity;
  }, 0);
  return (
    <div className="fixed inset-0 z-9999 bg-black/40 flex items-center justify-center">
      <div className="bg-white relative rounded-3xl w-200 p-8 max-h-[80vh] flex flex-col">
        <div className="flex justify-between shrink-0">
          <div>
            <h2 className="text-4xl font-bold">Поделиться списком</h2>
            <p className="mt-2 text-[#001a33]/60">Товары из вашей корзины</p>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-3xl p-1 bg-gray-200 hover:bg-gray-300">
            <X size={20} className="text-[#001a33]/40 stroke-3" />
          </button>
        </div>
        <div className="mt-8 flex-1 overflow-y-auto share-scroll">
          {items.map((item, index) => (
            <div key={item.product.id}>
              <ShareItem item={item} />

              {index < items.length - 1 && <div className="h-px bg-gray-200 my-6" />}
            </div>
          ))}
        </div>
        <div className='flex mt-8 shrink-0 justify-start items-center gap-2'>
          <button
            onClick={handleShare}
            className="flex flex-col w-60 items-center justify-center rounded-2xl bg-primary hover:bg-primary/90 text-white p-2">
            <span className="font-semibold text-base">Поделиться</span>
            <span className="font-normal text-sm">{`${totalCount} ${declensionReview(totalCount, ['товар', 'товара', 'товаров'])}`}</span>
          </button>
          <div className='flex flex-col'>
            <span className="text-green-500 font-bold text-lg">{addCurrency(totalWithBanks)}</span>
            <span className="font-semibold text-xs text-[#001a33]/60">
              {addCurrency(totalWithoutBanks)}
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
