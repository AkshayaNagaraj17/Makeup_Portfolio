// frontend/src/components/Client/PortfolioList.jsx
import React, { useState, useEffect } from "react";

const PortfolioList = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/client/clientPortfolio/get"); // Ensure you have a GET endpoint
        const data = await response.json();
        setPortfolio(data);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div>
      <h2 className="mb-11 text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-l md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">Portfolio</h2>
      <div className="bg-customBeige p-10 text-xl font-montserratfont-semibold text-customBrown mb-10">Explore Our Works Through Our Portfolio</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {portfolio.map((item) => (
          <div key={item._id} style={{ margin: "10px" }}>
            <img className=" m-5 rounded-lg hover:scale-150 hover:brightness-105"
              src={item.image} // The image field holds the base64 string
              alt="Portfolio"
              style={{ width: "400px", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
