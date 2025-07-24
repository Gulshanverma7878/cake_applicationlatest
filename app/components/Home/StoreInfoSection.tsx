"use client";

import React from "react";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

const StoreInfoSection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Delivery Information */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="flex items-center gap-2 font-semibold text-lg mb-4">
          <FiMapPin className="text-indigo-600" />
          Delivery information
        </h2>
        <ul className="text-sm space-y-1">
          <li><strong>Monday:</strong> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</li>
          <li><strong>Tuesday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Wednesday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Thursday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Friday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Saturday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Sunday:</strong> 8:00 AM–12:00 AM</li>
        </ul>
        <p className="mt-4 text-sm">
          <strong>Estimated time until delivery:</strong> 20 min
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="flex items-center gap-2 font-semibold text-lg mb-4">
          <FiPhone className="text-indigo-600" />
          Contact information
        </h2>
        <p className="text-sm mb-3">
          If you have allergies or other dietary restrictions, please contact the restaurant.
          The restaurant will provide food-specific information upon request.
        </p>
        <p className="text-sm mb-2">
          <strong>Phone number:</strong> +934443-43
        </p>
        <p className="text-sm">
          <strong>Website:</strong>{" "}
          <a
            href="http://mcdonalds.uk/"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://mcdonalds.uk/
          </a>
        </p>
      </div>

      {/* Operational Times */}
      <div className="bg-indigo-950 text-white shadow-md rounded-lg p-6">
        <h2 className="flex items-center gap-2 font-semibold text-lg mb-4">
          <FiClock className="text-white" />
          Operational Times
        </h2>
        <ul className="text-sm space-y-1">
          <li><strong>Monday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Tuesday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Wednesday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Thursday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Friday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Saturday:</strong> 8:00 AM–3:00 AM</li>
          <li><strong>Sunday:</strong> 8:00 AM–3:00 AM</li>
        </ul>
      </div>
    </div>
  );
};

export default StoreInfoSection;
