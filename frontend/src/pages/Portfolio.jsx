import React, { useState, useEffect } from "react";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PortfolioList = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        console.log("Fetching portfolio from:", `${API_BASE_URL}/api/client/clientPortfolio/get`);
        const response = await fetch(`${API_BASE_URL}/api/client/clientPortfolio/get`); // Ensure your API endpoint is correct
        const data = await response.json();
        console.log("Portfolio Data:", data);
        setPortfolio(data);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div>
      <h2 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-l md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">
        Portfolio
      </h2>
      <div className="bg-customBeige p-10 text-customBrown text-md font-lexend">
        Explore Our Works Through Our Portfolio !
      </div>
      <div className="mt-10 gap-10" style={{ display: "flex", flexWrap: "wrap" }}>
        {portfolio.length > 0 ? (
          portfolio.map((item) => {
            const fullImageUrl = `${API_BASE_URL}${item.image}`;
            console.log("Image URL:", fullImageUrl); // Debugging

            return (
              <div key={item._id} style={{ margin: "10px" }}>
                <img
                  className="h-auto mb-8 rounded-lg hover:scale-125 hover:brightness-110 transition delay-150 hover:shadow-2xl"
                  src={fullImageUrl}
                  alt="Portfolio"
                  style={{ width: "250px", height: "auto" }}
                  
                />
              </div>
            );
          })
        ) : (
          <p className="text-center text-customBrown">No portfolio items available.</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioList;
