import React from "react";

export default function Partners() {
    return (
        <div className="py-20 md:my-20">
            <div className="pb-20">
                <h2 className="font-semibold text-4xl md:text-5xl text-black text-center">Our Products</h2>
                <div className="w-48 h-1 bg-primary mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-14 items-center">
                <div className="flex items-center justify-center">
                    <img src="/partners/partner1.png" alt="Partner 1" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                </div>
                <div className="flex items-center justify-center">
                    <img src="/partners/partner2.png" alt="Partner 2" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                </div>
                <div className="flex items-center justify-center">
                    <img src="/partners/partner3.png" alt="Partner 3" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                </div>
                <div className="flex items-center justify-center">
                    <img src="/partners/partner4.png" alt="Partner 4" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                </div>
                <div className="flex items-center justify-center">
                    <img src="/partners/partner5.png" alt="Partner 5" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                </div>
                <div className="flex items-center justify-center">
                    <img src="/partners/partner6.png" alt="Partner 6" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                </div>
            </div>
        </div>
    )
}