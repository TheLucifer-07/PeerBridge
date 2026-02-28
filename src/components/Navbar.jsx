import React from "react";
import { BellIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT SECTION */}
        <div className="flex items-center">

          {/* Back Arrow */}
          <button
            onClick={() => window.history.back()}
            className="text-gray-400 hover:text-white transition duration-300 mr-8"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>

          {/* Logo */}
          <div
            onClick={() => setCurrentPage("home")}
            className="text-2xl font-bold tracking-tight cursor-pointer select-none"
          >
            <span className="text-white">Peer</span>
            <span className="text-indigo-500">Bridge</span>
          </div>

        </div>

        {/* CENTER NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

          <span
            onClick={() => setCurrentPage("home")}
            className="hover:text-indigo-500 transition duration-300 cursor-pointer"
          >
            Home
          </span>

          <span
            onClick={() => setCurrentPage("resources")}
            className="hover:text-indigo-500 transition duration-300 cursor-pointer"
          >
            Resources
          </span>

          <span
            onClick={() => setCurrentPage("tutors")}
            className="hover:text-indigo-500 transition duration-300 cursor-pointer"
          >
            Tutors
          </span>

          <span
            onClick={() => setCurrentPage("discussions")}
            className="hover:text-indigo-500 transition duration-300 cursor-pointer"
          >
            Discussions
          </span>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">

          {/* Notification Bell */}
          <div className="relative cursor-pointer">
            <BellIcon className="w-6 h-6 text-gray-300 hover:text-indigo-500 transition duration-300" />
            <span className="absolute -top-2 -right-2 w-3 h-3 bg-indigo-600 rounded-full"></span>
          </div>

          {/* Profile Avatar */}
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-semibold text-white cursor-pointer hover:scale-105 transition duration-300">
            AC
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;