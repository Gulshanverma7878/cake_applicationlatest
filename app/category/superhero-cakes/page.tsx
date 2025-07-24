'use client';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const cakes = [
  {
    name: 'Juicy Mango Delight Cake',
    price: '₹599',
    rating: 4.9,
    reviews: 57,
    image: '/cake/cake.webp',
  },
  {
    name: 'Tropical Escape Mango Cheesecake',
    price: '₹849',
    rating: 4.8,
    reviews: 25,
    image: '/cake/cake.webp',
    tag: 'Gourmet',
  },
  {
    name: 'Mango Magic Tres Leches',
    price: '₹259',
    rating: 5,
    reviews: 13,
    image: '/cake/cake.webp',
    tag: 'Gourmet',
  },
  {
    name: 'Pulpy Mango Cream Cake',
    price: '₹599',
    rating: 4.9,
    reviews: 124,
    image: '/cake/cake.webp',
  },
   {
    name: 'Juicy Mango Delight Cake',
    price: '₹599',
    rating: 4.9,
    reviews: 57,
    image: '/cake/cake.webp',
  },
  {
    name: 'Tropical Escape Mango Cheesecake',
    price: '₹849',
    rating: 4.8,
    reviews: 25,
    image: '/cake/cake.webp',
    tag: 'Gourmet',
  },
  {
    name: 'Mango Magic Tres Leches',
    price: '₹259',
    rating: 5,
    reviews: 13,
    image: '/cake/cake.webp',
    tag: 'Gourmet',
  },
  {
    name: 'Pulpy Mango Cream Cake',
    price: '₹599',
    rating: 4.9,
    reviews: 124,
    image: '/cake/cake.webp',
  },
];

const CakeGalleryPage = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Mango Cake Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cakes.map((cake, idx) => (
          <div
            key={idx}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-white"
          >
            <div className="relative w-full h-48">
              <Image
                src={cake.image}
                alt={cake.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-3">
              <h2 className="text-sm font-semibold line-clamp-2">
                {cake.name}
              </h2>
              <p className="text-base font-bold mt-1">{cake.price}</p>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <FaStar className="text-green-600 mr-1" />
                {cake.rating}
                <span className="ml-1 text-gray-500">
                  ({cake.reviews} Reviews)
                </span>
              </div>
              {cake.tag && (
                <span className="text-xs bg-yellow-300 text-black font-medium px-2 py-0.5 rounded mt-2 inline-block">
                  {cake.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeGalleryPage;
