// frontend/src/components/Admin/AddService.jsx
import React, { useState } from 'react';

const AddService = () => {
  const [service, setService] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!service.name || !service.description || !service.price) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/admin/service/createService", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // If you have authentication, add the Authorization header:
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          name: service.name,
          description: service.description,
          price: parseFloat(service.price),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error adding service");
      }

      alert(data.message);
      // Clear the form
      setService({ name: '', description: '', price: '' });
    } catch (error) {
      console.error("Error adding service:", error);
      alert("Error adding service: " + error.message);
    }
  };

  return (
    <div>
      <h2>Manage Services</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Service Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={service.name}
            onChange={handleInputChange}
            placeholder="Enter service name"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Service Description:</label>
          <textarea
            id="description"
            name="description"
            value={service.description}
            onChange={handleInputChange}
            placeholder="Enter service description"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="price">Price ($):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={service.price}
            onChange={handleInputChange}
            placeholder="Enter price"
            required
          />
        </div>
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
