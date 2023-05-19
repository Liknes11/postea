import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {i18n} from '../i18n-config' 


 
// Get the preferred locale, similar to above or using a library
 
export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  
 
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${i18n.defaultLocale}/${pathname}`, request.url)
    )
  }
}
 
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}