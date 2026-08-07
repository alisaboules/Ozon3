'use client';
import Image from 'next/image';
import { Search, User } from 'lucide-react';
import { Squares2X2Icon } from '@heroicons/react/24/solid';
import { headerMenu } from './header-menu.data';
import cn from 'clsx';
import { useTranslations } from 'next-intl';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { Auth } from './Auth';
import { useSession } from '@/lib/auth-client';
import { ProfileMenu } from './Profile';
import { useEffect, useState } from 'react';
import { Link } from '@/i18n/navigation';
import { PagesConfig } from '@/config/pages.config';
import { TProduct } from '@/lib/db/types';
import { searchProducts } from '@/lib/actions/search';
import { getRootCategories } from '@/lib/actions/category';
import { useAtomValue } from 'jotai';
import { favouritesProductIdAtom } from '@/store';

export function Header({cartCount}: {cartCount?: number}) {
  const favoritesProductIds = useAtomValue(favouritesProductIdAtom);
  const isShowFavoritesBadge = favoritesProductIds.length > 0;
  const isShowCartBadge = cartCount != undefined && cartCount > 0;
  const t = useTranslations('header');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const { data } = useSession();
  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      setLoading(true);
      const data = await searchProducts(query);
      setResults(data);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [query]);
  const { isOpen, ref, setIsOpen } = useOutsideClick<HTMLDivElement>(false);
  const {
    isOpen: isProfileMenuOpen,
    ref: profileMenuRef,
    setIsOpen: setProfileMenuopen,
  } = useOutsideClick<HTMLDivElement>(false);

  useEffect(() => {
    if (data?.user) setIsOpen(false);
  }, [data, setIsOpen]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const {
    isOpen: isSearchOpen,
    ref: searchRef,
    setIsOpen: setIsSearchOpen,
  } = useOutsideClick<HTMLDivElement>(false);
  const [categories, setCategories] = useState<Awaited<ReturnType<typeof getRootCategories>>>([]);
  useEffect(() => {
    async function loadCategories() {
      const data = await getRootCategories();
      setCategories(data);
    }

    loadCategories();
  }, []);
  return (
    <>
      <header
        className={cn(
          'grid grid-cols-[1fr_1fr_6fr_2fr] gap-4 sticky top-0 z-50 py-3 pr-5 bg-background',
          isScrolled ? 'rounded-b-3xl shadow-sm' : 'rounded-b-none',
        )}>
        <Link href={PagesConfig.HOME}>
          <Image alt="Ozon" src="/ozon.svg" width={200} height={120} className="ml-3 p-2" />
        </Link>
        <Link href={PagesConfig.CATALOG}>
          <button className="bg-primary hover:bg-primary/90 p-2 rounded-md text-white flex items-center gap-2 w-30 ml-4 font-medium">
            <Squares2X2Icon width={20} height={20} color="white" />
            <span>{t('catalogTitle')}</span>
          </button>
        </Link>
        {isSearchOpen && <div className="fixed inset-0 bg-black/40 z-40" />}
        <div ref={searchRef} className="relative z-50 rounded-xl p-1 flex items-center bg-primary">
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={query}
            onFocus={() => setIsSearchOpen(true)}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-white rounded-lg px-4 py-1.5 w-full placeholder:text-gray-500"
          />

          {isSearchOpen && (
            <div className="absolute top-full left-0 right-0 h-105 mt-4 bg-white rounded-xl shadow-xl z-50 overflow-y-auto">
              {query.trim() === '' ? (
                <>
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setQuery(category.name)}
                        className="rounded-xl p-3 text-left hover:bg-gray-100 transition">
                        {category.name}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="max-h-87.5 overflow-y-auto">
                  {results.map((product) => (
                    <Link
                      onClick={() => {
                        setIsSearchOpen(false);
                        setQuery('');
                        setResults([]);
                      }}
                      key={product.id}
                      href={PagesConfig.PRODUCT_DETAILS(product.slug)}
                      className="block px-4 py-3 hover:bg-gray-100">
                      <div className="font-medium">{product.name}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
          <button className="px-6">
            <Search color="#fff" />
          </button>
        </div>
        <div className="flex gap-4 items-center justify-end">
          {data?.user ? (
            <div className="relative" ref={profileMenuRef}>
              <button
                className={cn('flex items-center flex-col')}
                onClick={() => setProfileMenuopen(!isProfileMenuOpen)}>
                <User size={20} />
                <span className="text-[11px] font-medium">{data.user.name || data.user.email}</span>
              </button>
              {isProfileMenuOpen && <ProfileMenu setIsProfileMenuOpen={setProfileMenuopen} />}
            </div>
          ) : (
            <button className={cn('flex items-center flex-col')} onClick={() => setIsOpen(true)}>
              <User size={20} />
              <span className="text-[11px] font-medium">{t('log_in')}</span>
            </button>
          )}
          {headerMenu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                'group flex items-center flex-col relative',
              )}>
                
              <div className='relative'>
                <item.icon size={20} className='transition-opacity group-hover:opacity-100 opacity-50'/>
                {((item.href==PagesConfig.CART && isShowCartBadge) || (item.href==PagesConfig.FAVOURITES && isShowFavoritesBadge)) && (
                <div className='size-3.5 p-1 bg-secondary absolute -top-2 left-3 w-auto rounded-full text-[0.7rem] flex items-center justify-center text-white font-semibold text-left'>
                  {item.href == PagesConfig.CART ? cartCount : favoritesProductIds.length}
                </div>)}
              </div>
              <span className="text-sm font-semibold transition-opacity group-hover:opacity-100 opacity-50">{item.title}</span>
            </Link>
          ))}
        </div>
      </header>
      {isOpen && <Auth ref={ref} setIsOpen={setIsOpen} />}
    </>
  );
}
