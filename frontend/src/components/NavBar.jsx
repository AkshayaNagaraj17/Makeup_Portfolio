import { useState } from "react";
import React from "react";
import logo from "../assets/shine.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center md:flex-row items-center justify-between p-4 bg-white shadow-md">
      <img className="w-32 h-auto ml-5" src={logo} alt="logo" />
      <button
        className="md:hidden text-customBrown focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
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
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-customBrown hover:cursor-pointer mt-4 md:mt-0`}
      >
        <li>Home</li>
        <li>Portfolio</li>
        <li>Services</li>
        <li>Booking</li>
        <li>Contact</li>
        <li>About</li>
      </ul>

      <div className="flex gap-4 mt-1 mr-5">
        <button className="bg-customBrown px-5 py-2 transition duration-300 ease-in-out border rounded-2xl text-white hover:bg-opacity-25  hover:text-customBrown">
          Signup
        </button>
        <button className="bg-customBrown px-5 py-2 transition duration-300 ease-in-out border rounded-2xl text-white hover:bg-opacity-25  hover:text-customBrown">
          Login
        </button>
      </div>
    </nav>
  );
}

export default NavBar;