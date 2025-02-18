import React from "react";
import BookingList from "./BookList";
import AddPortfolio from "./AddPortfolio";


function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Bookings</h2>
        <BookingList />
      </div>
      <div>
        <h2>Manage Portfolio</h2>
        <AddPortfolio />
      </div>
      
    </div>
  );
};

export default AdminDashboard;
