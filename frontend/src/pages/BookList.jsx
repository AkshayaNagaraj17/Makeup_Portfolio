import { useState,useEffect } from "react";



function BookingList()
{

    const [bookings,setBookings]=useState([])

    useEffect(()=>
    {
        fetch("/api/admin/bookings/getbooking")
        .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch bookings");
            }
            return response.json();
          })
          .then((data) => setBookings(data))
          .catch((err) => console.error(err));
    },[])
    return(
        <div>
            <h1>Bookings</h1>
            <table>
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Email</th>
                        <th> Phone</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking)=>(
                        <tr key={booking._id}>
                            <td>{booking.clientName}</td>
                            <td>{booking.email}</td>
                            <td>{booking.phone}</td>
                            <td>{booking.service}</td>
                            <td>{new Date (booking.date).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BookingList