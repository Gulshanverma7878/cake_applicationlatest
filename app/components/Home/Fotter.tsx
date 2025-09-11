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

      {/* Bottom footer bar with animation */}
      <div className="bg-black text-gray-300 text-xs py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 animate-fadeIn">
          {/* Left Side - Copyright */}
          <div className="flex-1 space-y-2">
            <p className="text-gray-400 animate-slideInLeft">
              © Order.uk 2024. All Rights Reserved.
            </p>
            <p className="animate-pulse text-2xl">
              Website developed by{" "}
              <span className="font-semibold text-orange-400 hover:text-orange-300 transition">
                QuantumLoop Technology
              </span>
            </p>
          </div>

          {/* Middle - Contact Info */}
          <div className="flex-1 text-gray-200 space-y-1 animate-slideInUp">
            <p className="font-semibold text-white mb-2">📍 Contact Us</p>
            <p className="hover:text-orange-400 transition">
              2nd Floor, JTM Mall, Jagatpura Railway Station Near, Jaipur,
              Rajasthan 302017
            </p>
            <p className="hover:text-orange-400 transition">
              📞 +91 9876514254
            </p>
            <p className="hover:text-orange-400 transition">
              ✉️ quantumlooptechnology@gmail.com
            </p>
            <p className="hover:text-orange-400 transition">
              🕒 Open ⋅ Closes 7 pm
            </p>
          </div>

          {/* Right Side - Quick Links with underline animation */}
          <div className="flex-1">
            <p className="font-semibold text-white mb-3">🔗 Quick Links</p>
            <div className="flex flex-col space-y-2">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Pricing",
                "Do not sell or share my personal information",
              ].map((item, index) => (
                <span
                  key={index}
                  className="relative group cursor-pointer text-gray-300 hover:text-orange-400 transition duration-300"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-500 group-hover:w-full"></span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="mt-6 flex justify-center gap-6 text-xl text-gray-400">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition transform hover:scale-125 hover:rotate-12"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition transform hover:scale-125 hover:-rotate-12"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition transform hover:scale-125 hover:rotate-12"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
