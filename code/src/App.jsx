import React from 'react';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';

function App() {
  return (
    <div className="font-sans">
      {/* Navbar - Sticky */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-90 text-white z-50 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">Codene<span className="text-blue-400">X</span>niramaya</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#timeline" className="hover:text-blue-400">Timeline</a>
            <a href="#tracks" className="hover:text-blue-400">Tracks</a>
            <a href="#sponsors" className="hover:text-blue-400">Sponsors</a>
            <a href="#panel" className="hover:text-blue-400">Panel</a>
          </div>
        </div>
      </nav>

      {/* Landing Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white pt-24 pb-16 px-6">
        <div className="container mx-auto flex flex-col justify-center h-full pt-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Producing 101</h1>
          <h2 className="text-2xl md:text-4xl mb-12">
            A one-of a kind hackathon where<br /> 
            ideas take the lead.
          </h2>
          <div className="mt-8">
            <p className="text-xl">Organised by <span className="font-bold">Codenex</span></p>
            <p className="text-xl">Powered by <span className="font-bold">Niramaya Health tech</span></p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Producting 101</h2>
          
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

      {/* Timeline / 101 Guide Section */}
      <section id="timeline" className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Your 101 guide</h2>
          
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-white transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-24">
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-white rounded-full transform -translate-x-1/2"></div>
                <div className="ml-10 md:ml-0 md:pl-12 md:pr-0 md:w-1/2 md:relative md:left-0">
                  <h3 className="text-xl font-bold">Registration & Networking</h3>
                  <p className="mt-2">Start strong by meeting peers, mentors, and innovators.</p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-white rounded-full transform -translate-x-1/2"></div>
                <div className="ml-10 md:ml-0 md:pr-12 md:w-1/2 md:relative md:left-1/2">
                  <h3 className="text-xl font-bold">Review 1 (Ideathon)</h3>
                  <p className="mt-2">Pitch your groundbreaking idea and fine-tune it with expert insights and constructive feedback.</p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-white rounded-full transform -translate-x-1/2"></div>
                <div className="ml-10 md:ml-0 md:pl-12 md:pr-0 md:w-1/2 md:relative md:left-0">
                  <h3 className="text-xl font-bold">Panel Discussion</h3>
                  <p className="mt-2">Engage in thought-provoking conversations with industry leaders and gain fresh perspectives.</p>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-white rounded-full transform -translate-x-1/2"></div>
                <div className="ml-10 md:ml-0 md:pr-12 md:w-1/2 md:relative md:left-1/2">
                  <h3 className="text-xl font-bold">Hackathon Kickoff</h3>
                  <p className="mt-2">Transform your ideas into reality through collaboration and impactful innovation.</p>
                </div>
              </div>
              
              {/* Item 5 */}
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-white rounded-full transform -translate-x-1/2"></div>
                <div className="ml-10 md:ml-0 md:pl-12 md:pr-0 md:w-1/2 md:relative md:left-0">
                  <h3 className="text-xl font-bold">Review 2</h3>
                  <p className="mt-2">Refine your solution with guidance from experienced mentors to elevate it further.</p>
                </div>
              </div>
              
              {/* Item 6 */}
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-white rounded-full transform -translate-x-1/2"></div>
                <div className="ml-10 md:ml-0 md:pr-12 md:w-1/2 md:relative md:left-1/2">
                  <h3 className="text-xl font-bold">Final Review</h3>
                  <p className="mt-2">Showcase your innovation and compete for the ultimate prize - coveted internships!</p>
                </div>
              </div>
              
              {/* Item 7 */}
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-white rounded-full transform -translate-x-1/2"></div>
                <div className="ml-10 md:ml-0 md:pl-12 md:pr-0 md:w-1/2 md:relative md:left-0">
                  <h3 className="text-xl font-bold">Closing & Celebration</h3>
                  <p className="mt-2">Conclude the journey with recognition, announcements, and a celebration of achievements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Tracks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Track 1 */}
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col h-64">
              <h3 className="text-xl font-bold mb-2">Secure Data Management on the Chain</h3>
              <p className="flex-grow">Build blockchain solutions for secure, private, and transparent data management.</p>
            </div>
            
            {/* Track 2 */}
            <div className="bg-teal-800 rounded-lg p-6 flex flex-col h-64">
              <h3 className="text-xl font-bold mb-2">GenAI for Innovative Applications</h3>
              <p className="flex-grow">Use generative AI to design creative, impactful applications across industries.</p>
            </div>
            
            {/* Track 3 */}
            <div className="bg-purple-800 rounded-lg p-6 flex flex-col h-64">
              <h3 className="text-xl font-bold mb-2">Optimized Insurance Solutions</h3>
              <p className="flex-grow">Simplify insurance processes with smart, tech-driven platforms.</p>
            </div>
            
            {/* Track 4 */}
            <div className="bg-blue-800 rounded-lg p-6 flex flex-col h-64">
              <h3 className="text-xl font-bold mb-2">Tech-Driven Lead Generation Platforms</h3>
              <p className="flex-grow">Develop systems to streamline lead generation and connect businesses.</p>
            </div>
            
            {/* Track 5 */}
            <div className="bg-amber-800 rounded-lg p-6 flex flex-col h-64">
              <h3 className="text-xl font-bold mb-2">Open Innovation</h3>
              <p className="flex-grow">Create unique solutions to tackle real-world challenges across any domain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <div className="flex flex-col items-center w-full bg-black text-white p-8 min-h-screen">
      {/* Header */}
      <h1 className="text-5xl font-bold text-white mb-12">Rewards</h1>
      
      {/* Content container */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <div className="relative mb-6">
            <img 
              src="/api/placeholder/300/250" 
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
              src="/api/placeholder/300/200" 
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

      {/* About Niramaya Section */}
      <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-16 px-6 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-purple-600 filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-600 filter blur-3xl opacity-20"></div>
      
      {/* Main content container */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Top heading - absolute positioned to avoid overlapping */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold">About Niramaya</h1>
        </div>
        
        {/* Illustration section - positioned with proper z-index */}
        <div className="relative flex justify-center items-center h-96 mb-8">
          {/* Question mark SVG */}
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
          
          {/* Person illustration */}
          <div className="relative z-10">
            <img 
              src="/questionman.svg" 
              alt="Person thinking"
              className="h-96 object-contain"
            />
          </div>
        </div>
        
        {/* Text content below the illustration */}
        <div className="text-center mt-16">
          {/* Who we are heading */}
          <h2 className="text-5xl font-bold mb-8">Who we are?</h2>
          
          {/* Description */}
          <p className="text-xl mb-6 leading-relaxed max-w-3xl mx-auto">
            Niramaya is <span className="italic">revolutionizing healthcare</span> with cutting-edge technology and innovation. From AI-powered solutions to seamless health management, we're making smarter, accessible care a reality.
          </p>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Transforming healthcare, one innovation at a time.
          </p>
          
          {/* Call to action */}
          <p className="text-2xl font-semibold mb-8">
            Want to know more? Connect with us.
          </p>
          
          {/* Social icons */}
          <div className="flex justify-center space-x-6">
            <a href="#linkedin" className="p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
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
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left section - Contact */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-4xl font-bold mb-6">Have a question? Get in touch.</h3>
            <p className="mb-8 text-lg max-w-xl">
              Thank you for visiting our website! If you have any questions or queries, drop us a message, and we'll get back to you promptly. Your time is valuable to us!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-md">
                  <Mail size={24} />
                </div>
                <span className="text-xl">codenexsrm@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-md">
                  <Instagram size={24} />
                </div>
                <span className="text-xl">@codenexsrm</span>
              </div>
            </div>
          </div>
          
          {/* Middle section - Logo and description */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full object-cover" />
             </div>
              <div>
                <h3 className="text-3xl font-bold">Codenex on</h3>
                <h3 className="text-3xl font-bold">campus</h3>
              </div>
            </div>
            
            <p className="max-w-xs text-gray-300">
              Codenex, a tech club of SRM, is a dynamic hub for innovation and collaboration. Redefining the boundaries of technology, we empower students to build, learn, and lead, fostering a community where ideas transcend limits.
            </p>
          </div>
          
          {/* Right section - Links and socials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h4 className="text-2xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-xl hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-xl hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#timeline" className="text-xl hover:text-cyan-400 transition-colors">Timeline</a></li>
                <li><a href="#tracks" className="text-xl hover:text-cyan-400 transition-colors">Tracks</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-6">Codenex socials</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md">
                    <Linkedin size={20} />
                  </div>
                  <a href="#" className="hover:text-cyan-400 transition-colors">@codenexsrm</a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md">
                    <Instagram size={20} />
                  </div>
                  <a href="#" className="hover:text-cyan-400 transition-colors">@codenexsrm</a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md">
                    <Mail size={20} />
                  </div>
                  <a href="#" className="hover:text-cyan-400 transition-colors">codenexsrm@gmail.com</a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md">
                    <Phone size={20} />
                  </div>
                  <a href="#" className="hover:text-cyan-400 transition-colors">+91 92876 52739</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}


export default App;