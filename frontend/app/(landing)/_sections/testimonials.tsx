import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Star, Quote } from "lucide-react";

const testimonialData = [
    {
        id: 1,
        name: "Alicia Hart",
        position: "Wellness Coach, Tranquil Minds",
        image: "https://images.unsplash.com/photo-1584992115057-a4f38fc57b36",
        rating: 5,
        testimonial: "I've tried countless brands, but these oils genuinely uplift the energy in my sessions. Clients can feel the difference.",
        company: "Tranquil Minds",
    },
    {
        id: 2,
        name: "Jason Lee",
        position: "Managing Director, VitalSpaces",
        image: "https://images.unsplash.com/photo-1573495628368-8b6c7c3f5455",
        rating: 4,
        testimonial: "Using these products in our coworking spaces was a game changer—employees report better focus and mood.",
        company: "VitalSpaces",
    },
    {
        id: 3,
        name: "Priya Kumar",
        position: "Owner, Soul Garden Spa",
        image: "https://images.unsplash.com/photo-1620812094173-24dbd7157421",
        rating: 5,
        testimonial: "Customers ask where we get our oils all the time. They've become part of our signature experience.",
        company: "Soul Garden Spa",
    },
    {
        id: 4,
        name: "Noah Martinez",
        position: "Creative Lead, AromaStudio",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
        rating: 4,
        testimonial: "These oils add a layer of authenticity to our storytelling campaigns. Love the earthy tones and balance.",
        company: "AromaStudio",
    },
    {
        id: 5,
        name: "Mei Tanaka",
        position: "Clinical Aromatherapist",
        image: "https://images.unsplash.com/photo-1544725176-7c1e4c8fb9b7",
        rating: 5,
        testimonial: "Every batch meets therapeutic standards. This consistency is vital for my practice.",
        company: "Tanaka Therapy",
    },
    {
        id: 6,
        name: "Daniel Costa",
        position: "Brand Consultant",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        rating: 4,
        testimonial: "Packaging, scent, and storytelling blend perfectly. These oils have made it easier for us to build brand identity.",
        company: "Costa Branding",
    },
]

export default function TestimonialsSection() {
    const renderStarts = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`h-5 w-5 ${index < rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
            />
        ))
    };

    return (
        <div className='bg-gradient-to-br from-slate-50 to-primary/10 py-20 my-20'>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-semibold text-4xl md:text-5xl text-black text-center">Client Testimonials</h2>
                    <div className="w-48 h-1 bg-primary mx-auto mt-4 mb-6"></div>
                    <p className="text-xl text-gray-600">Discover what our clients say about their experience working with us</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <Carousel className="w-full">
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonialData.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="bg-white rounded-2xl p-8 h-full transform transition-all duration-300 border border-gray-100">
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center mb-6">
                                            <Quote className="w-8 h-8 text-primary opacity-50 mr-3" />
                                            <div className="flex">
                                                {renderStarts(testimonial.rating)}
                                            </div>
                                        </div>
                                        <blockquote className="mb-8 flex-grow">
                                            <p className="text-gray-700 leading-relaxed text-lg italic">
                                                {testimonial.testimonial}
                                            </p>
                                        </blockquote>

                                        <div className="flex items-center mt-auto">
                                            <div className="relative">
                                                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg" />
                                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="font-semibold text-gray-800 text-lg">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-primary font-medium">
                                                    {testimonial.position}
                                                </p>
                                                <p className="text-gray-500 text-sm">
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12 bg-white hover:bg-primary/10 border-2 border-primary/20 text-primary hover:text-primary/80 shadow-lg" />
                    <CarouselNext className="hidden md:flex -right-12 bg-white hover:bg-primary/10 border-2 border-primary/20 text-primary hover:text-primary/80 shadow-lg" />
                </Carousel>
            </div>

            <div className="text-center mt-16">
                <div className="inline-flex items-center px-6 py-3 bg-black hover:bg-primary cursor-pointer text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="font-semibold">Join 500+ Happy Clients</span>
                </div>
            </div>
        </div>
    )
}
