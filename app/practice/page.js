'use client';

import { useEffect, useState } from 'react';
import {
  FaChevronDown,
  FaUser,
  FaShoppingCart,
  FaSearch,
} from 'react-icons/fa';
import { MdOutlineTrackChanges } from 'react-icons/md';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className="w-full fixed top-0 z-50 bg-white shadow-sm transition-all duration-300">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 bg-white border-b">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 mb-2 md:mb-0">
            <img src="/pinkHeader/logo.avif" alt="Logo" className="h-12 w-auto" />
            <img src="/pinkHeader/logoname.avif" alt="Bakingo" className="h-10 w-auto" />
          </a>

          {/* Search */}
          <div className="flex items-center w-full md:w-1/3 border border-pink-200 rounded-full px-3 py-1 bg-white shadow-sm mb-2 md:mb-0">
            <FaSearch className="text-pink-400" />
            <input
              type="text"
              placeholder="Search for cakes..."
              className="flex-1 bg-transparent outline-none px-2 text-sm"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5 text-sm text-gray-700">
            <div className="flex items-center gap-1 cursor-pointer hover:text-pink-500">
              <MdOutlineTrackChanges className="text-pink-500" />
              <span>Track Order</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-pink-500">
              <FaShoppingCart className="text-pink-500" />
              <span>Cart</span>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1 hover:text-pink-500"
              >
                <FaUser className="text-pink-500" />
                <span>Login</span>
                <FaChevronDown className="text-xs" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md text-sm z-50">
                  <a className="block px-4 py-2 hover:bg-pink-50" href="#">My Orders</a>
                  <a className="block px-4 py-2 hover:bg-pink-50" href="#">Wishlist</a>
                  <a className="block px-4 py-2 hover:bg-pink-50" href="#">Manage Address</a>
                  <a className="block px-4 py-2 hover:bg-pink-50 text-pink-500" href="#">Logout</a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Nav Bar - Now using height transition instead of opacity */}
        <nav
          className={`
            hidden md:flex justify-center items-center space-x-8 text-sm font-medium border-b bg-white
            transition-all duration-300 ease-in-out overflow-hidden
            ${showNavVisible ? 'h-[48px]' : 'h-0 border-b-0'}
          `}
        >
          {['ABOUT', 'MENU', 'INSTAGRAM', 'PINTEREST', 'CONTACT'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-black hover:text-pink-500 transition uppercase tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className={`md:hidden flex overflow-x-auto space-x-4 px-4 py-2 bg-white text-sm border-b
          transition-all duration-300 ease-in-out overflow-hidden
          ${showNavVisible ? 'h-[40px]' : 'h-0 border-b-0 py-0'}`}>
          {['About', 'Menu', 'Instagram', 'Pinterest', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 whitespace-nowrap hover:text-pink-500"
            >
              {item}
            </a>
          ))}
        </div>
      </header>

      {/* Spacer to avoid content being under fixed header */}
      <div className="pt-[150px] h-[2000px] bg-gray-50 px-4 text-center text-gray-600">
        Scroll up/down to test nav behavior.
      </div>
    </>
  );
}