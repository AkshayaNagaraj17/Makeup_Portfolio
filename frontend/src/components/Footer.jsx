import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram,FaMailBulk,FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-customBrown text-white text-md py-6 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center">
        
        
        <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-6 md:flex-row">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/home" className="hover:underline">
            Home
          </Link>
          <Link to="/booking" className="hover:underline">
            Booking
          </Link>
        </div>

       
        <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-6 md:flex-row mt-4 md:mt-0"> 
          <Link to="/portfolio" className="hover:underline">
            Portfolio
          </Link>
          <Link to="/service" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
     


        <div className="mt-4 flex flex-row gap-3 md:mt-1 "> Social Media : 
        <a
            href="http://instagram.com"
            className="text-white hover:text-amber-500"
            aria-label="Instagram"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="http://instagram.com"
            className="text-white hover:text-amber-500"
            aria-label="Instagram"
          >
            <FaMailBulk size={25} />
          </a>
          <a
            href="http://instagram.com"
            className="text-white hover:text-amber-500"
            aria-label="Instagram"
          >
            <FaWhatsapp size={25} />
          </a>
        </div>
      </div>

      
      <div className="text-center mt-6">
        <p>&copy; {new Date().getFullYear()} Shine Studio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
