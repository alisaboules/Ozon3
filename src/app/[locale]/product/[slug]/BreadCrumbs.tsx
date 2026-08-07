'use client';
import { TCategory, TProductWithReviews } from '@/lib/db/types';
import { Dot } from 'lucide-react';
import { IoMdShareAlt } from 'react-icons/io';
import { IoCopy } from 'react-icons/io5';
import { HiDocumentChartBar } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import Copy from '@/assets/copy.svg';
import VK from '@/assets/vk.svg';
import TG from '@/assets/tg.svg';
import WS from '@/assets/ws.svg';
import OX from '@/assets/ox.svg';
import { CopyToast } from './CopyToast';
import { useCompare } from '@/components/elements/compare/useCompare';
import { cn } from '@/utils/cn';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

interface Props {
  product: TProductWithReviews;
  categories: TCategory[];
}

export function BreadCrumbs({ product, categories }: Props) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');
  const [showCopyToast, setShowCopyToast] = useState(false);
  const { toggleCompare, isCompared, compareProductIds } = useCompare();
  const handleMouseEnter = () => {
    if (!isPinned) {
      setIsShareOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      setIsShareOpen(false);
    }
  };

  const handleClick = () => {
    setIsPinned((prev) => !prev);
    setIsShareOpen(true);
  };
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.share-menu')) {
        setIsShareOpen(false);
        setIsPinned(false);
      }
    };

    document.addEventListener('click', close);

    return () => {
      document.removeEventListener('click', close);
    };
  }, []);

  const showToast = (message: string) => {
    setCopyMessage(message);
    setShowCopyToast(true);

    setTimeout(() => {
      setShowCopyToast(false);
    }, 2000);
  };
  const locale = useLocale();
  const router = useRouter();
  const handleCompare = () => {
    if (isCompared(product.id)) {
      router.push(`/${locale}/compare`);
      return;
    }

    if (compareProductIds.length >= 5) {
    showToast('Можно сравнить не более 5 товаров');
    return;
    }
    
    toggleCompare(product.id);
    setCopyMessage('Товар добавлен в сравнение');
    setShowCopyToast(true);

    setTimeout(() => {
      setShowCopyToast(false);
    }, 2000);
  };
  const copyText = async (text: string, message: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(message);
    } catch (error) {
      console.error(error);
    }
  };
  const [url, setUrl] = useState('');
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUrl(window.location.href);
  }, []);
  const shareItems = [
    {
      icon: Copy,
      label: 'Скопировать ссылку',
      onClick: () => copyText(product.sku, 'Ссылка на товар скопирована'),
    },
    {
      icon: VK,
      label: 'ВКонтакте',
      onClick: () =>
        window.open(`https://vk.com/share.php?url=${encodeURIComponent(url)}`, '_blank'),
    },
    {
      icon: OX,
      label: 'Одноклассники',
      onClick: () =>
        window.open(`https://connect.ok.ru/offer?url=${encodeURIComponent(url)}`, '_blank'),
    },
    {
      icon: TG,
      label: 'Telegram',
      onClick: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, '_blank'),
    },
    {
      icon: WS,
      label: 'WhatsApp',
      onClick: () =>
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`, '_blank'),
    },
  ];
  return (
    <div className="flex justify-between mt-6 mx-3.5">
      <div className="flex items-center gap-0.5 text-sm text-[#001a33]/60 font-semibold ">
        {categories.map((category, index) => (
          <div key={category.id} className="flex items-center gap-0.5 ">
            <button className="hover:text-primary">{category.name}</button>

            {index < categories.length - 1 && <Dot className="text-[#001a33]/60" />}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => copyText(product.sku, 'Артикул скопирован')}
          className="flex items-center gap-2 group hover:text-primary text-sm font-semibold text-[#001a3399]/60 transition-colors">
          <IoCopy size={18} className="" />
          <span className='text-[#001a33]/60 group-hover:text-primary'>{`Артикул: ${product.sku}`}</span>
        </button>
        <button
          onClick={handleCompare}
          className={cn(
            'flex items-center gap-2 text-sm font-semibold transition-colors group',
            isCompared(product.id) ? 'text-green-500' : 'text-[#001a3399]/60 hover:text-primary',
          )}>
          <HiDocumentChartBar size={18} className=''/>
          <span className={isCompared(product.id) ? 'text-green-500' : 'text-[#001a33]/60 group-hover:text-primary'}>{isCompared(product.id) ? 'В сравнении' : 'В сравнение'}</span>
        </button>

        <div
          className="relative share-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <button
            onClick={handleClick}
            className="flex items-center gap-2 hover:text-primary text-sm font-semibold text-[#001a3399]/60 group transition-colors">
            <IoMdShareAlt size={18} className='stroke-10'/>
            <span className='text-[#001a33]/60 group-hover:text-primary'>Поделиться</span>
          </button>
          <div
            className={`
                absolute top-full right-0 mt-3 w-60 
                rounded-2xl bg-black text-white shadow-2xl z-9999
                transition-all duration-500 ease-out
                before:absolute before:-top-2 before:right-10
                before:h-4 before:w-4
                before:rotate-45 before:bg-black
                ${isShareOpen ? 'opacity-100 translate-y-0 scale-100' : 'pointer-events-none opacity-0 -translate-y-2 scale-95'}
              `}>
            <div className="">
              {shareItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="relative flex w-full items-center gap-3 px-3 py-3 hover:text-primary/90 transition-colors group">
                  <item.icon className="h-6 w-6 text-white/30 group-hover:text-primary transition-colors" />
                  <span className="text-sm">{item.label}</span>

                  {index !== shareItems.length - 1 && (
                    <div className="absolute left-11 right-5 bottom-0 h-px bg-white/50" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CopyToast show={showCopyToast} text={copyMessage} onClose={() => setShowCopyToast(false)} />
    </div>
  );
}
