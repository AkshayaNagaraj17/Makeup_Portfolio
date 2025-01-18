import { FaInstagram,FaMailBulk,FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-customBrown text-white text-md py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        
        <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-6 md:flex-row">
          <a href="/About" className="hover:underline">
            About
          </a>
          <a href="/Home" className="hover:underline">
            Home
          </a>
          <a href="/Booking" className="hover:underline">
            Booking
          </a>
        </div>

       
        <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-6 md:flex-row mt-4 md:mt-0"> 
          <a href="/Portfolio" className="hover:underline">
            Portfolio
          </a>
          <a href="/Service" className="hover:underline">
            Terms of Service
          </a>
          <a href="/Contact" className="hover:underline">
            Contact Us
          </a>
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
