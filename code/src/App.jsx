import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from "../src/pages/Home";
import Aboutus from "../src/pages/Aboutus";
import Aboutevent from "../src/pages/Aboutevent";
import AboutNiramaya from "./pages/AboutNiramaya";
import Footer from "../src/pages/Footer";
import Tracks from "../src/pages/Tracks";
import TimeLine from "../src/pages/TimeLine";
import Rewards from "../src/pages/Rewards";
import Navbar from "../src/pages/Navbar";

function App() {
  return (
    <Router>  {/* Ensure Router is wrapping everything */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/aboutevent" element={<Aboutevent />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Aboutevent />
        <TimeLine />
        <Tracks />
        <Rewards />
        <Aboutus />
        <AboutNiramaya/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
