// components/SimilarRestaurants.tsx
'use client';
import Image from 'next/image';

const restaurants = [
  { name: "McDonald's London", logo: '/restaurent/McDonald.png' },
  { name: 'Papa Johns', logo: '/restaurent/papa.png' },
  { name: 'KFC West London', logo: '/restaurent/kfc.png' },
  { name: 'Texas Chicken', logo: '/restaurent/texas.png' },
  { name: 'Burger King', logo: '/restaurent/burger.png' },
  { name: 'Shaurma 1', logo: '/restaurent/shaurma.png' },
];

export default function SimilarRestaurants() {
  return (
    <div className="mt-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Similar Restaurants</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {restaurants.map((item, index) => (
          <div
            key={index}
            className="bg-white hover:bg-orange-100 text-center rounded-md p-4 shadow cursor-pointer transition"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={60}
              height={60}
              className="mx-auto"
            />
            <p className="mt-2 text-sm font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
