
import React, { useState } from 'react';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
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

   
    if (!service.name || !service.description || !service.price) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/service/createService`, {
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
    <div className='flex flex-col items-center justify-center'>
      <h2 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-xl md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">Manage Services</h2>
      <div className="w-full p-5 text-lg mb-5 bg-customBeige text-customBrown font-avr tracking-widest">
    <p>Update your menu to match your evolving artistry!</p>
              </div>
      <form className='flex flex-col  items-center' onSubmit={handleSubmit}>
        <div className='p-5 m-5 '>
          <label className="text-black font-avr text-xl" htmlFor="name">Service Name:   </label>
          <input
          className='border-collapse border-2 p-3 mt-5 w-full'
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
          <label   className="text-black font-avr text-xl" htmlFor="description">Service Description:</label>
          <textarea
            className='border-collapse border-2 p-3 mt-5 w-full'
            id="description"
            name="description"
            
            value={service.description}
            onChange={handleInputChange}
            placeholder="Enter service description"
            required
          ></textarea>
        </div>
        <div>
          <label className="text-black font-avr text-xl" htmlFor="price">Price ($):</label>
          <input
           className='border-collapse border-2 p-3 mt-5 w-full'
            type="number"
            id="price"
            name="price"
            value={service.price}
            onChange={handleInputChange}
            placeholder="Enter price"
            required
          />
        </div>
        <button className="flex items-center justify-center  bg-customBrown px-5 py-2 mt-10 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-opacity-25 hover:text-customBrown" type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
