import { FaCcApplePay, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from 'next/image';
import logoImage from "@/assets/logo.png";

export function Footer() {
 
    return(
        <>
            <div className="flex justify-center items-center pb-10">
                <div className="flex flex-col w-[1000px]">
                    <div className="flex justify-between gap-32 py-10">
                        <a href="/" className="flex items-center">
                            <Image 
                                src={logoImage}
                                alt="logo"
                                height={27}
                                width={27}
                            />
                        </a>
                        <ul className="flex flex-col gap-1 text-stone-600">
                            <span className="text-stone-50">Gupiro</span>
                            <li><a href="" className="hover:text-stone-400">Pricing</a></li>
                            <li><a href="" className="hover:text-stone-400">Updates</a></li>
                            <li><a href="" className="hover:text-stone-400">Gupiro for iOS</a></li>
                            <li><a href="" className="hover:text-stone-400">Gupiro for Android</a></li>
                        </ul>
                        <ul className="flex flex-col gap-1 text-stone-600">
                            <span className="text-stone-50">Resources</span>
                            <li><a href="" className="hover:text-stone-400">Docs</a></li>
                            <li><a href="" className="hover:text-stone-400">Blog</a></li>
                            <li><a href="" className="hover:text-stone-400">Videos</a></li>
                        </ul>
                        <ul className="flex flex-col gap-1 text-stone-600">
                            <span className="text-stone-50">About</span>
                            <li><a href="" className="hover:text-stone-400">Company</a></li>
                            <li><a href="" className="hover:text-stone-400">Jobs</a></li>
                            <li><a href="" className="hover:text-stone-400">Contact us</a></li>
                        </ul>

                        <div className="w-[100px] flex flex-row flex-wrap gap-3">
                            <FaCcPaypal className="text-[40px]"/>
                            <FaCcVisa className="text-[40px]"/>
                            <FaCcMastercard className="text-[40px]"/>
                            <FaCcStripe className="text-[40px]"/>
                            <FaCcApplePay className="text-[40px]"/>
                        </div>
                        
                    </div>
                    <hr />
                    <div className="flex justify-between items-center py-4">
                        <div className="text-xs">&copy; Gupiro 2024, All rights reserved.</div>
                        
                        <div className="flex flex-row gap-5 items-center">
                            <a href="https://www.facebook.com/gupiroph" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="text-[20px]"/></a>
                            <a href="https://instagram.com/gupiroph" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-[20px]"/></a>
                            <a href="https://x.com/gupiroph" target="_blank" rel="noopener noreferrer"><FaXTwitter className="text-[20px]"/></a>
                        </div>
                        
                        <ul className="flex gap-5 text-xs text-stone-600">
                            <li><a className="hover:underline" href="">Privacy</a></li>
                            <li><a className="hover:underline" href="">Terms of Service</a></li>
                            <li><a className="hover:underline" href="">Security</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
