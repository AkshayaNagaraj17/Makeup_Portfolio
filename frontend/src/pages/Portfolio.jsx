import React, { useState, useEffect } from "react";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const PortfolioList = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        console.log("API_BASE_URL:", API_BASE_URL);
        console.log("Fetching portfolio from:", `${API_BASE_URL}/api/client/clientPortfolio/get`);

        const response = await fetch(`${API_BASE_URL}/api/client/clientPortfolio/get`);
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
        Explore Our Works Through Our Portfolio!
      </div>

      {/* Static Images (Displayed Before Portfolio Items) */}
      <div className="flex flex-wrap justify-center gap-10">
        <img
          className="mb-8 rounded-lg hover:scale-125 hover:brightness-110 transition delay-150 hover:shadow-2xl"
          src="/images/m1.jpg"
          alt="Portfolio"
          style={{ width: "250px", height: "auto" }}
        />
        <img
          className="mb-8 rounded-lg hover:scale-125 hover:brightness-110 transition delay-150 hover:shadow-2xl"
          src="/images/m2.jpg"
          alt="Portfolio"
          style={{ width: "250px", height: "auto" }}
        />
         <img
          className="mb-8 rounded-lg hover:scale-125 hover:brightness-110 transition delay-150 hover:shadow-2xl"
          src="/images/j4.jpg"
          alt="Portfolio"
          style={{ width: "250px", height: "auto" }}
        />
         <img
          className="mb-8 rounded-lg hover:scale-125 hover:brightness-110 transition delay-150 hover:shadow-2xl"
          src="/images/m11.jpg"
          alt="Portfolio"
          style={{ width: "250px", height: "auto" }}
        />
         <img
          className="mb-8 rounded-lg hover:scale-125 hover:brightness-110 transition delay-150 hover:shadow-2xl"
          src="/images/m7.jpg"
          alt="Portfolio"
          style={{ width: "250px", height: "auto" }}
        />
         <img
          className="mb-8 rounded-lg hover:scale-125 hover:brightness-110 transition delay-150 hover:shadow-2xl"
          src="/images/m19.jpg"
          alt="Portfolio"
          style={{ width: "250px", height: "auto" }}
        />
         <img
          className="mb-8 rounded-lg hover:scale-125 hover:brightness-110 transition delay-150 hover:shadow-2xl"
          src="/images/m25.jpg"
          alt="Portfolio"
          style={{ width: "250px", height: "auto" }}
        />
      </div>

      {/* Portfolio Images from API */}
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {portfolio.length > 0 ? (
          portfolio.map((item) => {
            const fullImageUrl = item.image.startsWith("http") ? item.image : `${API_BASE_URL}${item.image}`;

            console.log("Image URL:", fullImageUrl);

            return (
              <div key={item._id} style={{ margin: "10px" }}>
                <img
                  className="mb-8 rounded-lg hover:scale-125 hover:brightness-110 transition delay-150 hover:shadow-2xl"
                  src={fullImageUrl}
                  alt="Portfolio"
                  style={{ width: "250px", height: "auto" }}
                />
              </div>
            );
          })
        ) : (
          <p className="text-center text-customBrown">.......</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioList;
