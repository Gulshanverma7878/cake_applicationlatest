"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaSnapchatGhost,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and App Links */}
        <div>
          <h2 className="text-3xl font-bold mb-3">
            Order<span className="text-black">.UK</span>
          </h2>
          <div className="flex gap-2 mb-3">
            <img
              src="/footer/Group.png"
              alt="App Store"
              className="w-28 h-9 object-contain"
            />
            <img
              src="/footer/Group.png"
              alt="Google Play"
              className="w-28 h-9 object-contain"
            />
          </div>
          <p className="text-sm">
            Company # 4900393-445, Registered with <br />
            House of companies.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-sm mb-2">
            Get Exclusive Deals in your Inbox
          </h3>
          <div className="flex mb-2">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="flex-1 px-3 py-2 rounded-l-md text-sm outline-none border border-gray-300"
            />
            <button className="bg-orange-400 px-4 py-2 rounded-r-md text-white text-sm font-medium hover:bg-orange-500">
              Subscribe
            </button>
          </div>
          <p className="text-xs">
            we won't spam, read our email{" "}
            <span className="underline cursor-pointer">policy</span>
          </p>
          <div className="flex gap-3 mt-3 text-lg text-gray-700">
            <FaFacebookF className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaTiktok className="hover:text-black cursor-pointer" />
            <FaSnapchatGhost className="hover:text-black cursor-pointer" />
          </div>
        </div>

        {/* Legal Pages */}
        <div>
          <h4 className="font-semibold text-sm mb-2">Legal Pages</h4>
          <ul className="text-sm space-y-1">
            <li className="hover:underline cursor-pointer">
              Terms and conditions
            </li>
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Cookies</li>
            <li className="hover:underline cursor-pointer">
              Modern Slavery Statement
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="font-semibold text-sm mb-2">Important Links</h4>
          <ul className="text-sm space-y-1">
            <li className="hover:underline cursor-pointer">Get help</li>
            <li className="hover:underline cursor-pointer">
              Add your restaurant
            </li>
            <li className="hover:underline cursor-pointer">
              Sign up to deliver
            </li>
            <li className="hover:underline cursor-pointer">
              Create a business account
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom footer bar */}
      <div className="bg-black text-white text-xs py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>© Order.uk 2024. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="hover:underline cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:underline cursor-pointer">Terms</span>
            <span className="hover:underline cursor-pointer">Pricing</span>
            <span className="hover:underline cursor-pointer">
              Do not sell or share my personal information
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
