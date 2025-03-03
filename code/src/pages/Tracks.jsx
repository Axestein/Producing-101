import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TracksSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const tracks = [
    {
      id: 1,
      title: 'Secure Data Management on the Chain',
      description: 'Build blockchain solutions for secure, private, and transparent data management.',
      bgImage: 'url("/data.png")', // Replace with your blockchain background image
      icon: '🔐',
      color: 'from-gray-600 to-gray-800',
    },
    {
      id: 2,
      title: 'GenAI for Innovative Applications',
      description: 'Use generative AI to design creative, impactful applications across industries.',
      bgImage: 'url("/genai.png")', // Replace with your AI background image
      icon: '🧠',
      color: 'from-teal-500 to-teal-700',
    },
    {
      id: 3,
      title: 'Optimized Insurance Solutions',
      description: 'Simplify insurance processes with smart, tech-driven platforms.',
      bgImage: 'url("/insurance.png")', // Replace with your insurance background image
      icon: '🛡️',
      color: 'from-purple-600 to-purple-800',
    },
    {
      id: 4,
      title: 'Tech-Driven Lead Generation Platforms',
      description: 'Develop systems to streamline lead generation and connect businesses.',
      bgImage: 'url("/tech.png")', // Replace with your lead generation background image
      icon: '📊',
      color: 'from-blue-600 to-blue-800',
    },
    {
      id: 5,
      title: 'Open Innovation',
      description: 'Create unique solutions to tackle real-world challenges across any domain.',
      bgImage: 'url("/open.png")', // Replace with your innovation background image
      icon: '🚀',
      color: 'from-amber-500 to-amber-700',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Grid pattern for background
  const GridPattern = () => (
    <div className="absolute inset-0 opacity-10">
      <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:14px_14px]" />
    </div>
  );

  // Glow effects for background
  const GlowEffects = () => (
    <>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse" />
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse" />
    </>
  );

  // Particle effect
  const Particles = () => {
    const particles = Array.from({ length: 40 });
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, index) => {
          const size = Math.random() * 4 + 1;
          const duration = Math.random() * 15 + 10;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          
          return (
            <motion.div
              key={index}
              className="absolute rounded-full bg-white opacity-30"
              style={{
                width: size,
                height: size,
                left: `${initialX}%`,
                top: `${initialY}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 text-white py-16 relative overflow-hidden">
      {/* Page Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a3a_0%,#000000_100%)]" />
      <GridPattern />
      <GlowEffects />
      <Particles />
      
      <div className="relative z-10">
        <motion.h1 
          className="text-6xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tracks
        </motion.h1>

        <motion.div 
          className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {tracks.map((track) => (
            <motion.div
              key={track.id}
              className="relative overflow-hidden rounded-xl h-64 cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
              onMouseEnter={() => setHoveredCard(track.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background with pattern and gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${track.color}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:24px_24px] opacity-10" />
              
              {/* Background image with overlay */}
              <div 
                className="absolute inset-0 opacity-15 bg-no-repeat bg-center bg-cover" 
                style={{ backgroundImage: track.bgImage }} 
              />
              
              {/* Glassmorphism layer */}
              <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-[2px]" />
              
              {/* Animated glow on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0"
                animate={hoveredCard === track.id ? { 
                  opacity: 1,
                  transition: { duration: 0.5 }
                } : {}}
              />
              
              {/* Card content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div>
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={hoveredCard === track.id ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0, -5, 0],
                      transition: { duration: 2, repeat: Infinity }
                    } : {}}
                  >
                    {track.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                  <p className="text-sm text-white/80">{track.description}</p>
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/10"
                  animate={hoveredCard === track.id ? {
                    y: [0, -10, 0],
                    opacity: [0.5, 0.8, 0.5],
                    transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' }
                  } : {}}
                />
                
                <motion.div 
                  className="absolute top-6 right-6 w-6 h-6 rounded-full bg-white/10"
                  animate={hoveredCard === track.id ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                    transition: { duration: 3, repeat: Infinity, repeatType: 'reverse' }
                  } : {}}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TracksSection;