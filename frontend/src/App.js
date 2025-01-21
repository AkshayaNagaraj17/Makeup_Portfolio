import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Portfolio from "./pages/Portfolio";
// import Service from "./pages/Service";
// import Booking from "./pages/Booking";
// import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/service" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
