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
      <h2 className="  text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-l md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">Portfolio</h2>
      <div className="bg-customBeige p-10 text-customBrown text-md font-lexend ">Explore Our Works Through Our Portfolio</div>
      <div className="mt-10  gap-10"style={{ display: "flex", flexWrap: "wrap" }}>
        {portfolio.map((item) => (
          <div className="" key={item._id} style={{ margin: "10px" }}>
            <img
            className=" w-48 h-auto mb-8 rounded-lg hover:scale-150 hover:brightness-110 transition delay-150 hover:shadow-xl"
              src={item.image} // The image field holds the base64 string
              alt="Portfolio"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
