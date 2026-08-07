import { compareProductIdAtom } from '@/store';
import { useAtom } from 'jotai';

export function useCompare() {
  const [compareProductIds, setCompareProductIds] = useAtom(compareProductIdAtom);

  const isCompared = (id: string) => compareProductIds.includes(id);

  const toggleCompare = (id: string) => {
    setCompareProductIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  return {
    compareProductIds,
    isCompared,
    toggleCompare,
  };
}