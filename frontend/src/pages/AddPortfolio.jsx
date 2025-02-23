// frontend/src/components/Admin/AddPortfolio.jsx
import React, { useState } from "react";

const AddPortfolio = () => {
  const [base64Image, setBase64Image] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result);
    };
    reader.readAsDataURL(file); // Convert file to base64 string
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!base64Image) {
      alert("Please select an image first.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/admin/portfolio/createpf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // If you have auth enabled, you can include the token:
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ image: base64Image }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Error uploading image");
      }
      alert(data.message);
      setBase64Image(""); // Optionally reset the state
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading image: " + error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
     <h1 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-xl md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">
                Upload new Portfolio
              </h1>
              <div className="w-full p-5 text-lg mb-5 bg-customBeige text-customBrown font-avr tracking-widest">
    <p>Start curating your masterpiece
    gallery today!</p>
              </div>
      <form className="flex flex-col items-center justify-center"onSubmit={handleSubmit}>
        <input className="w-full cursor-pointer border border-gray-300 rounded-lg p-3 file:bg-customBrown file:text-white file:px-4 file:py-2 file:rounded-md file:cursor-pointer file:border-none hover:file:bg-opacity-90 transition" type="file" onChange={handleFileChange} accept="image/*" />
        <button className="flex items-center justify-center  bg-customBrown px-5 py-2 mt-10 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-opacity-25 hover:text-customBrown" type="submit">Upload Image</button>
      </form>
    
    </div>
  );
};

export default AddPortfolio;
