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
    <div className="bg-customBeige flex flex-col items-left justify-around">
      <div><form onSubmit={handleSubmit} className="p-5 m-10"> 
        <h1 className="text-customBrown font-avr tracking-widest text-xl text-center items-center p-10 sm:text-xl md:text-2xl hover:underline hover:scale-105 transition duration-300 ease-in-out">Create an Account</h1>
        <label>
          <input
            type="radio"
            value="client"
            required
            checked={role === "client"}
            onChange={() => setRole("client")} // Fixed state update
          />
          As Client
        </label>
        <label>
          <input
            type="radio"
            value="admin"
            required
            checked={role === "admin"}
            onChange={() => setRole("admin")} // Fixed state update
          />
          As Admin
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
        <div>
          <label htmlFor="email">Email: </label>
          <input
          className="p-2 border rounded"
            type="email"
            value={email}
            id="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
          className="p-2 border rounded"
            type="password" 
            value={password}
            id="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {role === "admin" && (
          <div>
            <input
            className="p-2 border rounded"
              type="text"
              placeholder="Secret Key"
              required
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
            />
          </div>
        )}
        <button
          type="submit"
          className="flex items-center justify-center ml-44 bg-customBrown px-5 py-2 mt-10 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-opacity-25 hover:text-customBrown"
        >
          Sign up
        </button>
      </form></div>
      
    </div>
  );
}

export default Signup;
