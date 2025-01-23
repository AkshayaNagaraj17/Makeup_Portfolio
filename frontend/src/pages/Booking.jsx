import { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents default submission and reload and handle it by js
    console.log("Booking details:", formData);
    alert("Your booking has been submitted");
    setForm({
      name: "",
      email: "",
      number: "",
      date: "",
      venue: "",
      service: "",
    });
  };

  return (
    <div className="bg-customBeige w-full  md: p-5">
      <h1 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-xl md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">
        Schedule your Appointments
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center  w-full ">
          <label htmlFor="name" className=" ml-2">
            Name *{" "}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id="name"
            placeholder="Enter your name"
            required
            className="p-2 mt-3  w-full sm:w-3/4 md:w-3/4  lg:w-1/2  rounded-lg block"
          />
          <label htmlFor="email" className=" ml-2 mt-5">
            Email *{" "}
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            placeholder="Enter your email"
            required
            className="p-2 mt-3  w-full sm:w-3/4 md:w-3/4  lg:w-1/2  rounded-lg block"
          />
          <label htmlFor="number" className=" ml-2 mt-5">
            Phone *{" "}
          </label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            id="number"
            placeholder="Ph.no."
            required
            className="p-2 mt-3  w-full sm:w-3/4 md:w-3/4  lg:w-1/2  rounded-lg block"
          />
          <label htmlFor="date" className="mt-5 ml-2">
            Event Date *{" "}
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Enter date"
            required
            className="p-2 mt-3  w-full sm:w-3/4 md:w-3/4  lg:w-1/2  rounded-lg block"
          />
          <label htmlFor="venue" className="mt-5 ml-2">
            Venue *{" "}
          </label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            placeholder="venue"
            required
            className="p-2 mt-3  w-full sm:w-3/4 md:w-3/4  lg:w-1/2  rounded-lg block"
          />
          <label htmlFor="service" className="mt-5 ml-2">
            What are you looking for? *{" "}
          </label>
          <select
            name="service"
            id="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="Select Service"
            required
            className="p-2 mt-3  w-full sm:w-3/4 md:w-3/4 lg:w-1/2 rounded-lg "
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
          <button className=" bg-customBrown px-5 py-2  transition duration-300 ease-in-out  mt-10 flex items-center rounded-2xl text-white hover:bg-opacity-25  hover:text-customBrown">
            BOOK NOW
          </button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
