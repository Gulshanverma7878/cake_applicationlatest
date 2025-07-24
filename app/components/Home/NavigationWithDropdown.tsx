"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    title: "Theme Cakes",
    dropdownItems: ["Superhero Cakes", "Cartoon Cakes", "Princess Cakes"],
  },
  {
    title: "By Relationship",
    dropdownItems: ["For Kids", "For Parents", "For Couples"],
  },
  {
    title: "Desserts",
    dropdownItems: ["Cupcakes", "Pastries", "Mousse", "Jar Cakes"],
  },
  {
    title: "Birthday",
    dropdownItems: ["1st Birthday", "Milestone Cakes", "Photo Cakes"],
  },
  {
    title: "Hampers",
    dropdownItems: ["Chocolate Hampers", "Snack Hampers", "Combo Packs"],
  },
  {
    title: "New",
    dropdownItems: ["Trending Now", "Just Launched", "Limited Edition"],
  },
  {
    title: "Anniversary",
    dropdownItems: ["Heart Shaped Cakes", "Couple Cakes", "Photo Cakes"],
  },
  {
    title: "Occasion",
    dropdownItems: ["Valentine", "Christmas", "New Year", "Raksha Bandhan"],
  },
  {
    title: "Customized Cakes",
    dropdownItems: ["Photo Cakes", "Name Cakes", "Message Cakes"],
  },
  {
    title: "Contact",
    dropdownItems: ["Call Us", "Email", "Support Form"],
  },
];

const HeaderWithDropdowns = () => {
  const [showNavVisible, setShowNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // helper to convert dropdown item to route path
  const toSlug = (text: string) =>
    "/category/" +
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  return (
    <nav
      className={`hidden md:flex justify-center items-center space-x-8 text-sm font-stylish bg-pink-300 transition-all duration-300 ease-in-out z-50 ${
        showNavVisible
          ? "opacity-100 h-[48px]"
          : "overflow-hidden opacity-0 h-0 border-b-0"
      }`}
    >
      {menuItems.map((item, index) => (
        <div key={index} className="relative group">
          <span className="hover:text-pink-600 cursor-pointer">
            {item.title}
          </span>

          {/* Dropdown */}
          <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <ul className="space-y-2 text-sm">
              {item.dropdownItems.map((dropItem, idx) => (
                <li key={idx}>
                  <Link href={toSlug('superhero-cakes')}>
                    <span className="hover:text-pink-600 cursor-pointer block">
                      {dropItem}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default HeaderWithDropdowns;
