'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from '../../public/logo.webp'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LuShoppingBasket } from 'react-icons/lu'


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const router = useRouter();

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex container items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <img
                            decoding="async"
                            width={200}
                            height={80}
                            alt="Logo Essential Oil"
                            loading='lazy'
                            src={logo.src}
                            className="lg:w-[160px] xl:w-[200px]" />
                    </Link>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-7 xl:gap-x-16 items-center">
                    <Link href="#" className="md:text-md xl:text-[1.05rem] font-medium text-gray-900 hover:text-primary hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black duration-300">
                        Products
                    </Link>
                    <Link href="#" className="md:text-md xl:text-[1.05rem] font-medium text-gray-900 hover:text-primary hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black duration-300">
                        About Us
                    </Link>
                    <Link href="#" className="md:text-md xl:text-[1.05rem] font-medium text-gray-900 hover:text-primary hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black duration-300">
                        Testimonials
                    </Link>
                    <Link href="#" className="md:text-md xl:text-[1.05rem] font-medium text-gray-900 hover:text-primary hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black duration-300">
                        Reviews
                    </Link>
                    <Link href="#" className="md:text-md xl:text-[1.05rem] font-medium text-gray-900 hover:text-primary hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black duration-300">
                        Contact Us
                    </Link>
                </PopoverGroup>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                    <button className="text-base font-medium cursor-pointer text-white px-6 py-2.5 bg-black rounded-sm hover:scale-105 hover:bg-primary transition-all duration-300 shadow-lg" onClick={() => router.push('/auth/signIn')}>
                        Sign In
                    </button>
                    <div className='w-[38px] h-[38px] p-2 flex items-center justify-center rounded-full text-white bg-black hover:scale-105 hover:bg-primary transition-all duration-300 ml-4 text-2xl'>
                        <LuShoppingBasket />
                    </div>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                decoding="async"
                                width={160}
                                height={80}
                                alt="Logo Essential Oil"
                                loading='lazy'
                                src={logo.src}
                                className="lg:w-[160px] xl:w-[200px]" />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6 flex flex-col gap-5 mt-5">
                                <Link href="#" className="text-[1.05rem] font-medium text-gray-900 hover:text-primary hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black hover:w-20 w-100">
                                    Products
                                </Link>
                                <Link href="#" className="text-[1.05rem] font-medium text-gray-900 hover:text-primary hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black hover:w-20 w-100 ">
                                    About Us
                                </Link>
                                <Link href="#" className="text-[1.05rem] font-medium text-gray-900 hover:text-primary hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black hover:w-29 w-100 ">
                                    Testimonials
                                </Link>
                                <Link href="#" className="text-[1.05rem] font-medium text-gray-900 hover:text-primary hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black hover:w-20 w-100 ">
                                    Reviews
                                </Link>
                                <Link href="#" className="text-[1.05rem] font-medium text-gray-900 hover:text-primary hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black hover:w-25 w-100 ">
                                    Contact Us
                                </Link>
                            </div>
                            <div className="flex items-center py-4">
                                <button className="text-base font-medium cursor-pointer text-white px-6 py-2.5 bg-black rounded-sm hover:scale-105 hover:bg-primary transition-all duration-300 shadow-lg" onClick={() => router.push('/auth/signIn')}>
                                    Sign In
                                </button>
                                <div className='w-[38px] h-[38px] p-2 flex items-center justify-center rounded-full text-white bg-black hover:scale-105 hover:bg-primary transition-all duration-300 ml-4 text-2xl'>
                                    <LuShoppingBasket />
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
