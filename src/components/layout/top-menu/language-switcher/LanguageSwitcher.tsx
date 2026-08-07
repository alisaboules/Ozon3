'use client';
import { useMemo, useTransition } from 'react';
import { LANGUAGES } from './languages.data';
import 'flag-icons/css/flag-icons.min.css';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';

export function LanguageSwitcher() {  
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const params = useParams()

  const [isPending, startTransition] = useTransition()

  const toggleHandler = () => {
    const newLang = locale == 'ru' ? 'en' : 'ru'
    startTransition(() => {
      router.replace({ pathname, query: params }, { locale: newLang})
    })
  }
  
  const language = useMemo(() => {
    return LANGUAGES.find((lang) => lang.code == locale);
  }, [locale]);
  return (
    <button className='flex items-center gap-1.5 group w-12' onClick={toggleHandler}>
      <span className='text-lg group-hover:rotate-6 transition-transform'>
         {language && (
      <language.flag className="w-5 h-5" />
    )}
      </span>
      <span className='uppercase relative top-0.5 font-medium opacity-50 transition-opacity group-hover:opacity-100'>
        {language?.code}
      </span>
    </button>
  );
}
