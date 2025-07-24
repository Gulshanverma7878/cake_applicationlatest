"use client";

import React from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

interface Offer {
  image: string;
  title: string;
  location: string;
  discount: string;
}

interface OffersSectionProps {
  offers: Offer[];
}

const OffersSection: React.FC<OffersSectionProps> = ({ offers }) => {
  return (
    <>
      {/* Search Heading */}
      <div className="px-4 md:px-10 mt-6 mb-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">
          All Offers from McDonald’s East London
        </h2>
      </div>

      {/* Offers Section */}
      <div className="px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src={offer.image}
              alt={offer.title}
              width={400}
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              {offer.discount}
            </div>
            <div className="absolute bottom-2 left-2 text-white">
              <p className="text-xs">{offer.location}</p>
              <h3 className="text-lg font-bold">{offer.title}</h3>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="bg-white p-1 rounded-full shadow">
                <FiPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OffersSection;
