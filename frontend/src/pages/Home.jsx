import React from "react";
import {motion} from "framer-motion"
function Home() {
  return (
    <div>
      {/* bg-picture */}
      <div
        className=" relative w-full  h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/images/Brush.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col justify-end items-end p-5 space-y-4">
          
          <div className="text-white items-end font-bold font-lexend text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-right p-5 mt-20">
            <p>Treat your makeup </p>
            <p className="md:mt-10 ">like jewelry for the</p>
            <p className="md:mt-10">face</p>
          </div>
          <button className=" bg-customBrown flex px-5 py-2 mr-20 transition duration-300 ease-in-out  rounded-2xl text-white hover:bg-opacity-25  hover:text-customBrown">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* letsglam */}
      <div className="bg-customBrown h-[100px] w-full flex justify-center items-center">
        <p className="font-cursive text-white text-2xl sm:text-3xl  md:text-4xl lg:text-4xl tracking-widest">
          Let's Glam !!!
        </p>
      </div>
      {/* welcome message */}
      <div>
        <p className="p-6 mt-10 mb-6 ml-32 text-customBrown font-welcome text-xl sm:text-2xl md:text-3xl ml-0 text-left  lg:text-3xl ">
          Welcome to shine studio ,
        </p>

        <div className="flex flex-col md:flex-row md:justify-items-end items-center justify-evenly">
          <img
            className=" md:justify-items-end m-10 w-[100px] sm:w-[150px] md:w-[200px]"
            src="/images/Home-brush.png"
            alt="brush vector"
          />
          <div className="flex flex-col items-center  justify-center p-3 font-avr">
            <h2 className="text-customBrown text-xl sm:text-xl md:text-2xl lg:text-2xl mb-10 ">
              Explore Our Portfolio
            </h2>
            <div className="text-xl">
              <p>
                Dive into our curated collection of makeup looks crafted
                <p> for weddings, photoshoots,</p>
                <p>parties, and everyday elegance.</p>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:justify-items-end items-center justify-evenly">
          <div className="flex flex-col items-center  justify-center p-3 font-avr">
            <h2 className="text-customBrown text-xl sm:text-xl md:text-2xl lg:text-2xl mb-10 ">
              For Every Occasion
            </h2>
            <div className="text-xl">
              <p>
                Whether you're a bride-to-be,
                <p> attending a special event, our services are </p>
                <p>designed to make you feel radiant and confident.</p>
              </p>
            </div>
          </div>
          <img
            className="  m-10 w-[100px] sm:w-[150px] md:w-[200px] justify-center"
            src="/images/Home-flower.png"
            alt="flower vector"
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-items-end items-center justify-evenly">
          <img
            className=" md:justify-items-end m-10 w-[100px] sm:w-[150px] md:w-[200px]"
            src="/images/Home-lip.png"
            alt="brush vector"
          />
          <div className="flex flex-col items-center  justify-center p-3 font-avr">
            <h2 className="text-customBrown text-xl sm:text-xl md:text-2xl lg:text-2xl mb-10 ">
              Book with Ease
            </h2>
            <div className="text-xl">
              <p>
                We’ve simplified the process of scheduling
                <p> your makeup appointments. Browse services,</p>
                <p>and secure your session—all in just a few clicks.</p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-customBrown tracking-widest text-center text-2xl ">
          Client Love !
        </h2>
        <div className="bg-customBeige rounded-xl w-1/2 p-5 mx-auto mb-10 mt-5 items-center text-center hover:shadow-xl shadow-red-200">
          <p>
            “I booked Rathi for a party makeup session, and she completely
            transformed me! The look was glamorous yet comfortable, and it
            stayed intact the whole night. Truly a professional with a magical
            touch!"
          </p>

          <p className="mt-6 text-center items-center text-customBrown font-semibold">
            - Riya
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
