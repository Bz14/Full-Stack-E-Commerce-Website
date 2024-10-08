"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-2 bg-custom-green shadow-md">
      <div className="flex items-center">
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
      <div className="hidden md:flex md:items-center md:gap-6 md:mr-7">
        <ul className="flex gap-6 text-white">
          <li className="hover:text-gray-200">Shop</li>
          <li className="hover:text-gray-200">About Us</li>
          <li className="hover:text-gray-200">
            <button>Login</button>
          </li>
          <li>
            <button className="bg-custom-red text-white rounded-md px-4 py-2 hover:bg-red-400 transition duration-200">
              Sign Up
            </button>
          </li>
          <li>
            <FaCartPlus className="text-white text-2xl" />
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-custom-green md:hidden">
          <ul className="flex flex-col items-center py-2 gap-2">
            <li className="text-white py-2 hover:text-gray-200 cursor-pointer">
              Shop
            </li>
            <li className="text-white py-2 hover:text-gray-200 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-gray-200 text-white">
              <button>Login</button>
            </li>
            <li>
              <button className="bg-custom-red text-white rounded-md px-4 py-2 hover:bg-red-400 transition duration-200">
                Sign Up
              </button>
            </li>
            <li>
              <FaCartPlus className="text-white text-2xl" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
