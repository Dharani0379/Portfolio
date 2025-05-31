import React from 'react'
import Navbar from '../component/Navbar'
import profile from '../assets/Images/profile.jpg'

function Home() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* Left Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
            Hello Everyone
          </h1>
          <h2 className="text-white mt-4 text-xl md:text-2xl font-medium">
            Aspiring Frontend Developer
          </h2>
          <a
            href="/your-resume.pdf"
            download
            className="inline-block mt-6 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
          >
            Download CV
          </a>
        </div>

        {/* Right Image Section */}
        <div className='h-50 w-50  md:w-60 md-60 lg:w-80 lg:h-80'>
          <img
            src={profile}
            alt="Profile"
            className="rounded-full shadow-2xl border-2 border-white hover:scale-105 transition-transform duration-300 "
          />
        </div>
      </div>
    </div>
  )
}

export default Home
