'use client'
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion";
import React from 'react'

export default function AboutLetter() {
    return (
        <div className='w-4/5 mx-auto py-10'>
            <div className="grid lg:grid-cols-8 gap-10 md:gap-20 bg-black text-white p-14 rounded-xl items-center shadow-xl cursor-pointer">
                <div className='md:col-span-4'>
                    <h1 className='text-4xl/normal'>What Does Cinnamon Do You To Face?</h1>
                </div>
                <div className='md:col-span-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis ratione ex eius quod esse nesciunt architecto ea explicabo aut eveniet, accusamus minus perspiciatis alias voluptas ab eligendi molestiae reprehenderit?</p>
                </div>
                <div className='md:col-span-1'>
                    <motion.div
                        whileHover={{ scale: 1.05, backgroundColor: "#000000" }}
                        transition={{ duration: 0.3 }}
                        className="p-1 bg-primary rounded-full border-primary border-2 text-center cursor-pointer group">
                        <motion.div
                            initial={{ x: 0, opacity: 1 }}
                            whileHover={{ x: 20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex items-center justify-center h-10 w-10 text-white">
                            <ArrowRight size={40} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}