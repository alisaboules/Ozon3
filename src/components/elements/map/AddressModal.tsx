'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { YandexMap } from '../map/YMap';
import { CenterPin } from './CenterPin';

type Props = {
  open: boolean;
  onClose: () => void;
};

export function AddressModal({ open, onClose }: Props) {
  const [coords, setCoords] = useState<[number, number]>([
    37.6176,
    55.7558,
  ]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="flex h-175 w-300 overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex w-90 flex-col border-r border-gray-200">

          <div className="flex items-center justify-between border-b border-gray-200 p-6">
            <h2 className="text-xl font-semibold">
              Укажите адрес
            </h2>

            <button onClick={onClose}>
              <X size={22} />
            </button>
          </div>

          <div className="p-6">
            <input
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Введите адрес"
            />
          </div>

          <div className="flex-1 overflow-auto px-6">
            <p className="text-sm text-gray-500">
              Нажмите на карту, чтобы выбрать адрес.
            </p>
          </div>

          <div className="border-t border-gray-200 p-6">
            <button className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white text-lg hover:bg-blue-700">
              Выбрать
            </button>
          </div>
        </div>
        <div className="flex-1 p-6">
          <YandexMap
            coords={coords}
            onChange={setCoords}
          />
          {/* <CenterPin /> */}
        </div>
      </div>
    </div>
  );
}