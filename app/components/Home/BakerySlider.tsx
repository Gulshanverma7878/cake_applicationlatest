"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image1: string | null;
  location: string | null;
  offer?: string;
};

const BakerySlider = () => {
  const [slides, setSlides] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = "https://backend.fillerbay.in";

  useEffect(() => {
    const fetchSliderProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${baseUrl}/api/product/location/slider`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setSlides(data);
        setError(null);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load slider content");
        setSlides([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSliderProducts();
  }, []);

  if (loading) {
    return (
      <div className="h-[300px] md:h-[400px] w-full bg-gray-200 animate-pulse rounded-b-2xl flex items-center justify-center">
        <p>Loading slider...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[300px] md:h-[400px] w-full bg-red-100 text-red-600 rounded-b-2xl flex items-center justify-center">
        <p>{error}</p>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="h-[300px] md:h-[400px] w-full bg-gray-100 rounded-b-2xl flex items-center justify-center">
        <p>No slides available</p>
      </div>
    );
  }

  return (
    <div className="relative bg-black text-white rounded-b-2xl overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={slides.length > 1}
        className="h-[300px] md:h-[400px] w-full"
      >
        {slides.map((product, i) => (
          <SwiperSlide key={product.id || i}>
            <div className="relative w-full h-[300px] md:h-[400px]">
              {product.image1 ? (
                <Image
                  src={`${baseUrl}/${product.image1}`}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority={i === 0} // Only prioritize first image
                  unoptimized={process.env.NODE_ENV !== "production"} // Helps in development
                />
              ) : (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <span>No Image</span>
                </div>
              )}
              
              {(product.offer || product.name) && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30">
                  <div className="text-center p-4">
                    {product.offer && (
                      <p className="text-xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
                        {product.offer}
                      </p>
                    )}
                    <p className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">
                      {product.name}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom navigation buttons */}
      <div className="swiper-button-prev !text-white !left-4"></div>
      <div className="swiper-button-next !text-white !right-4"></div>
    </div>
  );
};

export default BakerySlider;