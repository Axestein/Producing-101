import React from 'react';

const Rewards = () => {
  return (
    <div className="flex flex-col items-center w-full bg-black text-white p-8 min-h-screen">
      {/* Header */}
      <h1 className="text-5xl font-bold text-white mb-12">Rewards</h1>
      
      {/* Content container */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <div className="relative mb-6">
            <img 
              src="/officework.png" 
              alt="Team meeting illustration" 
              className="w-64"
            />
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-lg mb-2">
              The top teams win an 
              <span className="text-purple-400 font-medium"> internship </span>
              at
            </p>
            <p className="text-xl text-green-400 font-semibold mb-2">
              Niramaya Health Tech
              <span className="text-white">, where</span>
            </p>
            <p className="mb-4">
              <span className="italic">innovation</span> meets <span className="italic">impact</span>.
            </p>
            
            <p className="font-semibold text-xl mb-6">Pitch. Build. Intern</p>
          </div>
        </div>
        
        {/* Right section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <div className="text-center md:text-left mb-6">
            <p className="text-lg mb-2">
              Top teams will receive a free subscription to 
              <span className="text-blue-400 font-medium"> premium placement preparation </span>
            </p>
            <p className="mb-2">
              material, exclusively offered by
            </p>
            <p className="text-xl text-green-400 font-semibold mb-2">
              Codenex
              <span className="text-white"> to elevate their career journey.</span>
            </p>
          </div>
          
          <div className="relative flex justify-center items-center">
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
      
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-700 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-700 rounded-full blur-3xl opacity-20"></div>
      </div>
    </div>
  );
};

export default Rewards;