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

const BurgerList = () => {
  const [burgers, setBurgers] = useState<Product[]>([]);
  const baseUrl = "https://216r2ntv-3016.inc1.devtunnels.ms";

  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/product/location3/first`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch burgers");

        const data = await res.json();
        setBurgers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBurgers();
  }, []);

  return (
    <div className="px-4 md:px-10 mt-10">
      <h2 className="text-xl font-bold mb-4">popular</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {burgers.map((burger) => {
          const imageSrc =
            burger.image2 ||
            burger.image1 ||
            burger.image3 ||
            burger.image4 ||
            "";

          return (
            <Link
              key={burger.id}
              href={`/${burger.id}`} // 👈 yahan redirect ka path
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center hover:shadow-lg transition"
            >
              {/* Left Content */}
              <div className="flex-1 pr-4">
                <h3 className="text-lg font-semibold mb-2">{burger.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{burger.description}</p>
                <p className="font-bold">GBP {burger.price}</p>
              </div>

              {/* Right Image and Button */}
              <div className="flex flex-col items-center">
                {imageSrc && (
                  <Image
                    src={`${baseUrl}/${imageSrc}`}
                    alt={burger.name}
                    width={80}
                    height={80}
                    className="rounded mb-2 object-cover"
                  />
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault(); // link click ka override
                    window.location.href = `/${burger.id}`;
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

export default BurgerList;
