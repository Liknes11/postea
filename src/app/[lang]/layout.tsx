import './globals.css'
import {i18n} from '../../../i18n-config'
import { Locale } from '../../../i18n-config'


export const metadata = {
  title: 'Posteo',
  description: 'Email green. secure and ad-free',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export interface ILang {
  lang: Locale
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: ILang
}) {



  return (
    <html lang={params.lang}>
      <body className="">
           {children}
      </body>
    </html>
  )
}
