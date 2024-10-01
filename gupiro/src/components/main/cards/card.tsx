import { CalendarDays, Clock, Heart, MapPin, Scissors, Star } from "lucide-react";
import React from "react";
import Image from 'next/image';

export async function Card0() {
    return(
        <>
            {/* Card */}
            <div className="relative w-[350px] h-[300px] border rounded-[16px] text-nowrap">
                    
                <Image 
                    className="absolute z-[-1] h-[180px] rounded-[16px]" 
                    width="350" 
                    height="180" 
                    alt="" 
                    src={"https://burlingtondowntown.ca/wp-content/uploads/2021/10/barbershops-downtown-burlington-thegem-blog-default.jpg"} 
                />
             
                <div className="p-4 flex flex-col justify-between h-full">
                    
                    {/* Head */}
                    <div className="flex justify-between">
                        <div className="flex justify-center items-center gap-2 bg-stone-900 rounded-[16px] px-3 bg-opacity-90">
                            <MapPin size={18} />
                            <p className="text-sm">Caimito St, Naga</p>
                        </div>

                        <div className="flex items-center justify-center bg-stone-900 rounded-full w-[30px] h-[30px] bg-opacity-90">
                            <Heart size={18}/>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <h3>Lukkas Barbers</h3>
                                <Scissors size={18} className="text-blue-500"/>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Star size={18} className="text-yellow-500"/>
                                <span className="text-sm">4.7</span>
                            </div>
                        </div>

                        <span className="text-green-500">OPEN</span>

                        <div className="flex gap-1">
                            <div className="flex items-center justify-center gap-2 bg-stone-900 rounded-[16px] px-4 py-1">
                                <CalendarDays size={15}/>
                                <p className="text-sm">MON - FRI</p>
                            </div>

                            <div className="flex items-center justify-center gap-2 bg-stone-900 rounded-[16px] px-4 py-1">
                                <Clock size={15}/>
                                <p className="text-sm">8:00AM - 9:00PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
            