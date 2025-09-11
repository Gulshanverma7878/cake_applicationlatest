"use client";
import React from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    name: "St Gfx",
    location: "South London",
    date: "24th September, 2023",
    rating: 5,
    review:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
  },
  {
    name: "St Gfx",
    location: "South London",
    date: "24th September, 2023",
    rating: 4,
    review:
      "Great service and fresh food! The staff was very polite and helpful. Highly recommend visiting this outlet for quick bites.",
  },
  {
    name: "St Gfx",
    location: "South London",
    date: "24th September, 2023",
    rating: 5,
    review:
      "Loved the ambience! Perfect place to chill with friends. Service is super fast and staff is friendly.",
  },
];

const CustomerReviews = () => {
  return (
    <>
      <div className="bg-amber-50 py-10">
        {/* Heading + Navigation */}
        <div className="flex justify-between items-center px-4 md:px-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Customer Reviews
          </h2>

          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition">
              <FaChevronLeft />
            </button>
            <button className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
            >
              <div className="mb-3">
                <h4 className="text-lg font-semibold text-gray-900">
                  {r.name}
                </h4>
                <p className="text-sm text-orange-600">{r.location}</p>
              </div>

              <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                <span>{r.date}</span>
                <div className="flex text-orange-500">
                  {[...Array(r.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">{r.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rating Summary */}
      <div className="text-center relative -top-8 w-44 bg-white shadow-md border border-gray-100 mx-auto rounded-xl p-3">
        <div className="text-4xl font-bold text-gray-800">3.4</div>
        <div className="flex justify-center mt-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <FaStar
              key={i}
              className={i <= 3 ? "text-orange-400" : "text-gray-300"}
            />
          ))}
        </div>
        <p className="text-sm text-blue-500 mt-1">1,360 reviews</p>
      </div>
    </>
  );
};

export default CustomerReviews;
