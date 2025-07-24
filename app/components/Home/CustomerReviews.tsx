'use client'
import React from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    name: 'St Gfx',
    location: 'South London',
    date: '24th September, 2023',
    rating: 5,
    review: `The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.`,
    image: '/user.png', // replace with your image path
  },
  {
    name: 'St Gfx',
    location: 'South London',
    date: '24th September, 2023',
    rating: 5,
    review: `The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.`,
    image: '/user.png',
  },
  {
    name: 'St Gfx',
    location: 'South London',
    date: '24th September, 2023',
    rating: 5,
    review: `The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.`,
    image: '/user.png',
  },
];

const CustomerReviews = () => {
  return (
    <>

      <div className="bg-amber-100 py-8 pb-30  ">


        <div className='flex justify-between items-center m-2'>
          <h2 className="text-2xl md:text-3xl font-bold">Customer Reviews</h2>

          <div className="flex gap-3 pr-2">
            <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
              <FaChevronLeft />
            </button>
            <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
              <FaChevronRight />
            </button>
          </div>
        </div>


        <div className="flex items-center justify-between gap-4 flex-wrap lg:flex-nowrap">
          {reviews.map((r, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{r.name}</h4>
                  <p className="text-sm text-orange-500">{r.location}</p>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">{r.date}</span>
                <div className="flex ml-auto text-orange-500">
                  {[...Array(r.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-700">{r.review}</p>
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}


        {/* Rating Summary */}
      </div>
      <div className="text-center relative bottom-12 w-40 bg-white mx-auto rounded">
        <div className="text-4xl font-bold">3.4</div>
        <div className="text-orange-400 flex justify-center mt-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <FaStar key={i} className={i <= 3 ? 'text-orange-400' : 'text-gray-300'} />
          ))}
        </div>
        <p className="text-sm text-blue-500 mt-1">1,360 reviews</p>
      </div>

    </>
  );
};

export default CustomerReviews;
