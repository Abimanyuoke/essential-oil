'use client'
import React from "react";
import { IoChatbubbleEllipsesOutline, IoPlayOutline } from "react-icons/io5";
import imgMain from '../../public/banner2.webp';

export default function Banner() {
    return (
        <div className="bg-gradient-to-t from-primary/40 to-white">
            <div className="container px-5 md:py-10 mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center py-20">
                    <div className="space-y-10">
                        <h1 className="text-5xl md:text-6xl xl:text-8xl font-bold pt-8">Cinnamon Essential <span className="text-primary">Oil</span></h1>
                        <p className="text-base text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, eligendi saepe? Assumenda perferendis in, similique rem unde possimus magnam odio minima mollitia ipsa sunt et dolore provident, accusantium sint! Blanditiis.</p>
                        <div className="grid grid-cols-2 gap-5 pt-3 pb-10">
                            <button className="cursor-pointer hover:duration-300 bg-black text-primary-foreground shadow-xs hover:bg-primary hover:scale-105 hover:shadow-md rounded-sm gap-1.5 px-6 h-15">Explore Now</button>
                            <button className="cursor-pointer hover:duration-300 border-2 bg-primary/5 shadow-xs hover:bg-primary/20 border-primary/60 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-sm gap-1.5 px-6 h-15">
                                <span className="flex items-center justify-center gap-2 text-black font-medium text-base rounded-lg">
                                    <IoPlayOutline />
                                    How to Buy
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center gap-4 p-5 bg-white/80 border-2 border-primary/30 rounded-xl shadow-lg md:w-3/4 backdrop-blur-lg">
                            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                                <IoChatbubbleEllipsesOutline className="text-4xl text-primary" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-base text-gray-800 font-medium">“Absolutely love this oil! The scent is pure and uplifting. Fast shipping and beautiful packaging.”</p>
                                <div className="flex items-center text-sm gap-1 mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-yellow-400 fill-yellow-300" aria-hidden="true">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-yellow-400 fill-yellow-300" aria-hidden="true">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-yellow-400 fill-yellow-300" aria-hidden="true">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-yellow-400 fill-yellow-300" aria-hidden="true">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-yellow-400 fill-yellow-300" aria-hidden="true">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                    </svg>
                                    <span className="ml-2 text-xs text-gray-500">4.9/5.0 (1,200+ reviews)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute top-6 right-0 bg-white/90 border border-primary/20 rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                            <span className="text-primary font-bold">100% Pure</span>
                            <span className="text-xs text-gray-500">Organic</span>
                        </div>
                        <img
                            decoding="async"
                            width={600}
                            height={600}
                            alt="Cinnamon Essential Oil"
                            loading='lazy'
                            src={imgMain.src}
                            className="w-full h-auto object-cover bg-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}