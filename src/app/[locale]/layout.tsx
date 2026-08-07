import { routing } from "@/i18n/routing"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { Header } from '../../components/layout/header/Header';
import { TopMenu } from '@/components/layout/top-menu/TopMenu';
import Image from 'next/image';
import Script from "next/script";
import { getCart } from "@/lib/actions/cart";

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({ children, params }: Props ) {
  const { locale } = await params 
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale);
  const cart = await getCart();
  return (
    <>
      <Script
  id="yandex-maps"
  src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}&lang=ru_RU`}
  strategy="afterInteractive"
/>
      <NextIntlClientProvider>
        <div className="w-full max-w-[1768px] mx-auto px-16">
          <Header cartCount={cart.count}/>
          <TopMenu />
          <Image
            src="/banner1.png"
            alt="Banner1"
            width={1768}
            height={97}
            className="mb-3"
            draggable={false}
          />
          <div>{children}</div>
        </div>       
      </NextIntlClientProvider>
    </>);
}
