

export default function Footer(
    {
        dictionary
    }: 
    {
        dictionary: {
            button: string;
            large: {
                about: string[];
                help: string[];
                side: string[];
            };
            small: string[];
        }}) {
    return (
        <footer className="bg-[#333b2a]">
            <div className="md:max-w-[998px] md:mx-auto">
            <div className="h-32 px-10 py-4 hidden md:block">

                    <div className="text-white flex justify-between items-center h-4/5">
                        <div className="space-y-1">
                            {
                                dictionary.large.about.map((ab, index) => {
                                    return (
                                        <p key={index} className="underline text-xs cursor-pointer">
                                            {ab}
                                        </p>
                                    )
                                })
                            }
                        </div>

                        <div className="flex flex-col justify-between items-center h-full">
                            <button className="border h-7 w-32 text-xs underline hover:bg-white hover:text-[#333b2a] cursor-pointer">
                                {dictionary.button}
                            </button>
                            <div className="flex space-x-2">
                                {
                                    dictionary.large.help.map((ab, index) => {
                                        return (
                                            <p key={index} className="underline text-xs cursor-pointer">
                                                {ab}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                        <div className="space-y-1">
                            {
                                dictionary.large.side.map((ab, index) => {
                                    return (
                                        <p key={index} className="underline text-xs cursor-pointer">
                                            {ab}
                                        </p>
                                    )
                                })
                            }
                        </div>
                        

                    </div>

                    </div>


                    <div className="md:hidden h-80 mx-7">
                    <div className="space-y-2 pt-2 pb-5 text-white text-base font-semibold text-start">
                    <button className="border w-full text-start p-1 hover:bg-white hover:text-[#333b2a]">
                    {dictionary.button}
                    </button>
                    {
                        dictionary.small.map((ab, index) => {
                            return (
                                <p key={index} className="cursor-pointer">
                                    {ab}
                                </p>
                            )
                        })
                    }
                    </div>
                    </div>            
            </div>
           

        </footer>
    )
}