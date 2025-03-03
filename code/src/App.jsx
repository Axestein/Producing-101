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
      <section id="rewards" className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Rewards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-black bg-opacity-40 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                {/* Placeholder for the team illustration */}
                <div className="w-64 h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-sm text-gray-400">Team Illustration</span>
                </div>
              </div>
              
              <p className="text-lg mb-2">The top teams win an</p>
              <p className="text-xl mb-2">
                <span className="text-red-400">internship</span> at 
                <span className="text-green-400 ml-2">Niramaya Health Tech</span>, where 
                <span className="italic ml-1">innovation meets impact</span>.
              </p>
              
              <p className="text-xl font-bold mt-6">Pitch. Build. Intern.</p>
            </div>
            
            <div className="bg-black bg-opacity-40 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                {/* Placeholder for the study illustration */}
                <div className="w-64 h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-sm text-gray-400">Study Illustration</span>
                </div>
              </div>
              
              <p className="text-lg mb-2">Top teams will receive a free subscription to</p>
              <p className="text-xl">
                <span className="text-purple-400">premium placement preparation</span> material, exclusively offered by 
                <span className="text-blue-400 ml-2">Codenex</span> to elevate their career journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Niramaya Section */}
      <section id="about-niramaya" className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Niramaya</h2>
          <h3 className="text-3xl mb-12 text-center">Who we are?</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="w-64 h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-6xl text-purple-400">?</span>
            </div>
            
            <div className="max-w-lg text-center md:text-left">
              <p className="text-lg mb-6">
                Niramaya is <span className="italic">revolutionizing healthcare</span> with cutting-edge technology and innovation. From AI-powered solutions to seamless health management, we're making smarter, accessible care a reality.
              </p>
              <p className="text-lg mb-8">Transforming healthcare, one innovation at a time.</p>
              
              <p className="text-lg">Want to know more? Connect with us.</p>
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <a href="#" className="text-white hover:text-blue-400">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Have a question? Get in touch.</h3>
              <p className="mb-4">Thank you for visiting our website! If you have any questions or queries, drop us a message, and we'll get back to you promptly. Your time is valuable to us!</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail size={20} />
                  <span>codenexsrm@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram size={20} />
                  <span>@codenexsrm</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-400 text-3xl">C</span>
                <h3 className="text-xl font-bold">Codenex on campus</h3>
              </div>
              
              <p className="max-w-xs">
                Codenex, a tech club of SRM, is a dynamic hub for innovation and collaboration. Redefining the boundaries of technology, we empower students to build, learn, and lead, fostering a community where ideas transcend limits.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                  <li><a href="#about" className="hover:text-blue-400">About</a></li>
                  <li><a href="#timeline" className="hover:text-blue-400">Timeline</a></li>
                  <li><a href="#tracks" className="hover:text-blue-400">Tracks</a></li>
                  <li><a href="#panel" className="hover:text-blue-400">Panel</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Codenex socials</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Linkedin size={16} />
                    <a href="#" className="hover:text-blue-400">@codenexsrm</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram size={16} />
                    <a href="#" className="hover:text-blue-400">@codenexsrm</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={16} />
                    <a href="#" className="hover:text-blue-400">codenexsrm@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={16} />
                    <a href="#" className="hover:text-blue-400">+91 92876 52739</a>
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