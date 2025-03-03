import React from 'react';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import bgabout from "../assets/bgabout.png";

const Aboutevent = () => {
  return (
    <div 
      className="relative w-full bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${bgabout})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold tracking-tight">About Producting 101</h1>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-4xl mx-auto">
          <div className="flex-1 text-lg leading-relaxed">
            <p>
              Join our two-day ideathon where{' '}
              <span className="font-bold text-blue-400">ideas</span> lead the way! 
              Pitch your boldest ideas to real-world challenges and compete for an exciting{' '}
              <span className="font-bold text-blue-400">internship opportunity</span>!
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 md:w-1/3">
            <div className="flex items-center gap-3 mb-4 text-lg">
              <FaMapMarkerAlt className="text-blue-400" size={22} />
              <span>DEI, Basic Engineering Lab, SRMIST</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FaRegClock className="text-blue-400" size={22} />
              <span>22nd-23rd February, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutevent;