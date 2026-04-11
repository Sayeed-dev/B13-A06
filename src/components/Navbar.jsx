import React from "react";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="bg-[#00101f] backdrop-blur-md border-b border-white/10 shadow-lg sticky top-0 z-50">
      <div className="navbar container mx-auto px-2 lg:px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-[#00101f] border border-white/10 rounded-box w-52 text-white"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-lg md:text-xl font-bold tracking-tight text-white px-1 md:px-4">
            Digi Tool
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-white/90">
            <li>
              <a className="hover:bg-white/10 transition">Home</a>
            </li>
            <li>
              <a className="hover:bg-white/10 transition">Projects</a>
            </li>
            <li>
              <a className="hover:bg-white/10 transition">About</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex gap-2 md:gap-4 items-center">
          <div className="text-xl md:text-2xl text-gray-100 cursor-pointer p-2">
            <FaCartShopping />
          </div>

          <a className="btn btn-sm md:btn-md hidden sm:flex hover:bg-white/10 text-white border-white/20 bg-transparent rounded-xl">
            Log In
          </a>
          <a className="btn btn-sm md:btn-md bg-blue-600 hover:bg-blue-700 text-white border-none rounded-xl">
            <span className="hidden xs:inline">Get Started</span>
            <span className="xs:hidden">Join</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
