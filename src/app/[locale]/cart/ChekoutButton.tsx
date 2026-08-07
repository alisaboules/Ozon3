'use client';
import { PagesConfig } from '@/config/pages.config';
import { createOrder } from '@/lib/actions/order';
import { TCartItem } from '@/lib/db/types';
import { cn } from '@/utils/cn';
import { useRouter } from 'next/navigation';
interface Props {
  items: TCartItem[];
  selectedItems: string[];
}

export function CheckoutButton({items, selectedItems}: Props) {
  const hasSelectedItems = items.length > 0;
  const router = useRouter();
  const handleCheckout = async () => {
  const result = await createOrder(selectedItems);

  if (result?.success) {
    router.push(PagesConfig.ORDERS);
  }
  
};
  return (
    <button
    onClick={handleCheckout}
      className={cn(
        'font-semibold text-base rounded-2xl w-full px-6 py-4',
        hasSelectedItems
          ? 'bg-primary hover:bg-primary/90 text-[#f5f7fa]'
          : 'bg-[#003078]/4 text-[#070707]/40',
      )}>
      <span>Перейти к оформлению</span>
    </button>
  );
}
