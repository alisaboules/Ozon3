import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartSelectionStore = {
  initialized: boolean;
  selectedItems: string[];

  initialize: (ids: string[]) => void;
  syncItems: (ids: string[]) => void;

  toggleItem: (id: string) => void;
  toggleAll: (ids: string[]) => void;
  addItem: (id: string) => void;
};

export const useCartSelectionStore = create<CartSelectionStore>()(
  persist(
    (set, get) => ({
      initialized: false,
      selectedItems: [],

      initialize: (ids) => {
        if (get().initialized) return;

        set({
          initialized: true,
          selectedItems: ids,
        });
      },

      syncItems: (ids) => {
        const filtered = get().selectedItems.filter(id =>
          ids.includes(id),
        );

        set({
          selectedItems: filtered,
        });
      },

      toggleItem: (id) => {
        const selected = get().selectedItems;

        set({
          selectedItems: selected.includes(id)
            ? selected.filter(x => x !== id)
            : [...selected, id],
        });
      },

      toggleAll: (ids) => {
        const selected = get().selectedItems;

        set({
          selectedItems:
            selected.length === ids.length ? [] : ids,
        });
      },
      addItem: (id: string) =>
    set((state) => ({
      selectedItems: state.selectedItems.includes(id)
        ? state.selectedItems
        : [...state.selectedItems, id],
    })),
    }),
    {
      name: 'selected-cart-items',
    },
  ),
);