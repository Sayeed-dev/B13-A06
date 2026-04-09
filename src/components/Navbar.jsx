import React from "react";

const Navbar = () => {
  return (
    <div className=" top-0 z-50 px-4 pt-4 absolute w-full">
      <div className="navbar bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="I4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-white/80 backdrop-blur-xl rounded-box w-52"
            >
              <li>
                <a className="text-white">Home</a>
              </li>
              <li>
                <a className="text-white">Projects</a>
              </li>
              <li>
                <a className="text-white">About</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl font-bold tracking-tight text-white">
            WorkBoard
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li>
              <a className="hover:bg-white/20 transition text-white">Home</a>
            </li>
            <li>
              <a className="hover:bg-white/20 transition text-white">Projects</a>
            </li>
            <li>
              <a className="hover:bg-white/20 transition text-white">About</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn bg-black/70 hover:bg-black text-white border-none rounded-xl">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
