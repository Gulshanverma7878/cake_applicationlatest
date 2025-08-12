"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image1: string | null;
  image2: string | null;
  image3: string | null;
  image4: string | null;
  location: string | null;
  location2: string | null;
  location3: string | null;
  location4: string | null;
  offer?: string; // Optional
};

const BakerySlider = () => {
  const [slides, setSlides] = useState<Product[]>([]);
  const baseUrl = "https://216r2ntv-3016.inc1.devtunnels.ms";

  useEffect(() => {
    const fetchSliderProducts = async () => {
      try {
        const res = await fetch(
          `${baseUrl}/api/product/location/slider`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to fetch slider products");

        const data = await res.json();
        setSlides(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSliderProducts();
  }, []);

  return (
    <div className="relative bg-black text-white rounded-b-2xl overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="h-[300px] md:h-[400px] w-full"
      >
        {slides.map((product, i) => (
          <SwiperSlide key={product.id || i}>
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                src={`${baseUrl}/${product.image2 || product.image1 || ""}`}
                alt={product.name}
                fill
                className="object-cover"
              />
              {/* Offer Text */}
              {product.offer && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <p className="text-xl md:text-4xl font-extrabold text-white text-center drop-shadow-md">
                    {product.offer}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BakerySlider;
