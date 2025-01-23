import { useState } from "react";
import emailjs from "emailjs-com"
function Contact()
{
        const [formData,setForm] =useState({name:"",email:"",message:""})
        const handleChange=(e)=>
            {
                const{name,value}=e.target;
                setForm({...formData,[name]:value})
            }
        const handleSubmit=(e)=>
        {
            e.preventDefault();
            if (!formData.name || !formData.email || !formData.message) {
                alert("All fields are required!");
                return;
            }
            emailjs.send(
                "service_b02tsse","template_ux4cs9b",
                {
                    name:formData.name,
                    email:formData.email,
                    message:formData.message
                },"VEMVEqCGroX1Sfd9U"
            )
            .then(
                (result)=>{
                    console.log("Message sent:",result.text)
                    alert("Message sent succefully")
                },
                (error)=>{
                    console.log("Error:",error)
                    alert("Failed to sent message")
                }
                )
                setForm({name:"",email:"",message:""})
            
        }
       
        return(
            <div className="bg-customBeige  pb-20">
            <form onSubmit={handleSubmit}>
              <h1 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-xl md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">
                Get in Touch
              </h1>
              <div className="flex flex-col justify-center items-center">
                
                {/* Name Field */}
                <div className="w-full max-w-xl mb-4">
                  <label
                    htmlFor="name"
                    className="block font-medium mb-2"
                  >
                    Name:
                  </label>
                  <input
                    className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                  />
                </div>
          
                {/* Email Field */}
                <div className="w-full max-w-xl mb-4">
                  <label
                    htmlFor="email"
                    className="block font-medium mb-2"
                  >
                    Email:
                  </label>
                  <input
                    className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </div>
          
                {/* Message Field */}
                <div className="w-full max-w-xl mb-4">
                  <label
                    htmlFor="message"
                    className="block font-medium mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                  ></textarea>
                </div>
          
                
                <button
                  type="submit"
                  className="bg-customBrown px-5 py-2 transition duration-300 ease-in-out mt-10 flex items-center rounded-2xl text-white hover:bg-opacity-25 hover:text-customBrown"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          
        )


}

export default Contact