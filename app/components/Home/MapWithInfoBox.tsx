"use client";

import React from "react";
import { FiMapPin } from "react-icons/fi";

const MapWithInfoBox = () => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md">
      <iframe
        className="w-full h-96"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.7546461239242!2d-0.0903!3d51.5046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034b8e1e3f61%3A0x646f7c33ae6ec6a!2sMcDonald's%20South%20London!5e0!3m2!1sen!2sin!4v1625560077799!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
      ></iframe>

      {/* Info Box Overlay */}
      <div className="absolute top-6 left-6 bg-indigo-950 text-white p-5 rounded-xl shadow-lg max-w-sm">
        <h3 className="text-xl font-bold">McDonald's</h3>
        <p className="text-sm text-yellow-400 mb-2">South London</p>
        <p className="text-sm mb-1">
          Tooley St, London Bridge, London SE1 2TF, United Kingdom
        </p>
        <p className="text-sm">
          <strong>Phone number:</strong> +934443-43
        </p>
        <p className="text-sm">
          <strong>Website:</strong>{" "}
          <a
            href="http://mcdonalds.uk/"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://mcdonalds.uk/
          </a>
        </p>
      </div>

      {/* Location Pin on Map */}
      <div className="absolute top-16 right-10 bg-white p-3 rounded-lg shadow-md flex items-center gap-2">
        <FiMapPin className="text-orange-600 text-xl" />
        <span className="text-sm font-medium">
          McDonald's
          <br />
          South London
        </span>
      </div>
    </div>
  );
};

export default MapWithInfoBox;
