import React, { useEffect, useRef } from 'react';

const Rewards = () => {
  const purpleGlowRef = useRef(null);
  const blueGlowRef = useRef(null);
  
  useEffect(() => {
    // Animate the glowing orbs
    const animateGlows = () => {
      if (purpleGlowRef.current && blueGlowRef.current) {
        const purpleAnimation = purpleGlowRef.current.animate(
          [
            { transform: 'translateY(0) translateX(0)', opacity: 0.2 },
            { transform: 'translateY(-30px) translateX(20px)', opacity: 0.3 },
            { transform: 'translateY(0) translateX(0)', opacity: 0.2 }
          ],
          {
            duration: 8000,
            iterations: Infinity
          }
        );
        
        const blueAnimation = blueGlowRef.current.animate(
          [
            { transform: 'translateY(0) translateX(0)', opacity: 0.2 },
            { transform: 'translateY(30px) translateX(-20px)', opacity: 0.3 },
            { transform: 'translateY(0) translateX(0)', opacity: 0.2 }
          ],
          {
            duration: 10000,
            iterations: Infinity
          }
        );
      }
    };
    
    animateGlows();
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full bg-black text-white p-8 min-h-screen overflow-hidden">
      {/* Placeholder for background image - you'll replace this */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {/* This div will be replaced with your background image */}
        <div className="w-full h-full bg-black"></div>
        
        {/* Keeping the glowing orbs for effect */}
        <div 
          ref={purpleGlowRef}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-700 rounded-full blur-3xl opacity-20"
        ></div>
        <div 
          ref={blueGlowRef}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-700 rounded-full blur-3xl opacity-20"
        ></div>
      </div>
      
      {/* Header with animation */}
      <h1 
        className="text-5xl font-bold text-white mb-12 relative"
        style={{
          animation: "fadeIn 1s ease-in-out, floatUp 1s ease-out"
        }}
      >
        Rewards
      </h1>
      
      {/* Content container */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left section */}
        <div 
          className="flex flex-col items-center md:items-start w-full md:w-1/2"
          style={{
            animation: "slideInLeft 1s ease-out"
          }}
        >
          <div className="relative mb-6 hover:scale-105 transition-transform duration-300">
            <img 
              src="/officework.png" 
              alt="Team meeting illustration" 
              className="w-64"
            />
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-lg mb-2 animate-fadeIn">
              The top teams win an 
              <span className="text-purple-400 font-medium"> internship </span>
              at
            </p>
            <p className="text-xl text-green-400 font-semibold mb-2 animate-fadeIn" style={{animationDelay: "0.2s"}}>
              Niramaya Health Tech
              <span className="text-white">, where</span>
            </p>
            <p className="mb-4 animate-fadeIn" style={{animationDelay: "0.4s"}}>
              <span className="italic">innovation</span> meets <span className="italic">impact</span>.
            </p>
            
            <p className="font-semibold text-xl mb-6 animate-pulse">Pitch. Build. Intern</p>
          </div>
        </div>
        
        {/* Right section */}
        <div 
          className="flex flex-col items-center md:items-start w-full md:w-1/2"
          style={{
            animation: "slideInRight 1s ease-out"
          }}
        >
          <div className="text-center md:text-left mb-6">
            <p className="text-lg mb-2 animate-fadeIn" style={{animationDelay: "0.6s"}}>
              Top teams will receive a free subscription to 
              <span className="text-blue-400 font-medium"> premium placement preparation </span>
            </p>
            <p className="mb-2 animate-fadeIn" style={{animationDelay: "0.8s"}}>
              material, exclusively offered by
            </p>
            <p className="text-xl text-green-400 font-semibold mb-2 animate-fadeIn" style={{animationDelay: "1s"}}>
              Codenex
              <span className="text-white"> to elevate their career journey.</span>
            </p>
          </div>
          
          <div className="relative flex justify-center items-center hover:scale-105 transition-transform duration-300">
            <img 
              src="/study.png" 
              alt="Student working illustration" 
              className="w-64"
            />
            <div className="absolute -top-4 right-0">
              <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center">
                  <div className="w-1 h-4 bg-gray-800 absolute"></div>
                  <div className="w-3 h-1 bg-gray-800 absolute rotate-90 translate-x-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional floating elements for animation */}
      <div className="absolute bottom-16 left-16 w-6 h-6 bg-green-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute top-24 right-24 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-30" style={{animationDelay: "1s"}}></div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes floatUp {
          from { transform: translateY(20px); }
          to { transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default Rewards;