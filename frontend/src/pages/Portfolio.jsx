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
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {portfolio.map((item) => (
          <div key={item._id} style={{ margin: "10px" }}>
            <img
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
