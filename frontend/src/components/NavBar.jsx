import { useState } from "react";
import { Link  } from "react-router-dom";
import React from "react";
import logo from "../assets/logoshine.png";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate=useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSignup=()=>
  {
    navigate("/signup")
  }
  const handleLogin=()=>
  {
    navigate("/login")
  }
  return (
    <nav className="flex flex-col  md:flex-row items-center justify-between p-4 bg-white shadow-md">
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
        <Link className="hover:scale-110" to="/">Home</Link>
        <Link className="hover:scale-110" to="/portfolio">Portfolio</Link >
        <Link className="hover:scale-110" to="/service">Services</Link >
        <Link className="hover:scale-110" to="/booking">Booking</Link >
        <Link className="hover:scale-110" to="/contact">Contact</Link >
        <Link className="hover:scale-110" to="/about">About</Link >
      </ul>

      <div className="flex gap-4 mt-1 mr-5">
        <button className="bg-customBrown px-5 py-2 transition duration-300 ease-in-out border rounded-2xl text-white hover:bg-opacity-25  hover:text-customBrown" onClick={handleSignup}>
          Signup
        </button>
        <button className="bg-customBrown px-5 py-2 transition duration-300 ease-in-out border rounded-2xl text-white hover:bg-opacity-25  hover:text-customBrown" onClick={handleLogin}>
          Login
        </button>
      </div>
    </nav>
  );
}

export default NavBar;