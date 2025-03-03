import React from 'react';

function Home() {
  return (
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
  );
}

export default Home;
