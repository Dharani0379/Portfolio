import React from 'react'
import Navbar from '../component/Navbar'
import { GraduationCap, BookOpen, Award } from 'lucide-react'

export default function Education() {
  const cards = [
    {
      icon: <GraduationCap size={28} className="text-white" />,
      title: 'B.E. Computer Science',
      institution: 'KSR College of Engineering, Tiruchengode',
      period: '2022 – Present',
      desc:
        'Final year',
      dotColor: 'bg-blue-500'
    },
    {
      icon: <BookOpen size={28} className="text-white" />,
      title: '12th Grade',
      institution: 'Aanoor Vidyalaya Matric Higher Secondary School, Muthur',
      period: '2022',
      desc: 'Scored 86.3%',
      dotColor: 'bg-green-400'
    },
    {
      icon: <Award size={28} className="text-white" />,
      title: '10th Grade',
      institution: 'Aanoor Vidyalaya Matric Higher Secondary School, Muthur',
      period: '2020',
      desc: 'Scored 84.4% ',
      dotColor: 'bg-purple-400'
    }
  ]

  return (
    <div className="w-screen h-full lg:h-screen md:h-screen bg-black flex flex-col overflow-hidden justify-center items-center">
      <Navbar />
      <div className="flex-1 flex flex-col md:flex-row items-start justify-center px-4 py-8 gap-8">
        {/* Left Title */}
        <div className="md:w-1/3 text-center  text-white justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            My Education Journey
          </h1>
          <p className="mt-4 text-xl font-medium">
            A snapshot of my key academic milestones.
          </p>
        </div>

        {/* Right Timeline */}
        <div className="relative w-full md:w-2/3">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-gradient-to-b from-gray-700 to-gray-600 shadow-xl"></div>

          {cards.map(({ icon, title, institution, period, desc, dotColor }, idx) => (
            <div key={title} className={`relative pl-12 mb-12`}>
              {/* Dot on the line with animation */}
              <div
                className={`absolute left-3 top-2 w-6 h-6 rounded-full border-2 border-black ${dotColor} transform transition-all duration-300 hover:scale-125`}
              ></div>

              {/* Card content with hover effect */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 space-y-2  lg:w-100" >
                <div className="flex items-center space-x-3">
                  {icon}
                  <h2 className="text-2xl text-white font-semibold">{title}</h2>
                </div>
                <p className="text-gray-400">{institution}</p>
                <p className="text-gray-300">{period}</p>
                <p className="text-gray-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
