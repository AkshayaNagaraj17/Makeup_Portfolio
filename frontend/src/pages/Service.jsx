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
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 m-5 p-5">
        {services.map((service) => (
          <div  key={service._id} className="bg-customBeige rounded-xl shadow-md  border border-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out" style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3 className="font-lexend text-customBrown text-2xl font-semibold mb-8 hover:underline transition delay-75">{service.name}</h3>
            <p  className="font-avr text-lg text-gray-700 mb-5">{service.description}</p>
            <p className="text-customBrown font-semibold">Price: ${service.price}</p>
          </div>
        ))}
      </div>
      <h1 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-l md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">Products We Use :</h1>
      <div className="m-5 p-5 font-avr">
        <p className="text-xl mb-10">Premium Products for Flawless Results</p>
        <p className="text-lg">At Shine Studio , we believe the foundation of great makeup lies in the quality of the products we use. That’s why we work with top-tier brands known for their exceptional performance and skin-friendly formulas.</p>
        <ul className="list-disc m-10 text-lg font-semibold font-avr">
          <li className="mb-6">Trusted Brands: From iconic favorites like MAC , Forever 52 , and 
          Estee Lauder, our kit is stocked with the best.</li>
          <li className="mb-6">Skin-Friendly: Safe, lightweight, and designed to enhance without irritation.</li>
          <li className="mb-6">Long-Lasting Glam: Perfect for every occasion, our products ensure you stay radiant for 8-10 hours.</li>
        </ul>
        <p className="text-lg">With every brushstroke, we blend artistry with the finest makeup essentials to deliver results that are as stunning as they are lasting.</p>
      </div>
      <h1 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-l md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">Travel Charges :</h1>
      <p className="font-avr text-xl m-5 p-5">To ensure our professional makeup services are accessible to you, we offer the convenience of on-location appointments. Travel charges may apply based on your location to cover transportation and setup costs</p>
      <p className=" font-avr text-xl text-center text-customBrown mb-20"> Complimentary travel within Pollachi</p>
    </div>
  );
};

export default ServiceList;
