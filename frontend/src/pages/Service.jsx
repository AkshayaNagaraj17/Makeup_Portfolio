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
      <h2>Our Services</h2>
      <div>
        {services.map((service) => (
          <div key={service._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
