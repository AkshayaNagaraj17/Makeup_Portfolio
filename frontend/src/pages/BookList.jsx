import { useState, useEffect } from "react";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [month, setMonth] = useState("");
  const [service, setService] = useState("");
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/admin/bookings/getbooking`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched bookings:", data);
        setBookings(data);
        setFilteredBookings(data); // Set initial data
      })
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  useEffect(() => {
    let filtered = bookings;

    if (month) {
      filtered = filtered.filter((booking) => {
        const bookingMonth = new Date(booking.date).getMonth() + 1; // Months are 0-based in JS
        return bookingMonth === parseInt(month);
      });
    }

    if (service) {
      filtered = filtered.filter((booking) => booking.service === service);
    }

    if (clientName) {
      filtered = filtered.filter((booking) =>
        booking.clientName.toLowerCase().includes(clientName.toLowerCase())
      );
    }

    setFilteredBookings(filtered);
  }, [month, service, clientName, bookings]);

  return (
    <div className="p-4 mb-10">
      <h1 className="text-customBrown font-avr tracking-widest text-xl text-center p-10 sm:text-xl md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">
        Booking Reports
      </h1>

      
      <div className="mb-5 flex flex-wrap gap-4">
        <select onChange={(e) => setMonth(e.target.value)} className="p-2 border rounded">
          <option value="">Filter by Month</option>
          {[...Array(12).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(2025, i, 1).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>

        <select onChange={(e) => setService(e.target.value)} className="p-2 border rounded">
          <option value="">Filter by Service</option>
          <option value="Bridal Makeup">Bridal Makeup</option>
          <option value="Guest Look">Guest Look</option>
          <option value="Subtle Look">Subtle Look</option>
          <option value="Puberty Look">Puberty Look</option>
          <option value="Party Look">Party Look</option>
        </select>

        <input
          type="text"
          placeholder="Search by Client Name"
          onChange={(e) => setClientName(e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      {/* Bookings Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg sm:text-sm md:text-md lg:text-lg">
        <table className="w-full border-collapse border border-gray-700 mb-10">
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
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr className="hover:bg-customBeige transition delay-150" key={booking._id}>
                  <td className="border px-5 py-2">{booking.clientName}</td>
                  <td className="border px-5 py-2">{booking.email}</td>
                  <td className="border px-5 py-2">{booking.phone}</td>
                  <td className="border px-5 py-2">{booking.service}</td>
                  <td className="border px-5 py-2">{new Date(booking.date).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border px-5 py-2 text-center">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingList;
