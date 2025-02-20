import React from "react";
import BookingList from "./BookList";
import AddPortfolio from "./AddPortfolio";
import AddService from "./AddService";
function AdminDashboard() {
  return (
    <div>
      
      <div className="flex flex-col  p-3 font-avr">
        <h1 className="text-customBrown font-avr tracking-widest text-xl text-center  p-10 sm:text-xl md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">
          Admin Dashboard
        </h1>
        <div
        className=" relative w-full  h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/images/girlmakeup.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center text-left ">
          <div className="text-customBrown text-lg sm:text-xl md:text-2xl p-6 max-w-2xl">
          <h1 className="text-customBrown font-bold font-cursive tracking-widest mb-5">Welcome MakeupArtist !</h1>
            <p>Manage your bookings, portfolio, and</p>
            <p className="md:mt-10 ">clients effortlessly in one place. Stay</p>
            <p className="md:mt-10">organized, track your progress, and provide</p>
          <p className="md:mt-10">the best experience for your clients."</p>
          </div>
          
        </div>
      </div>
       
      </div>

      <div>
        <AddPortfolio />
      </div>
      <div>
        <AddService></AddService>
      </div>
      <div>
        <BookingList />
      </div>
    </div>
  );
}

export default AdminDashboard;
