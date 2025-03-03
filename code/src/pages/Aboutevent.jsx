import React from 'react';

function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Producing 101</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl">
            <p className="text-xl mb-4">
              Join our two-day ideathon where <span className="text-blue-400">ideas</span> lead the way! Pitch your boldest ideas to real-world challenges and compete for an exciting <span className="text-green-400">internship opportunity</span>!
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-purple-700 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <p className="text-lg">DEI, Basic Engineering lab,<br />SRMIST</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-purple-700 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <p className="text-lg">22nd-23rd February, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
