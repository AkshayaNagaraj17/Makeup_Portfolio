import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const response = await fetch("http://localhost:5000/api/auth/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, role, password, secretKey }),
    });

    const data = await response.json(); 

    if (response.ok) {
      alert("Signed up successfully");
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="bg-customBeige flex justify-between items-center min-h-screen">
    <div className="w-full md:w-3/4 lg:w-1/2 p-5">
      <form onSubmit={handleSubmit} className="p-5 m-10">
        <h1 className="  text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-l md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">Create an Account</h1>
        <label className="mr-3 text-xl">
          <input
            type="radio"
            value="client"
            required
            checked={role === "client"}
            onChange={() => setRole("client")} // Fixed state update
          />
          As a Client
        </label>
        <label className="ml-5 text-xl">
          <input
            type="radio"
            value="admin"
            required
            checked={role === "admin"}
            onChange={() => setRole("admin")} // Fixed state update
          />
          As an Admin
        </label>
        <div className="flex flex-col mt-3">
          <label htmlFor="name">Name: </label>
          <input
            className="p-2 border rounded mt-3"
            type="text"
            value={name}
            id="name"
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="phone">Phone: </label>
          <input
            className="p-2 border rounded mt-3"
            type="number"
            value={phone}
            id="phone"
            placeholder="Enter your number"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="email">Email: </label>
          <input
            className="p-2 border rounded mt-3"
            type="email"
            value={email}
            id="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="password">Password: </label>
          <input
            className="p-2 border rounded mt-3"
            type="password"
            value={password}
            id="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {role === "admin" && (
          <div className="flex flex-col mt-3">
            <label>Secret Key of Admin:</label>
            <input
              className="p-2 border rounded mt-3"
              type="password"
              placeholder="Secret Key"
              required
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
            />
          </div>
        )}
        <button
          type="submit"
          className="flex items-center justify-center  bg-customBrown px-5 py-2 mt-10 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-opacity-25 hover:text-customBrown"
        >
          Sign up
        </button>
      </form>
    </div>
  
    {/* Right Side Image */}
    <div className="hidden md:block w-1/2 md:w-1/4 lg:w-1/2 h-screen bg-cover bg-center " style={{ backgroundImage: "url('/images/girl1.jpg')" }}></div>
  </div>
  
  );
}

export default Signup;
