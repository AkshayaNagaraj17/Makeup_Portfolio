import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation(); // This will work only if App is inside Router
  
  const shouldusenavfooter = location.pathname !== "/signup" && location.pathname !== "/login" ;

  return (
    <div>
      {shouldusenavfooter && <NavBar />}  {/* Render NavBar only if condition is true */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/service" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard></AdminDashboard>}></Route>
      </Routes>
      {shouldusenavfooter && <Footer />}  {/* Render Footer only if condition is true */}
    </div>
  );
}

// Wrap the entire application with Router in index.js (or wherever you render App)
export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
