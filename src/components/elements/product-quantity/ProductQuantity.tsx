import { FaPlus, FaMinus } from 'react-icons/fa6';
interface Props {
  isPendingQuantity: boolean;
  quantity: number;
  decrease: () => void;
  increase: () => void;
}

export function ProductsQuantity({decrease, increase, isPendingQuantity, quantity }: Props) {
  return (
    <div className="flex items-center justify-between h-14 shrink-0 gap-2 rounded-2xl bg-[#f4f7fc]">
      <button
        onClick={decrease}
        disabled={isPendingQuantity}
        className="rounded-2xl p-4 text-primary hover:bg-primary/10">
        <FaMinus size={23} />
      </button>
      <span className="text-xl font-semibold">{quantity}</span>
      <button
        onClick={increase}
        disabled={isPendingQuantity}
        className="rounded-2xl p-4 text-primary hover:bg-primary/10">
        <FaPlus size={23} />
      </button>
    </div>
  );
}
