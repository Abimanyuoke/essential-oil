import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="grid grid-cols-2 gap-10 items-center">
            <div className="relative w-full flex justify-center items-center">
                <Image
                    src="/images/aboutus.jpg"
                    alt="About Us"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                />
                <div className="absolute left-2 top-2 md:top-24 bg-white/90 border border-gray-200 rounded-xl flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 shadow-md text-xs md:text-sm w-36 md:w-60 transition-all animate-pulse" style={{ minWidth: '220px' }}>
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full mr-2">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e"></circle><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </span>
                    <span>We so opinion friends me message as delight.</span>
                </div>

                <div className="absolute right-2 top-16 md:top-28 md:right-32 transition-all animate-pulse">
                    <span className="inline-flex items-center justify-center w-10 h-10 md:w-15 md:h-15 bg-white rounded-full shadow-xl"><svg width="30" height="30" fill="none" viewBox="0 0 24 24"><path d="M12 21s-6.5-5.5-9-9.5C-1.5 6.5 4.5 2 8.5 6.5c2.5-3 7.5-3 10 0C19.5 2 25.5 6.5 21 11.5c-2.5 4-9 9.5-9 9.5z" fill="#ef4444"></path></svg></span>
                </div>

                <div className="absolute bottom-2 right-2 md:bottom-20 md:right-10 bg-white/90 border border-gray-200 rounded-xl flex items-center gap-2 md:gap-3 px-2 py-1 md:px-4 md:py-2 shadow-md text-xs md:text-sm w-60 md:w-80 transition-all animate-pulse">
                    <span className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-8 bg-gray-700 rounded-full font-bold text-white text-base">A</span>
                    <span className="text-gray-800">Cinnamon Essential Oil is reputed to calm dry skin.</span>
                </div>

            </div>
            <div className="space-y-10">
                <h1 className="text-7xl font-semibold">About Us</h1>
                <div className="text-black text-base font-medium space-y-4">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quidem accusantium voluptates a sapiente. Earum quisquam suscipit harum alias consequatur exercitationem, et laudantium animi expedita accusamus quo quam quas vero.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quidem accusantium voluptates a sapiente. Earum quisquam suscipit harum alias consequatur exercitationem, et laudantium animi expedita accusamus quo quam quas vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium tenetur assumenda mollitia dolores nobis sint unde, reiciendis fugit impedit optio!</p>
                </div>
                <button className="cursor-pointer hover:duration-300 bg-black text-primary-foreground shadow-xs hover:bg-primary hover:scale-105 hover:shadow-md h-11 rounded-sm gap-1.5 px-6 flex items-center">
                    Read More <ArrowRight size={25} />
                </button>
            </div>
        </div>
    )
}