import React from 'react';
import timelinebg from "../assets/timelinebg.png";

const TimeLine = () => {
  const timelineSteps = [
    {
      id: 1,
      title: "Registration & Networking",
      description: "Start strong by meeting peers, mentors, and innovators."
    },
    {
      id: 2,
      title: "Review 1 (Ideathon)",
      description: "Pitch your groundbreaking idea and fine-tune it with expert insights and constructive feedback."
    },
    {
      id: 3,
      title: "Panel Discussion",
      description: "Engage in thought-provoking conversations with industry leaders and gain fresh perspectives."
    },
    {
      id: 4,
      title: "Hackathon Kickoff",
      description: "Transform your ideas into reality through collaboration and impactful innovation"
    },
    {
      id: 5,
      title: "Review 2",
      description: "Refine your solution with guidance from experienced mentors to elevate its potential."
    },
    {
      id: 6,
      title: "Final Review",
      description: "Showcase your innovation and compete for the ultimate prize – coveted internships!"
    },
    {
      id: 7,
      title: "Closing & Celebration",
      description: "Conclude the journey with recognition, announcements, and a celebration of achievements."
    }
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${timelinebg})` }}
    >
      {/* Dark overlay for better contrast with text */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Event Journey</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-400 transform -translate-x-1/2"></div>
          
          {timelineSteps.map((step, index) => (
            <div 
              key={step.id} 
              className={`relative flex flex-col md:flex-row items-center md:items-start mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Step number bubble */}
              <div className="z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg mb-4 md:mb-0 border-2 border-white">
                {step.id}
              </div>
              
              {/* Content box - transparent with glass effect */}
              <div 
                className={`relative w-full md:w-5/12 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-md bg-white bg-opacity-10 border border-white border-opacity-20 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
              >
                {/* Connector line (visible only on desktop) */}
                <div 
                  className={`hidden md:block absolute top-6 h-1 bg-gradient-to-r from-blue-400 to-purple-500 w-8 ${
                    index % 2 === 0 ? 'left-full' : 'right-full'
                  }`} 
                ></div>
                
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white text-opacity-90">{step.description}</p>
                
                {/* Decorative element */}
                <div className={`absolute h-2 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full ${
                  index % 2 === 0 ? 'left-0' : 'right-0'
                } -bottom-1`}></div>
              </div>
            </div>
          ))}
          
          {/* Final circle at the end of timeline */}
          <div className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-white shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;