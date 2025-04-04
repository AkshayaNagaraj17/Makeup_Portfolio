import { useState } from "react";
import emailjs from "emailjs-com";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
function Booking() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    venue: "",
    service: "",
  });

  const services = [
    "Bridal Makeup",
    "Guest Look",
    "Subtle Look",
    "Puberty Makeup",
    "Party Look",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!formData.email) {
      alert("Please enter your email to proceed with booking.");
      return;
    }

    try {
     
      const checkResponse = await fetch(`${API_BASE_URL}/api/client/clientBook/get?email=${formData.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const checkResult = await checkResponse.json();
  
      if (!checkResponse.ok) {
        alert(checkResult.message || "User not found. Please log in first.");
        return;
      }
  
  
      const response = await fetch(`${API_BASE_URL}/api/client/clientBook/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({

          clientName: formData.name, // Fix field name

          email: formData.email,
          phone: formData.number, 
          date: formData.date,
          venue: formData.venue,
          service: formData.service,
        }),
      });
  

 
      const result = await response.json();
  
      if (response.ok) {
        alert("Your booking has been submitted successfully!");
       
        emailjs.send(
          "service_b02tsse",
          "template_ux4cs9b",
          {
            client_name: formData.name,
            client_email: formData.email,
            client_phone: formData.number,
            appointment_date: formData.date,
            service_booked: formData.service,
            venue: formData.venue,
          },
          "VEMVEqCGroX1Sfd9U"
        )
        .then(
          () => alert("Booking confirmation email sent"),
          () => alert("Failed to send booking email")
        );


        setForm({
          name: "",
          email: "",
          number: "",
          date: "",
          venue: "",
          service: "",
        });
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting booking");
    }
  };

  return (
    <div className="bg-customBeige w-full p-5">
      <h1 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10">
        Schedule your Appointments !!
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div className="flex flex-col">
          <label className="mb-1">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Phone *</label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Event Date *</label>
          <input
            type=""
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Venue *</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Service *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          >
            <option value="" disabled>
              Select service
            </option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          <div className="flex flex-col mt-5">
          <label className="mb-1">Jewel Preferrence (Type the s.no. of jewel you like)</label>
          <input
            type="text"
            name="jewel"
            value={formData.jewel}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
        </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center ml-44 bg-customBrown px-5 py-2 my-20 rounded-2xl text-white"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Booking;
