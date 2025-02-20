import React from "react";
import BookingList from "./BookList";
import AddPortfolio from "./AddPortfolio";
import AddService from "./AddService";
function AdminDashboard() {
  return (
    <div>
      <div className="flex flex-col items-center  justify-center p-3 font-avr">
        <h1 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-xl md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">
          Admin Dashboard
        </h1>
        <div className="text-xl">
          <p>
            Manage your bookings, portfolio, and
            <p> clients effortlessly in one place. Stay </p>
            <p>organized, track your progress, and provide</p>
            <p>the best experience for your clients."</p>
          </p>
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
