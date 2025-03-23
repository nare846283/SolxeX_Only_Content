import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Easy from "./pages/Easy";
import Medium from "./pages/Medium";
import Hard from "./pages/Hard";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard" element={<Hard />} />
      </Routes>
    </Router>
  );
};

export default App;
