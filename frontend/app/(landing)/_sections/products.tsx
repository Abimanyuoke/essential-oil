'use client'

import React from "react";
import { LuShoppingBasket } from 'react-icons/lu'
import { Badge } from "@/components/ui/badge"

export default function ProductsSection() {

    const badgeStyles = [
        { name: 'Best Seller', color: 'bg-yellow-400 text-black' },
        { name: 'New', color: 'bg-green-500 text-white' },
        { name: 'Popular', color: 'bg-blue-500 text-white' },
        { name: 'Sale', color: 'bg-red-500 text-white' },
        { name: 'Premium', color: 'bg-purple-500 text-white' }
    ];

    function getBadgeColor(badge: string) {
        const found = badgeStyles.find(b => b.name === badge);
        return found ? found.color : '';
    }

    const products = [
        {
            img: '/menu/cinnamonoil1.jpg',
            title: 'Cinnamon Essential Oil',
            description: 'Cinnamon oil soothes skin, provides a warming sensation, and is known for its anti-inflammatory and antimicrobial properties.',
            rating: 4.5,
            price: 12.99,
            badge: 'Best Seller'
        },
        {
            img: '/menu/lavender.jpg',
            title: 'Lavender Essential Oil',
            description: 'Lavender oil is popular for its calming and relaxing effects. It can help reduce stress and improve sleep quality.',
            rating: 4.8,
            price: 14.99,
            badge: 'New'
        },
        {
            img: '/menu/peppermint.jpg',
            title: 'Peppermint Essential Oil',
            description: 'Peppermint oil is invigorating and refreshing. It can help relieve headaches and improve focus.',
            rating: 4.6,
            price: 11.49,
            badge: ''
        },
        {
            img: '/menu/tea-tree.jpg',
            title: 'Tea Tree Essential Oil',
            description: 'Tea tree oil is well-known for its antibacterial and antifungal properties, making it great for skin care.',
            rating: 4.7,
            price: 13.99,
            badge: 'Popular'
        },
        {
            img: '/menu/eucalyptus.jpg',
            title: 'Eucalyptus Essential Oil',
            description: 'Eucalyptus oil helps clear the mind and supports respiratory health. It is commonly used in aromatherapy.',
            rating: 4.4,
            price: 10.99,
            badge: ''
        },
        {
            img: '/menu/lemongrass.jpg',
            title: 'Lemongrass Essential Oil',
            description: 'Lemongrass oil has a fresh, citrus scent and is used to relieve stress and anxiety.',
            rating: 4.3,
            price: 9.99,
            badge: 'Sale'
        },
        {
            img: '/menu/rose.jpg',
            title: 'Rose Essential Oil',
            description: 'Rose oil is cherished for its uplifting aroma and skin-nourishing benefits.',
            rating: 4.9,
            price: 19.99,
            badge: 'Premium'
        },
        {
            img: '/menu/orange.jpg',
            title: 'Sweet Orange Essential Oil',
            description: 'Sweet orange oil is known for its cheerful, sweet scent and mood-boosting properties.',
            rating: 4.2,
            price: 8.99,
            badge: ''
        },
        {
            img: '/menu/frankincense.jpg',
            title: 'Frankincense Essential Oil',
            description: 'Frankincense oil is valued for its grounding aroma and skin rejuvenating effects.',
            rating: 4.6,
            price: 16.49,
            badge: 'Best Seller'
        }
    ]

    return (
        <div className='py-20 md:my-20'>
            <div className="pb-20">
                <h2 className="font-semibold text-4xl md:text-5xl text-black text-center">Our Products</h2>
                <div className="w-48 h-1 bg-primary mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-10 items-center">
                {products.map((product, idx) => (
                    <div key={idx} className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col gap-4 h-[380px] relative">
                        <img src={product.img} alt={product.title} className="w-full object-cover rounded-lg mb-2" />
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-sm text-gray-600">{product.description}</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-primary font-bold text-xl">
                                ${product.price.toFixed(2)}
                            </span>
                            <span className="text-yellow-500 font-medium">
                                ★ {product.rating}
                            </span>
                        </div>
                        {product.badge && (
                            <Badge className={`${getBadgeColor(product.badge)} absolute right-0 mr-4`}>
                                {product.badge}
                            </Badge>
                        )}
                        <div className="mt-4 w-full bg-black text-white px-6 py-4 gap-1.5 rounded-sm hover:scale-105 transition-all duration-300 hover:bg-primarys shadow-xl flex items-center justify-center cursor-pointer">
                            <button className="">
                                <LuShoppingBasket className="inline-block mr-2 text-white" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
