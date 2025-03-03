import React, { useEffect, useState } from 'react';


const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/bgImage.png" alt="Background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Animated gradient shapes */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-700/30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-700/30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-pink-700/30 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen pl-11 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-white text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
              <span className="block transform transition-transform duration-500 hover:translate-x-2">
                Producting 101
              </span>
            </h1>
            
            <p className="text-white text-2xl md:text-3xl mb-8 tracking-wide">
              A one-of a kind hackathon where 
              <br />
              ideas take the lead.
            </p>
            
            <div className="mb-12">
              <p className="text-gray-300 mb-1">Organised by <span className="text-white font-semibold">Codenex</span></p>
              <p className="text-gray-300">Powered by <span className="text-purple-400 font-semibold">Niramaya Health tech</span></p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30">
                Register Now
              </button>
              <button className="px-8 py-3 border border-purple-400 text-white font-medium rounded-lg hover:bg-purple-500/20 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating animated elements */}
      <div className="hidden md:block absolute top-1/3 right-10 w-32 h-32 border border-purple-400/30 rounded-full animate-pulse"></div>
      <div className="hidden md:block absolute bottom-1/3 left-20 w-24 h-24 border border-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-16 h-16 border border-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      
      {/* Mobile menu (hidden by default) */}
      <div className="hidden fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center">
        <button className="absolute top-6 right-6 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col space-y-6 text-center">
          <a href="#" className="text-white text-2xl hover:text-purple-400 transition-colors">Home</a>
          <a href="#" className="text-white text-2xl hover:text-purple-400 transition-colors">About</a>
          <a href="#" className="text-white text-2xl hover:text-purple-400 transition-colors">Timeline</a>
          <a href="#" className="text-white text-2xl hover:text-purple-400 transition-colors">Tracks</a>
          <a href="#" className="text-white text-2xl hover:text-purple-400 transition-colors">Sponsors</a>
          <a href="#" className="text-white text-2xl hover:text-purple-400 transition-colors">Panel</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;