import { useState } from "react";
import { Link } from "@remix-run/react";
import logo from "../../public/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white h-[60px] flex items-center border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center w-full">
        <div className="flex items-center">
          <img
            className="h-10 w-auto mr-2"
            src={logo}
            alt="Tire shop in Asheville, North Carolina Logo"
          />
          <p className="font-semibold text-lg">A & B Tire Shop</p>
        </div>

        {/* Large screen menu */}
        <div className="hidden lg:flex space-x-4">
          <Link
            to="#about"
            className="text-gray-700 hover:text-gray-900 font-semibold"
          >
            About Us
          </Link>
          <Link
            to="#services"
            className="text-gray-700 hover:text-gray-900 font-semibold"
          >
            Services
          </Link>
          <Link
            to="#what-clients-say"
            className="text-gray-700 hover:text-gray-900 font-semibold"
          >
            What Our Clients Say
          </Link>
          <Link
            to="#contact"
            className="text-gray-700 hover:text-gray-900 font-semibold"
          >
            Contact
          </Link>
        </div>

        {/* Small/Medium screen menu */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <Link
                to="#about"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold"
              >
                About Us
              </Link>
              <Link
                to="#services"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold"
              >
                Services
              </Link>
              <Link
                to="#what-clients-say"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold"
              >
                What Our Clients Say
              </Link>
              <Link
                to="#contact"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
