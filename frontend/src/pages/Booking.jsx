import { useState } from "react";
import emailjs from "emailjs-com"
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
    try {
      const response = await fetch("/api/client/clientBook/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
        formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Your booking has been submitted successfully!");
        const emailParams={
          client_name: formData.name,
          client_email: formData.email,
          client_phone: formData.number,
          appointment_date: formData.date,
          service_booked: formData.service,
          venue: formData.venue,
        }
        emailjs.send(
          "service_b02tsse",
          "template_ux4cs9b",
          emailParams,
          "VEMVEqCGroX1Sfd9U"
        )
        .then(
          (response)=>
          {
            console.log("Email sent successfully",response.status,response.text)
            alert("Booking confirmed email has sent")
          },
          (error)=>{
            console.error("Failoed to send mail",error)
            alert("Failed to send your booking mail")
          }
        )
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
      console.error("Error submitting booking :", error);
      alert("Error submitting booking");
    }
  };

  return (
    <div className="bg-customBeige w-full p-5">
      <h1 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-xl md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">
        Schedule your Appointment
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
          <label className=" mb-1">Email *</label>
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
          <label className=" mb-1">Phone *</label>
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
          <label className=" mb-1">Event Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className=" mb-1">Venue *</label>
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
          <label className=" mb-1">Service *</label>
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
        </div>
        <button
          type="submit"
          className="flex items-center justify-center ml-44 bg-customBrown px-5 py-2 mt-10 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-opacity-25 hover:text-customBrown"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Booking;
