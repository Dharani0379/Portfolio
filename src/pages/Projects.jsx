import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { Code, Rocket, Brain } from 'lucide-react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
const projectData = [
  {
    icon: '/projects/DocAssist.png',
    title: 'Medical Chatbot',
    desc: 'Offline-capable voice assistant',
    tech: 'React, Node.js, Python, Whisper, HuggingFace',
    link: 'https://doc-assist-frontend.vercel.app/'
  },
  {
    icon: <Brain size={32} className="text-white" />,
    title: 'Unknown',
    desc: 'Unknown',
    tech: 'CNN, TensorFlow, React',
    link: '#'
  },
  {
    icon: <Code size={32} className="text-white" />,
    title: 'Unkown',
    desc: 'unknown',
    tech: 'React, Tailwind, Flask',
    link: '#'
  }
]

function Projects() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768)
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
      spacing: 15
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 20 }
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 30 }
      }
    }
  })

  return (
    <div className="w-screen h-full md:h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center px-6 py-12 text-white">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-12">
          My Creative Projects
        </h1>

        {isMobile ? (
          <div className="grid gap-10 w-full max-w-3xl">
            {projectData.map(({ icon, title, desc, tech, link }, idx) => (
              <div key={idx} className="bg-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300">
                <div className="flex flex-col items-center gap-4">
              <div><img src={icon} alt="" /></div>
                  <h2 className="text-2xl font-semibold">{title}</h2>
                </div>
                <p className="mt-4 text-gray-300">{desc}</p>
                <p className="text-sm text-gray-400 mt-2">{tech}</p>
                <a
                  href={link}
                  className="mt-6 self-start text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div ref={sliderRef} className="keen-slider w-full max-w-6xl">
            {projectData.map(({ icon, title, desc, tech, link }, idx) => (
              <div key={idx} className="keen-slider__slide bg-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300">
                <div className="flex flex-col items-center gap-4">
                <div><img src={icon} alt="" /></div>
                  <h2 className="text-2xl font-semibold">{title}</h2>
                </div>
                <p className="mt-4 text-gray-300">{desc}</p>
                <p className="text-sm text-gray-400 mt-2">{tech}</p>
                <a
                  href={link}
                  className="mt-6 self-start text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
