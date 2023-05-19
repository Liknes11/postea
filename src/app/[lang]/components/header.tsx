'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Header(
    {
        dictionary
    }: 
    {
        dictionary:  {
            signup: string;
            language: {
                encode: string;
                lang: string;
            }[];
        }}) {

        const pathName = usePathname()

        const redirectedPathName = (locale: string) => {
          if (!pathName) return '/'
          const segments = pathName.split('/')
          segments[1] = locale
          return segments.join('/')
        }
    return (
        <header className="">
            <div className="bg-[#a9d158] w-full h-10 md:h-20">
                <div className="max-w-[998px] flex justify-between items-center mx-auto h-full">
                    <div className="ml-4">
                        <img src="https://posteo.de/images/posteo-logo.svg"
                        className="h-10 md:h-14 w-44 md:w-52"
                        alt="logo" />
                    </div>

                    <div className="space-x-3 mr-4 hidden md:flex">
                            <button className="border-white border h-7 w-24 text-white text-center text-sm font-semibold hover:bg-white hover:text-[#a9d158]">
                                {dictionary.signup}
                            </button>
                        
                        {dictionary.language.map(lang => {
                            return (
                                <Link key={lang.encode} href={redirectedPathName(lang.encode)}>
                                    <button  className="border-white border h-7 w-[5.5rem] text-white text-sm font-semibold flex justify-evenly items-center hover:bg-white hover:text-[#a9d158]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
                                        </svg>

                                        {lang.lang}
                                    </button> 
                                </Link>
                            )
                        })}

                    </div>
                </div>
                
            </div>
            <div className="bg-[#f5f7f1] flex justify-around items-center md:hidden h-10">
                <div>

                </div>

                {dictionary.language.map(lang => {
                        return (
                            <Link 
                                key={lang.encode} 
                                href={redirectedPathName(lang.encode)}
                                className="flex text-sm font-semibold text-[#333b2a]">
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333b2a" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
                                    </svg>

                                    {lang.lang}
                               
                            </Link>
                        )
                    })}

            </div>
            
            

        </header>
    )
}