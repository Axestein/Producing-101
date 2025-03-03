import { Linkedin, Instagram, Mail } from "lucide-react";

const AboutNiramaya = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-16 px-6 overflow-hidden" style={{ backgroundImage: "url('/bgImage.jpg')" }}>
      {/* Background gradient effects */}
      <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-purple-600 filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-600 filter blur-3xl opacity-20"></div>
      
      {/* Main content container */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Top heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold">About Niramaya</h1>
        </div>
        
        {/* Illustration section */}
        <div className="relative flex justify-center items-center h-96 mb-8">
          <div className="absolute z-0 opacity-80">
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M150 300C232.843 300 300 232.843 300 150C300 67.1573 232.843 0 150 0C67.1573 0 0 67.1573 0 150C0 232.843 67.1573 300 150 300Z" fill="url(#paint0_linear)" fillOpacity="0.8"/>
              <path d="M118.5 200H150V231.5H118.5V200ZM150 181.25H118.5C118.5 140.625 159.375 140.625 159.375 112.5C159.375 98.75 148.125 87.5 134.375 87.5C120.625 87.5 109.375 98.75 109.375 112.5H78.125C78.125 81.25 103.125 56.25 134.375 56.25C165.625 56.25 190.625 81.25 190.625 112.5C190.625 150 150 156.25 150 181.25Z" fill="white"/>
              <defs>
                <linearGradient id="paint0_linear" x1="150" y1="0" x2="150" y2="300" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6"/>
                  <stop offset="1" stopColor="#3B82F6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="relative z-10">
            <img 
              src="/questionman.svg" 
              alt="Person thinking"
              className="h-96 object-contain"
            />
          </div>
        </div>
        
        {/* Text content */}
        <div className="text-center mt-16">
          <h2 className="text-5xl font-bold mb-8">Who we are?</h2>
          <p className="text-xl mb-6 leading-relaxed max-w-3xl mx-auto">
            Niramaya is <span className="italic">revolutionizing healthcare</span> with cutting-edge technology and innovation. From AI-powered solutions to seamless health management, we're making smarter, accessible care a reality.
          </p>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Transforming healthcare, one innovation at a time.
          </p>
          <p className="text-2xl font-semibold mb-8">
            Want to know more? Connect with us.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/company/niramaya-healthtech" className="p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
              <Linkedin size={24} color="white" />
            </a>
            <a href="#instagram" className="p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
              <Instagram size={24} color="white" />
            </a>
            <a href="#email" className="p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
              <Mail size={24} color="white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNiramaya;
