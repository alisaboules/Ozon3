'use client';
import Link from 'next/link';
import { topMenu } from './top-menu.data';
import cn from 'clsx';
import { Dot } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { AddressModal } from '@/components/elements/map/AddressModal';

const DynamicLanguageSwitcher = dynamic(
  () => import('./language-switcher/LanguageSwitcher').then((mod) => mod.LanguageSwitcher),
  { ssr: false },
);

export function TopMenu() {
  const [city, setCity] = useState('Определяем...');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const savedCity = localStorage.getItem('city');
    if (savedCity) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCity(savedCity);
      return;
    }
    async function loadCity() {
      try {
        const res = await fetch('/api/location');
        const data = await res.json();

        if (data.city) {
          setCity(data.city);
          localStorage.setItem('city', data.city);
        }
      } catch {
        setCity('Москва');
      }
    }
    loadCity();
  }, []);
  return (
    <div className="flex justify-between items-center text-sm bg-background pt-3 pb-4 px-3 ">
      <nav className="flex gap-4 items-center">
        {topMenu.map((menuItem) => (
          <Link
            key={menuItem.title}
            href={menuItem.href}
            className={cn(
              'flex gap-1 items-center transition-opacity hover:opacity-100 opacity-50 font-medium',
              topMenu.indexOf(menuItem) === 0 && 'opacity-100 text-teal-600',
            )}>
            {menuItem.icon && <menuItem.icon size={16} style={{ marginRight: 4 }} />}
            <span>{menuItem.title}</span>
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <div className="font-medium flex items-center text-sm">
          <span className="opacity-50">{city}</span> <Dot className="opacity-50" />
          <button onClick={() => setOpen(true)} className="text-primary font-semibold">
            Укажите адрес
          </button>
        </div>
        <div>
          <DynamicLanguageSwitcher />
        </div>
      </div>
      <AddressModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
