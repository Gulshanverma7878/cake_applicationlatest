"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
  location: string | null;
  location2: string | null;
  location3: string | null;
  location4: string | null;
};

const OffersSection: React.FC = () => {
  const [offers, setOffers] = useState<Product[]>([]);
  const baseUrl = "https://216r2ntv-3016.inc1.devtunnels.ms";

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch(
          `${baseUrl}/api/product/location2/offer`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to fetch offers");

        const data = await res.json();
        setOffers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOffers();
  }, []);

  return (
    <>
      {/* Heading */}
      <div className="px-4 md:px-10 mt-6 mb-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">
          All Offers from McDonald’s East London
        </h2>
      </div>

      {/* Offers Grid */}
      <div className="px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {offers.map((offer) => {
          const imageSrc =
            offer.image2 ||
            offer.image1 ||
            offer.image3 ||
            offer.image4 ||
            "";

          return (
            <div
              key={offer.id}
              className="relative rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={`${baseUrl}/${imageSrc}`}
                alt={offer.name}
                width={400}
                height={200}
                className="object-cover w-full h-48"
              />
              <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                {offer.price ? `Only $${offer.price}` : ""}
              </div>
              <div className="absolute bottom-2 left-2 text-white">
                <p className="text-xs">{offer.location2}</p>
                <h3 className="text-lg font-bold">{offer.name}</h3>
              </div>
              <div className="absolute bottom-2 right-2">
                <button className="bg-white p-1 rounded-full shadow">
                  <FiPlus />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OffersSection;
