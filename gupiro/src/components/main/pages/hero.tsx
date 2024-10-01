import Image from 'next/image';
import bkgImage from '@/assets/bkg.png'

import { Button } from '../ui/button';
import { FaAppStoreIos  } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export function Home() {
    return(
        <>
            <div className="mt-16 relative bg-background overflow-hidden">

                <Image 
                    src={bkgImage}
                    alt="bkg"
                    className="w-full"
                    placeholder='blur'
                />

                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-background z-0"></div>

                <div className="absolute top-0 right-0 left-0 bottom-0 z-10">
                    <div className="flex flex-col gap-3 h-full sm:w-[500px] sm:ml-[15%] sm:items-start sm:justify-center sm:text-start items-center justify-center text-center">
                        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                            Book the Best Barbers in <br/>Naga City with Gupiro
                        </h1>
                        <p>No waits. Just great cuts</p>
                        <Button>Start free now</Button>
                    </div>
                </div>

                <div className="absolute right-0 bottom-0 mr-20 mb-20 z-10 hidden lg:block">
                    <div className="flex flex-row gap-3"> 
                            <a href="" className="flex flex-row items-center gap-3 text-xs bg-background p-3 px-6 rounded-lg border">
                                <FaAppStoreIos className="text-[30px]" />
                                <div className="flex flex-col">
                                    DOWNLOAD ON THE <span className="text-base">App Store</span>
                                </div>
                            </a>
                      
                            <a href="" className="flex flex-row items-center gap-3 text-xs bg-background p-3 px-6 rounded-lg border">
                                <IoLogoGooglePlaystore className="text-[30px]" />
                                <div className="flex flex-col">
                                    GET IT ON <span className="text-base">Google Play</span>
                                </div>
                            </a>
                    </div>
                </div>

            </div>
        </>
    )
}
