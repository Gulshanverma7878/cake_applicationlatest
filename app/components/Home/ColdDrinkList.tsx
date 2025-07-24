"use client";

import React from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

type ColdDrinkItem = {
  title: string;
  desc: string;
  price: string;
  image: string;
};

type ColdDrinkListProps = {
  title?: string;
  items: ColdDrinkItem[];
};

const ColdDrinkList: React.FC<ColdDrinkListProps> = ({ title = "Coldrink", items }) => {
  return (
    <div className="px-4 md:px-10 mt-10">
      <h2 className="text-xl font-bold mb-4 text-amber-300">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((drink, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            {/* Left Content */}
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-semibold mb-2">{drink.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{drink.desc}</p>
              <p className="font-bold">{drink.price}</p>
            </div>

            {/* Right Image and Button */}
            <div className="flex flex-col items-center">
              <Image
                src={drink.image}
                alt={drink.title}
                width={80}
                height={80}
                className="rounded mb-2"
              />
              <button className="bg-black text-white p-2 rounded-full">
                <FiPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColdDrinkList;
