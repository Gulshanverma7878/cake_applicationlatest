"use client";

import Image from "next/image";
import { FiPlus } from "react-icons/fi";

type Burger = {
  title: string;
  desc: string;
  price: string;
  image: string;
};




   const burgers:Burger[] = [
    {
      title: "Royal Cheese Burger with extra Fries",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "GBP 23.10",
      image: "/burgers/burger.png",
    },
    {
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "GBP 23.10",
      image: "/burgers/burger.png",
    },
    {
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "GBP 23.10",
      image: "/burgers/burger.png",
    },
    {
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "GBP 23.10",
      image: "/burgers/burger.png",
    },
    {
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "GBP 23.10",
      image: "/burgers/burger.png",
    },
    {
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      price: "GBP 23.10",
      image: "/burgers/burger.png",
    },
  ];


const BurgerList = () => {
  return (
    <div className="px-4 md:px-10 mt-10">
      <h2 className="text-xl font-bold mb-4">Burgers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {burgers.map((burger, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            {/* Left Content */}
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-semibold mb-2">{burger.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{burger.desc}</p>
              <p className="font-bold">{burger.price}</p>
            </div>

            {/* Right Image and Button */}
            <div className="flex flex-col items-center">
              <Image
                src={burger.image}
                alt={burger.title}
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

export default BurgerList;
