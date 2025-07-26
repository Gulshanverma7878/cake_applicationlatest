"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const BakerySlider = () => {
    const slides = [
        {
            src: "/bakeryImage/IMG-20250721-WA0004.jpg",
            // offer: "🎂 Flat 20% Off on Chocolate Cakes!",
        },
        {
            src: "/bakeryImage/IMG-20250721-WA0005.jpg",
            // offer: "🍰 Buy 1 Get 1 Free on Cupcakes!",
        },
        {
            src: "/bakeryImage/IMG-20250721-WA0006.jpg",
            // offer: "🎉 30% Off for First-Time Orders!",
        },
        {
            src: "/bakeryImage/IMG-20250721-WA0007.jpg",
            // offer: "🧁 Free Delivery on Orders Above ₹499!",
        },
        {
            src: "/bakeryImage/IMG-20250721-WA0008.jpg",
            // offer: "🥳 Customized Cakes Now Available!",
        },
    ];

    return (
        <div className="relative bg-black text-white rounded-b-2xl overflow-hidden ">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3000 }}
                loop
                className="h-[300px] md:h-[400px] w-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-[300px] md:h-[400px]">
                            <Image
                                src={slide.src}
                                alt={`Slide ${i}`}
                                fill
                                className="object-cover"
                            />
                            {/* <div className="absolute inset-0 bg-black/30" /> */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <p className="text-xl md:text-4xl font-extrabold text-white text-center drop-shadow-md">
                                    {slide.offer}
                                </p>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BakerySlider;
