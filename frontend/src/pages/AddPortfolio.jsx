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
    <div>
      <h2>Manage Portfolio</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default AddPortfolio;
