import { useState, useTransition } from 'react';
import { updateCartItemQuantity } from '@/lib/actions/cart';

interface Props {
  productId: string;
  quantityCart: number;
  onRemove: () => void;
}

export function useChangeQuantity({
  productId,
  quantityCart,
  onRemove,
}: Props) {
  const [quantity, setQuantity] = useState(quantityCart);
  const [isPendingQuantity, startTransitionQuantity] = useTransition();
  const [isPending, startTransition] = useTransition();
  const increase = () => {
    const newQuantity = quantity + 1;

    setQuantity(newQuantity);

    startTransitionQuantity(async () => {
      await updateCartItemQuantity(productId, newQuantity);
    });
  };

  const decrease = () => {
    if (quantity === 1) {
      setQuantity(0);
      onRemove();

      startTransitionQuantity(async () => {
        await updateCartItemQuantity(productId, 0);
      });

      return;
    }

    const newQuantity = quantity - 1;

    setQuantity(newQuantity);

    startTransitionQuantity(async () => {
      await updateCartItemQuantity(productId, newQuantity);
    });
  };
  const removeProduct = () => {
    startTransition(async () => {
      await updateCartItemQuantity(productId, 0);
    });
  };
  return {
    quantity,
    setQuantity,
    increase,
    decrease,
    removeProduct,
    isPendingQuantity,
  };
}