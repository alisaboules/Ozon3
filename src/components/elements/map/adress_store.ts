import { create } from 'zustand';

export type Address = {
  city: string;
  address: string;
  lat: number;
  lon: number;
};

type AddressStore = {
  address: Address | null;
  setAddress: (address: Address) => void;
  loadAddress: () => void;
};

export const useAddressStore = create<AddressStore>((set) => ({
  address: null,

  setAddress: (address) => {
    set({ address });

    localStorage.setItem(
      'address',
      JSON.stringify(address)
    );
  },

  loadAddress: () => {
    const saved = localStorage.getItem('address');

    if (saved) {
      set({
        address: JSON.parse(saved),
      });
    }
  },
}));