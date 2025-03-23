import { useState, useEffect } from "react";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/admin/bookings/getbooking`)
      .then((response) => {
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched bookings:", data);
        setBookings(data);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
      });
  }, []);

  return (
    <div className="p-4 mb-10">
      <h1 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-xl md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">Bookings</h1>
      <div className=" overflow-x-auto shadow-lg rounded-lg  sm:text-sm md:text-md lg:text-lg">
      <table className=" w-full border-collapse border border-gray-700 mb-10">
        <thead className="text-customBrown text-lg px-3 hover:bg-customBrown transition delay-75 hover:text-white">
          <tr>
            <th className="border px-5 py-2">Client</th>
            <th className="border px-5 py-2">Email</th>
            <th className="border px-5 py-2">Phone</th>
            <th className="border px-5 py-2">Service</th>
            <th className="border px-5 py-2">Date</th>
            
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr className="hover:bg-customBeige transition delay-150"key={booking._id}>
              <td className="border px-5 py-2">{booking.clientName}</td>
              <td className="border px-5 py-2">{booking.email}</td>
              <td className="border px-5 py-2">{booking.phone}</td>
              <td className="border px-5 py-2">{booking.service}</td>
              <td className="border px-5 py-2">{new Date(booking.date).toLocaleString()}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default BookingList;
