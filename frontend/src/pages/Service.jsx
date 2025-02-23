// frontend/src/components/Client/ServiceList.jsx
import React, { useState, useEffect } from "react";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/client/clientService/get");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h2 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-l md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">Our Services</h2>
      <div className="mb-16 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 p-5">
        {services.map((service) => (
          <div className="bg-customBeige rounded-xl shadow-md  border border-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out" key={service._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3 className="p-3 font-lexend text-customBrown text-xl mb-5">{service.name}</h3>
            <p className=" p-3 font-avr text-xl mb-3">{service.description}</p>
            <p className="p-3 text-lg font-semibold text-customBrown">Price: ₹{service.price}/-</p>
          </div>
        ))}
      </div>
      <div className="m-8 ">
        <h1 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-l md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">Products we use :
        </h1>
        <p className="mb-5 font-montserrat text-lg">Premium Products for Flawless Results</p>
        <p className="mb-5 ">At Shine Studio , we believe the foundation of great makeup lies in the quality of the products we use. That’s why we work with top-tier brands known for their exceptional performance and skin-friendly formulas.</p>
        <ul className="list-disc m-5 font-semibold">
          <li className="mb-5">Trusted Brands: From iconic favorites like MAC , Forever 52 , and 
          Estee Lauder, our kit is stocked with the best.</li>
          <li className="mb-5">Skin-Friendly: Safe, lightweight, and designed to enhance without irritation.</li>
          <li className="mb-5">Long-Lasting Glam: Perfect for every occasion, our products ensure you stay radiant for 8-10 hours.</li>
        </ul>
        <p>With every brushstroke, we blend artistry with the finest makeup essentials to deliver results that are as stunning as they are lasting.</p>
      </div>
      <div className="m-8 mb-36">
        <h1 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-l md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">Travel charges :</h1>
        <p className="font-avr text-lg">To ensure our professional makeup services are accessible to you, we offer the convenience of on-location appointments. Travel charges may apply based on your location to cover transportation and setup costs</p>
        <p className=" text-center text-xl font-welcome text-customBrown mt-5"> Complimentary travel within Pollachi</p>
      </div>
    </div>
  );
};

export default ServiceList;
