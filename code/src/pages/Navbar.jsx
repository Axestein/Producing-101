import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 text-white z-50 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">Codene<span className="text-blue-400">X</span>niramaya</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/timeline" className="hover:text-blue-400">Timeline</Link>
          <Link to="/tracks" className="hover:text-blue-400">Tracks</Link>
          <Link to="/rewards" className="hover:text-blue-400">Rewards</Link>
          <Link to="/about-niramaya" className="hover:text-blue-400">About Niramaya</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
