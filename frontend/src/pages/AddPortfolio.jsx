import React, { useState } from 'react';


function AddPortfolio () {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response=await fetch("/api/admin/portfolio/createpf",{
            method:"POST",
            body:formData})
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error uploading image');
              }
        
              alert('Image uploaded successfully');
        } catch (err) {
            console.log(err);
            alert('Error uploading image');
        }
    };

    return (
        <div>
            <h2>Portfolio Manager</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload Image</button>
            </form>
        </div>
    );
};

export default AddPortfolio;
