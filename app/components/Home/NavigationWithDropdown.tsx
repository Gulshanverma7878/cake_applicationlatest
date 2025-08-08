"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface SubCategory {
  name: string;
  id: string;
}

interface Category {
  name: string;
  id: string;
  SubCategories: SubCategory[];
}

const HeaderWithDropdowns = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showNavVisible, setShowNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    fetch("https://216r2ntv-3016.inc1.devtunnels.ms/api/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

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

  return (
    <nav
      className={`hidden md:flex justify-center items-center space-x-8 text-sm font-stylish bg-pink-300 transition-all duration-300 ease-in-out z-50 ${
        showNavVisible
          ? "opacity-100 h-[48px]"
          : "overflow-hidden opacity-0 h-0 border-b-0"
      }`}
    >
      {categories.map((cat) => (
        <div key={cat.id} className="relative">
          {/* Category name as link */}
          <Link
            href={`/category/${cat.id}`}
            className="hover:text-pink-600 cursor-pointer"
          >
            {cat.name}
          </Link>

          {/* Dropdown toggle */}
          <span
            onClick={() =>
              setActiveMenu(activeMenu === cat.id ? null : cat.id)
            }
            className="ml-2 text-xs text-gray-600 cursor-pointer"
          >
            ▼
          </span>

          {activeMenu === cat.id && (
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 w-48 z-50">
              <ul className="space-y-2 text-sm">
                {cat.SubCategories.map((sub) => (
                  <li key={sub.id}>
                    <Link href={`/category/${sub.id}`}>
                      <span className="hover:text-pink-600 cursor-pointer block">
                        {sub.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default HeaderWithDropdowns;
