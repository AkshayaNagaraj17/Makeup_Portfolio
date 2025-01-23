
import {FaPlane} from "react-icons/fa"
function About() {
  return (
    <div>
      <div className="flex flex-col md:flex-col  lg:flex-row ">
        <img
          className="w-full lg:w-3/4  mt-8 mb-8 mr-10 rounded-md sm:w-full  md:w-full"
          src="/images/bridal2.jpg"
          alt="MakeupArtist"
        />
        <div className="w-full   text-center flex flex-col justify-center items-center">
          <div className="max-w-lg  m-8 text-center">
            <h2 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-xl md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">
              Meet Rathi Priya !
            </h2>
            <p className="font-bf text-xl text-left ">
              Hi, I’m Rathi Priya, a passionate and professional makeup artist
              dedicated to celebrating beauty in all its forms. With [15 years]
              of experience in the art of makeup, I specialize in creating
              personalized looks that enhance natural features while reflecting
              individual style and personality.
            </p>
          </div>
        </div>
      </div>

      <div className="font-bf flex flex-col text-xl justify-center text-left items-center mx-24 mt-16">
        <div className="lg:max-w-lg">
        <p> Over the years, I’ve had the privilege of working with countless clients for weddings, photoshoots, parties, and more. Each experience has reinforced my belief that makeup isn’t just about appearance—it’s about confidence, expression, and self-love.</p>
        <div className=" space-y-8">
        <ul className="list-disc">
            <li className="mt-8">My Philosophy: Every face is unique, and my goal is to bring out your best features while making you feel comfortable and radiant.</li >
        
            <li className="mt-8">My Commitment: I use only high-quality, skin-friendly products and the latest techniques to ensure a flawless and long-lasting finish.</li >
            <li className="mt-8">My Passion: Whether it’s a soft, natural look or bold, glamorous artistry, I’m here to bring your vision to life.</li>
        </ul>
        <p className="border border-hidden p-5 rounded-lg  hover:bg-customBrown hover:bg-opacity-20 transition delay-200 ease-in-out">Thank you for trusting me to be a part of your special moments. I can’t wait to work with you and make your beauty shine!</p>
        </div>
        </div>
      </div>
      <h2 className="text-customBrown mb-10 font-avr tracking-widest text-xl text-center items-center p-10 sm:text-xl md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out flex justify-center">
        Open to Travel<FaPlane className="flex ml-5"/>
            </h2>
    </div>
  );
}

export default About;
