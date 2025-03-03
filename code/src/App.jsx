import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from "../src/pages/Home";
import Aboutus from "../src/pages/Aboutus";
import Aboutevent from "../src/pages/Aboutevent";
import Footer from "../src/pages/Footer";
import Tracks from "../src/pages/Tracks";
import TimeLine from "../src/pages/TimeLine";
import Rewards from "../src/pages/Rewards";
import Navbar from "../src/pages/Navbar";
import AboutNiramaya from './pages/AboutNiramaya';

function App() {
  return (
    <Router>  {/* Ensure Router is wrapping everything */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutevent" element={<Aboutevent />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/AboutNiramaya" element={<AboutNiramaya />} />
        </Routes>
        <Aboutevent />
        <TimeLine />
        <Tracks />
        <Rewards />
        <AboutNiramaya/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
