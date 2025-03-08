import React, { useState } from "react";

const AddPortfolio = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    console.log("Selected File:", file);
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    console.log("FormData:", formData.get("image"));

    try {
      const response = await fetch("http://localhost:5000/api/admin/portfolio/createpf", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Error uploading image");
      }

      alert("Image uploaded successfully!");
      setSelectedFile(null);
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
        <p>Start curating your masterpiece gallery today!</p>
      </div>
      <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <input
          className="w-full cursor-pointer border border-gray-300 rounded-lg p-3 file:bg-customBrown file:text-white file:px-4 file:py-2 file:rounded-md file:cursor-pointer file:border-none hover:file:bg-opacity-90 transition"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
        <button
          className="flex items-center justify-center bg-customBrown px-5 py-2 mt-10 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-opacity-25 hover:text-customBrown"
          type="submit"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
