"use client";

import React from "react";
import { FiMapPin } from "react-icons/fi";

const MapWithInfoBox = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      <iframe
        className="w-full h-96"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.319411940566!2d75.75679271547578!3d26.83690867677596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db542e9954939%3A0x3d29984cc96023ef!2sFiller%20Bay%20Cafe!5e0!3m2!1sen!2sin!4v1694481234567!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
      ></iframe>

      {/* Location Pin Badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
        <FiMapPin className="text-orange-600 text-lg" />
        <span className="text-xs font-semibold text-gray-800">
          Filler Bay Cafe
        </span>
      </div>

      {/* Info Box Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-black/20 text-white p-6">
        <h3 className="text-xl font-bold mb-1">Filler Bay Cafe</h3>
        <p className="text-yellow-300 text-sm mb-1">Mansarovar, Jaipur</p>
        <p className="text-sm mb-1">
          Shop no 3, Devaram Plaza, Iskcon Rd, near BL Supermart, 
          Sumer Nagar, Mansarovar, Jaipur, Rajasthan 302020
        </p>
        <div className="flex flex-wrap gap-3 mt-2 text-sm">
          <span>
            <strong>Phone:</strong> +91 73000 01015
          </span>
          <a
            href="https://www.google.com/maps/place/Filler+Bay+cafe/@26.8369087,75.7589809,697m"
            className="text-blue-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapWithInfoBox;
