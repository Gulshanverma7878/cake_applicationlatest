"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image1: string | null;
  image2: string | null;
  image3: string | null;
  image4: string | null;
};

const FriesSection = () => {
  const [fries, setFries] = useState<Product[]>([]);
  const baseUrl = "https://backend.fillerbay.shop";

  useEffect(() => {
    const fetchFries = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/product/location4/second`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch fries");

        const data = await res.json();
        setFries(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFries();
  }, []);

  return (
    <div className="px-4 md:px-10 mt-10">
      <h2 className="text-xl font-bold mb-4 text-amber-400">Desserts & Add-ons</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fries.map((item) => {
          const imageSrc =
            item.image2 || item.image1 || item.image3 || item.image4 || "";

          return (
            <Link
              key={item.id}
              href={`/${item.id}`}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center hover:shadow-lg transition"
            >
              {/* Left Content */}
              <div className="flex-1 pr-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="font-bold">GBP {item.price}</p>
              </div>

              {/* Right Image and Button */}
              <div className="flex flex-col items-center">
                {imageSrc && (
                  <Image
                    src={`${baseUrl}/${imageSrc}`}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded mb-2 object-cover"
                  />
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `/${item.id}`;
                  }}
                  className="bg-black text-white p-2 rounded-full"
                >
                  <FiPlus />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FriesSection;
