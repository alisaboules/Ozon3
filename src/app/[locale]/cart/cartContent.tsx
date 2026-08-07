'use client';

import { useEffect, useState } from 'react';
import { TCartItem } from '@/lib/db/types';
import { CartItem } from './Cart';
import { SelectAll } from './Checkbox';
import { Trash2 } from 'lucide-react';
import { IoMdShareAlt } from 'react-icons/io';
import { Pay } from './Pay';
import { useCartSelectionStore } from '@/components/elements/product-quantity/cart-selection';
import { ConfirmModal } from '@/components/ui/ConfirmModal';
import { updateCartItemQuantity } from '@/lib/actions/cart';
import { ShareModal } from '@/components/ui/ShareModal';
import { CopyToast } from '../product/[slug]/CopyToast';

interface Props {
  items: TCartItem[];
}

export function CartContent({ items }: Props) {
  const { selectedItems, initialize, syncItems, toggleItem, toggleAll } = useCartSelectionStore();
  useEffect(() => {
    const ids = items.map((item) => item.product.id);
    initialize(ids);
    syncItems(ids);
  }, [items, initialize, syncItems]);
  const selectedCartItems = items.filter((item) => selectedItems.includes(item.product.id));
  const allSelected = items.length > 0 && selectedItems.length === items.length;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const hasSelectedItems = selectedItems.length > 0;
  const handleDeleteSelected = async () => {
    for (const id of selectedItems) {
      await updateCartItemQuantity(id, 0);
    }
    setShowDeleteModal(false);
  };
  const [showShareModal, setShowShareModal] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');
  const handleCopied = (message: string) => {
    setCopyMessage(message);
    setShowCopyToast(true);

    setTimeout(() => {
      setShowCopyToast(false);
    }, 2000);
  };
  return (
    <>
      <div className="grid grid-cols-[2fr_1fr] gap-5">
        <div>
          <div className="flex bg-background items-center justify-between p-4 rounded-3xl">
            <SelectAll
              checked={allSelected}
              onChange={() => toggleAll(items.map((item) => item.product.id))}
            />
            {hasSelectedItems && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowShareModal(true)}
                  className="bg-[#0030780a] hover:bg-[#003078]/10 px-3 py-2 rounded-[10px] gap-1 flex items-center text-[#001a3399]">
                  <IoMdShareAlt size={20} className="stroke-10 text-[#001a3399]/60" />
                  <span className="font-semibold text-sm">Поделиться</span>
                </button>

                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="bg-[#0030780a] hover:bg-[#003078]/10 px-3 py-2 rounded-[10px] gap-1 flex items-center text-[#001a3399]">
                  <Trash2 size={20} className="stroke-2 text-[#001a3399]/60" />
                </button>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-5 p-3 bg-background rounded-3xl">
            {items.map((item) => (
              <CartItem
                key={item.product.id}
                cartItem={item}
                quantityCart={item.quantity}
                checked={selectedItems.includes(item.product.id)}
                onToggle={() => toggleItem(item.product.id)}
              />
            ))}
          </div>
        </div>
        <div className="sticky top-20 self-start">
          <Pay items={selectedCartItems} selectedItems={selectedItems}/>
        </div>
      </div>
      <ConfirmModal
        open={showDeleteModal}
        title="Удалить товары"
        description="Вы точно хотите удалить выбранный товар? Отменить данное действие будет невозможно."
        confirmText="Удалить"
        cancelText="Отмена"
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteSelected}
      />
      <ShareModal
        open={showShareModal}
        onClose={() => setShowShareModal(false)}
        items={selectedCartItems}
        onCopied={handleCopied}
      />
      <CopyToast show={showCopyToast} text={copyMessage} onClose={() => setShowCopyToast(false)} />
    </>
  );
}
