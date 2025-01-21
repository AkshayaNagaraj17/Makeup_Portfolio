import React from "react";
function Home() {
  return (
    <div>
      {/* bg-picture */}
      <div
        className=" relative w-full  h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/images/Brush.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col justify-end items-center p-5 space-y-4">
          <div className="text-white font-bold font-lexend text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-right p-5 mt-20">
            <p>Treat your makeup </p>
            <p className="md:mt-10 ">like jewelry for the</p>
            <p className="md:mt-10">face</p>
          </div>
          <button className=" bg-customBrown ml-11 px-5 py-2 transition duration-300 ease-in-out  rounded-2xl text-white hover:bg-opacity-25  hover:text-customBrown">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* letsglam */}
      <div className="bg-customBrown h-[100px] w-full flex justify-center items-center">
        <p className="font-cursive text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-widest">
          Let's Glam !!!
        </p>
      </div>
      {/* welcome message */}
      <div>
        <p className="p-6 mt-10 mb-6 ml-32 text-customBrown font-welcome text-xl sm:text-xl md:text-3xl text-left ml-0 lg:text-3xl ">
          Welcome to shine studio ,
        </p>

        <div className="flex flex-col md:flex-row md:justify-center justify-evenly">
          <img
            className=" md:justify-center m-10 w-[100px] sm:w-[150px] md:w-[200px]"
            src="/images/Home-brush.png"
            alt="brush vector"
          />
          <div className="flex flex-col items-center  justify-center p-3 font-avr">
            <h2 className="text-customBrown text-xl sm:text-xl md:text-2xl lg:text-2xl mb-10 ">
              Explore Our Portfolio
            </h2>
            <p className="text-xl">
              Dive into our curated collection of makeup looks crafted
              <p> for weddings, photoshoots,</p>
              <p>parties, and everyday elegance.</p>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
